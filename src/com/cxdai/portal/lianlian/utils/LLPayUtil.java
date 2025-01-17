package com.cxdai.portal.lianlian.utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.Signature;
import java.security.spec.X509EncodedKeySpec;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanMap;
import org.apache.commons.codec.binary.Base64;

import com.cxdai.portal.lianlian.model.LianLianFormGenerator;
import com.cxdai.portal.lianlian.vo.LlBaseRequest;
import com.cxdai.portal.lianlian.vo.LlBaseResponse;
import com.cxdai.portal.lianlian.vo.LlWapSendFormRequest;
import com.cxdai.portal.statics.BusinessConstants;
import com.cxdai.portal.util.JsonUtils;
import com.cxdai.utils.file.FileUtil;

/**
 * <p>
 * Description:连连支付工具类<br />
 * </p>
 * 
 * @title LLPayUtil.java
 * @package com.cxdai.portal.lianlian.utils
 * @author justin.xu
 * @version 0.1 2014年10月30日
 */
public class LLPayUtil {

	/**
	 * <p>
	 * Description:读取异步返回request流<br />
	 * </p>
	 * 
	 * @author justin.xu
	 * @version 0.1 2014年10月30日
	 * @param request
	 * @return
	 * @throws Exception String
	 */
	public static String readReqStr(HttpServletRequest request) throws Exception {
		BufferedReader reader = null;
		StringBuilder sb = new StringBuilder();
		reader = new BufferedReader(new InputStreamReader(request.getInputStream(), "utf-8"));
		String line = null;
		while ((line = reader.readLine()) != null) {
			sb.append(line);
		}
		reader.close();
		return sb.toString();
	}

	/**
	 * <p>
	 * Description:回调验签是否正确<br />
	 * </p>
	 * 
	 * @author justin.xu
	 * @version 0.1 2014年10月30日
	 * @param llBaseResponse
	 * @return
	 * @throws Exception boolean
	 */
	public static boolean validateSignMsg(LlBaseResponse llBaseResponse) throws Exception {
		X509EncodedKeySpec bobPubKeySpec = new X509EncodedKeySpec(Base64.decodeBase64(BusinessConstants.ONLINE_PAY_LIANLIANPAY_PUB_KEY));
		KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		PublicKey pubKey = keyFactory.generatePublic(bobPubKeySpec);
		Signature signetcheck = Signature.getInstance("MD5withRSA");
		signetcheck.initVerify(pubKey);
		signetcheck.update(LLPayUtil.generateToSignContent(llBaseResponse).getBytes("UTF-8"));
		return signetcheck.verify(Base64.decodeBase64(llBaseResponse.getSign()));
	}

	/**
	 * <p>
	 * Description:生成验签字符串<br />
	 * </p>
	 * 
	 * @author justin.xu
	 * @version 0.1 2015年3月25日
	 * @param object
	 * @return String
	 */
	public static String generateToSignContent(Object object) {
		StringBuffer content = new StringBuffer();
		BeanMap params = new BeanMap(object);
		return packageSignContent(content, params);
	}

	/**
	 * <p>
	 * Description:生成请求支付表单字符串<br />
	 * </p>
	 * 
	 * @author justin.xu
	 * @version 0.1 2014年5月28日
	 * @param paymentInfo
	 * @return String
	 */
	public static String generateFormString(LlBaseRequest paymentInfo, String actionUrl) throws Exception {
		LianLianFormGenerator formGenerator = new LianLianFormGenerator();
		formGenerator.setActionUrl(actionUrl);
		formGenerator.setFormElementId("llpaySendForm");
		formGenerator.setSignType(BusinessConstants.ONLINE_PAY_LIANLIANPAY_SIGNTYPE);
		formGenerator.setKey(FileUtil.readFile(LLPayUtil.class.getResource("/").getPath() + BusinessConstants.ONLINE_PAY_LIANLIANPAY_RPIVATE_KEY));
		formGenerator.init();
		// 生成密钥
		paymentInfo = formGenerator.generateSign(paymentInfo);
		String result = formGenerator.generateFormString(paymentInfo, null);
		return result;
	}

	/**
	 * <p>
	 * Description:生成请求手机支付表单字符串<br />
	 * </p>
	 * 
	 * @author justin.xu
	 * @version 0.1 2014年5月28日
	 * @param paymentInfo
	 * @return String
	 */
	public static String generateWapFormString(LlBaseRequest paymentInfo, String actionUrl) throws Exception {
		LianLianFormGenerator formGenerator = new LianLianFormGenerator();
		formGenerator.setActionUrl(actionUrl);
		formGenerator.setFormElementId("llpaySendForm");
		formGenerator.setSignType(BusinessConstants.ONLINE_PAY_LIANLIANPAY_SIGNTYPE);
		formGenerator.setKey(FileUtil.readFile(LLPayUtil.class.getResource("/").getPath() + BusinessConstants.ONLINE_PAY_LIANLIANPAY_RPIVATE_KEY));
		formGenerator.init();
		// 生成密钥
		paymentInfo = formGenerator.generateSign(paymentInfo);
		String reqDataJson = JsonUtils.bean2Json(paymentInfo);
		LlWapSendFormRequest llWapSendFormRequest = new LlWapSendFormRequest();
		llWapSendFormRequest.setReq_data(reqDataJson);
		String result = formGenerator.generateFormString(llWapSendFormRequest, "true");
		return result;
	}

	/**
	 * <p>
	 * Description:封装签名对象为字符串<br />
	 * </p>
	 * 
	 * @author justin.xu
	 * @version 0.1 2014年11月4日
	 * @param content
	 * @param params
	 * @return String
	 */
	private static String packageSignContent(StringBuffer content, BeanMap params) {
		// 按照key做首字母升序排列
		List<String> keys = new ArrayList<String>(params.keySet());
		Collections.sort(keys, String.CASE_INSENSITIVE_ORDER);
		for (int i = 0; i < keys.size(); i++) {
			String key = (String) keys.get(i);
			if ("sign".equals(key) || "class".equals(key)) {
				continue;
			}
			String value = String.valueOf(params.get(key));
			// 空串不参与签名
			if (null == value || value.equalsIgnoreCase("null") || value.equals("")) {
				continue;
			}
			content.append((i == 0 ? "" : "&") + key + "=" + value);

		}
		String signSrc = content.toString();
		if (signSrc.startsWith("&")) {
			signSrc = signSrc.replaceFirst("&", "");
		}
		return signSrc;
	}
}
