package com.cxdai.wx.account.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cxdai.common.page.Page;
import com.cxdai.portal.account.service.AccountService;
import com.cxdai.portal.account.service.MyAccountReportService;
import com.cxdai.portal.account.vo.AccountVo;
import com.cxdai.portal.base.BaseController;
import com.cxdai.portal.base.MessageBox;
import com.cxdai.portal.borrow.service.BorrowService;
import com.cxdai.portal.borrow.vo.BorrowCnd;
import com.cxdai.portal.invest.service.CollectionRecordService;
import com.cxdai.portal.member.service.BankInfoService;
import com.cxdai.portal.member.service.BankcardChangeService;
import com.cxdai.portal.member.service.MemberService;
import com.cxdai.portal.member.service.RealNameApproService;
import com.cxdai.portal.member.vo.BankInfoVo;
import com.cxdai.portal.member.vo.BankcardChange;
import com.cxdai.portal.member.vo.BankcardPic;
import com.cxdai.portal.member.vo.MemberApproVo;
import com.cxdai.portal.member.vo.MemberCnd;
import com.cxdai.portal.member.vo.MemberVo;
import com.cxdai.portal.member.vo.RealNameApproVo;
import com.cxdai.portal.repayment.service.BRepaymentRecordService;
import com.cxdai.portal.repayment.vo.RepaymentRecordCnd;
import com.cxdai.security.ShiroUser;
import com.cxdai.utils.DateUtils;
import com.cxdai.utils.MD5;
import com.cxdai.utils.StrinUtils;
import com.cxdai.wx.account.service.SafeCenterService;

/**
 * 微信-我的账户
 * <p>
 * Description:这里写描述<br />
 * </p>
 * @title AccountController.java
 * @package com.cxdai.wx.account.controller
 * @author huangpin
 * @version 0.1 2014年10月22日
 */
@Controller
@RequestMapping(value = "/wx/account")
public class AccountController extends BaseController {

	public Logger logger = Logger.getLogger(AccountController.class);

	@Autowired
	private AccountService accountService;
	@Autowired
	private MyAccountReportService myAccountReportService;
	@Autowired
	private MemberService memberService;
	@Autowired
	private CollectionRecordService collectionRecordService;
	@Autowired
	private BorrowService borrowService;
	@Autowired
	private BRepaymentRecordService bRepaymentRecordService;
	@Autowired
	private BankInfoService bankInfoService;
	@Autowired
	private RealNameApproService realNameApproService;
	@Autowired
	private SafeCenterService safeCenterService;
	@Autowired
	private BankcardChangeService changeService;

	/**
	 * 账户首页
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2014年10月22日
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/index")
	@ResponseBody
	public Map<String, Object> toIndex() {
		try {
			ShiroUser shiroUser = currentUser();
			if (shiroUser != null) {
				Integer userId = shiroUser.getUserId();
				Map<String, Object> map = new HashMap<String, Object>();

				// 会员头像，用户名，会员等级，VIP有效期
				MemberCnd memberCnd = new MemberCnd();
				memberCnd.setId(shiroUser.getUserId());
				MemberVo memberVo = memberService.queryMemberByCnd(memberCnd);
				map.put("headImg", memberVo.getHeadimg());
				map.put("userName", shiroUser.getUserName());
				map.put("userLevel", memberService.queryUserLevelByMemberId(userId));
				MemberApproVo memberApproVo = memberService.queryMemberApproByUserId(userId);
				if (memberApproVo != null) {
					map.put("inDate", DateUtils.format(memberApproVo.getInDate(), DateUtils.YMD_DASH));
				}

				// 已赚收益=已赚利息netMoney_yesInterstTotal+已赚奖励netMoney_awardTotal+已收罚息netMoney_receiveInterest+行权金额netMoney_stockMoney
				// BigDecimal hasNetMoney = userDetailMap.get("netMoney_yesInterstTotal").add(userDetailMap.get("netMoney_awardTotal")).add(userDetailMap.get("netMoney_receiveInterest"))
				// .add(userDetailMap.get("netMoney_stockMoney"));
				// map.put("hasNetMoney", hasNetMoney);

				// 收益统计：收益总额=已赚收益+待收利息+待收罚息，支出总额，净收益
				Map<String, BigDecimal> userDetailMap = myAccountReportService.queryUserAccountDetail(userId);
				map.put("netMoney", userDetailMap.get("netMoney"));
				map.put("payTotal", userDetailMap.get("payTotal"));
				map.put("netEaring", userDetailMap.get("netEaring"));

				// 资产总额，可用余额，冻结金额
				AccountVo accountVo = accountService.queryAccountByUserId(userId);
				map.put("total", accountVo.getTotal().add(userDetailMap.get("cur_total")).add(userDetailMap.get("fixCapitalTotal")).add(userDetailMap.get("fixInvestNoTotal")));
				map.put("useMoney", accountVo.getUseMoney());
				map.put("noUseMoney", accountVo.getNoUseMoney());

				// 银行卡张数
				List<?> bankCardList = bankInfoService.queryBankInfosByUserId(userId);
				int bankCards = 0;
				if (bankCardList != null && bankCardList.size() > 0) {
					bankCards = bankCardList.size();
				}
				map.put("bankCards", bankCards);

				// 我的普通待收
				Map<String, Object> cp = new HashMap<String, Object>();
				cp.put("status_type", 0);
				cp.put("type_collection", 0);
				cp.put("user_id", userId);
				List<?> collectionList = collectionRecordService.queryMyCollections(cp, new Page(3)).getResult();
				map.put("collectionList", collectionList);

				// 我的直通车待收
				cp.put("type_collection", 1);
				List<?> firstCollectionList = collectionRecordService.queryMyCollections(cp, new Page(3)).getResult();
				map.put("firstCollectionList", firstCollectionList);

				return map;
			}
		} catch (Exception e) {
			logger.error("微信-账户首页获取异常", e);
		}
		return null;
	}

	/**
	 * 投标管理：我的普通待收，我的直通车待收，正在投标的列表，投标成功的列表
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2014年11月7日
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/indexTender")
	@ResponseBody
	public Map<String, Object> indexTender() {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			// 20150714 我的账户改版后不需要
			/*
			 * Integer userId = currentUser().getUserId(); Map<String, Object> cp = new HashMap<String, Object>(); cp.put("status_type", 0); cp.put("type_collection", 0); cp.put("user_id", userId);
			 * List<?> collectionList = collectionRecordService.queryMyCollections(cp, new Page(3)).getResult(); map.put("collectionList", collectionList); cp.put("type_collection", 1); List<?>
			 * firstCollectionList = collectionRecordService.queryMyCollections(cp, new Page(3)).getResult(); map.put("firstCollectionList", firstCollectionList); Map<String, Object> tp = new
			 * HashMap<String, Object>(); tp.put("userId", userId); tp.put("borrowStatus", "underway"); List<?> underwayBidList = borrowService.queryTenderingForOtherBorrow(tp, new
			 * Page(3)).getResult(); map.put("underwayBidList", underwayBidList); tp.put("borrowStatus", "sucess"); List<?> sucessBidList = borrowService.queryTenderingForOtherBorrow(tp, new
			 * Page(3)).getResult(); map.put("sucessBidList", sucessBidList);
			 */
		} catch (Exception e) {
			logger.error("微信-账户首页-投标管理获取异常", e);
		}
		return map;
	}

	/**
	 * 融资管理：最近待还借款，正在招标中借款，我的借款
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2014年11月7日
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/indexBorrow")
	@ResponseBody
	public Map<String, Object> indexBorrow() {
		Map<String, Object> map = null;
		try {
			if (currentUser() != null) {
				map = new HashMap<String, Object>();
				Integer userId = currentUser().getUserId();

				RepaymentRecordCnd repaymentRecordCnd = new RepaymentRecordCnd();
				repaymentRecordCnd.setUserId(userId);
				repaymentRecordCnd.setStatus(0);
				List<?> lastRepayList = bRepaymentRecordService.queryRepaymentList(repaymentRecordCnd, 1, 3).getResult();
				map.put("lastRepayList", lastRepayList);

				BorrowCnd borrowCnd = new BorrowCnd();
				borrowCnd.setUserId(userId);
				List<?> underwayBorrowList = borrowService.queryTendering(borrowCnd, 1, 3).getResult();
				if (underwayBorrowList != null && underwayBorrowList.size() > 0) {
					map.put("underwayBorrowList", underwayBorrowList);
				}

				List<?> borrowList = borrowService.queryAll(borrowCnd, 1, 3).getResult();
				map.put("borrowList", borrowList);
			}
		} catch (Exception e) {
			logger.error("微信-账户首页-融资管理获取异常", e);
		}
		return map;
	}

	/**
	 * 个人信息
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2014年10月22日
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/userInfo")
	@ResponseBody
	public Map<String, Object> userInfo() {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			ShiroUser shiroUser = currentUser();
			Integer userId = shiroUser.getUserId();
			MemberApproVo memberApproVo = memberService.queryMemberApproByUserId(shiroUser.getUserId());
			RealNameApproVo realNameApproVo = realNameApproService.queryRealNameApproByUserId(userId);

			// 用户名，会员等级，VIP有效期
			map.put("userName", StrinUtils.stringEncryptEn(shiroUser.getUserName()));
			map.put("userLevel", memberService.queryUserLevelByMemberId(shiroUser.getUserId()));
			if (memberApproVo != null) {
				map.put("inDate", DateUtils.format(memberApproVo.getInDate(), DateUtils.YMD_DASH));
			}

			// 性别，出生日期，
			if (realNameApproVo != null) {
				map.put("sex", StrinUtils.stringEncryptEn("0".equals(realNameApproVo.getSex()) ? "男" : "女"));
				map.put("birthDay", StrinUtils.stringEncryptEn(realNameApproVo.getBirthDay()));
			}

		} catch (Exception e) {
			logger.error("微信-个人信息获取异常", e);
		}
		return map;
	}

	/**
	 * 银行卡管理
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2014年10月22日
	 * @return List<?>
	 */
	@RequestMapping(value = "/bankCard")
	@ResponseBody
	public Map<String, Object> bankCard() {
		try {
			if (currentUser() != null) {
				BankInfoVo b = bankInfoService.getUserCurrentCard(currentUser().getUserId());
				if (null != b) {
					Map<String, Object> map = new HashMap<String, Object>();
					map.put("bankCode", b.getBankCode());
					map.put("bankName", b.getBankName());
					map.put("securityCardNum", b.getSecurityCardNum());
					map.put("status", b.getStatus());
					return map;
				}
			}
		} catch (Exception e) {
			logger.error("微信-银行卡信息获取异常", e);
		}
		return null;
	}

	/**
	 * 初始化添加银行卡
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2015年4月13日
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/bankCard/initAdd")
	@ResponseBody
	public Map<String, Object> initAdd() {
		Map<String, Object> map = null;
		try {
			map = safeCenterService.certificationCheck(currentUser(), "mobile", "");// 绑卡前需手机&实名认证
			if (map != null)
				return map;
			map = new HashMap<String, Object>();
			ShiroUser shiroUser = currentUser();
			if (shiroUser != null) {
				RealNameApproVo realNameApproVo = realNameApproService.queryRealNameApproByUserId(shiroUser.getUserId());
				map.put("realName", realNameApproVo.getSecurityRealName());
				map.put("idCard", realNameApproVo.getSecurityIdCardNo());
				map.put("bankList", bankInfoService.queryBankList(null));
			}
		} catch (Exception e) {
			logger.error("微信-获取异常", e);
		}
		return map;
	}

	/**
	 * 初始换卡
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2015年5月7日
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/bankCard/initChange")
	@ResponseBody
	public Map<String, Object> initChange() {

		try {
			if (currentUser() != null) {
				Map<String, Object> map = new HashMap<String, Object>();
				int userId = currentUser().getUserId();
				String s = changeService.bankinfoCheck(userId);
				if (s != null) {
					map.put("code", "0");
					map.put("msg", s);
					BankInfoVo b = bankInfoService.getUserCurrentCard(userId);
					map.put("bankCode", b.getBankCode());
					map.put("bankName", b.getBankName());
					map.put("securityCardNum", b.getSecurityCardNum());
					map.put("status", b.getStatus());

				}

				RealNameApproVo realNameApproVo = realNameApproService.queryRealNameApproByUserId(userId);
				map.put("realName", realNameApproVo.getSecurityRealName());
				map.put("idCard", realNameApproVo.getSecurityIdCardNo());
				map.put("bankList", bankInfoService.queryBankList(null));

				return map;
			}
		} catch (Exception e) {
			logger.error("微信-获取异常", e);
		}
		return null;
	}

	/**
	 * 验证交易密码
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2014年11月17日
	 * @return MessageBox
	 */
	@RequestMapping(value = "/payPwd")
	@ResponseBody
	public MessageBox payPwd() {
		String payPassword = currentRequest().getParameter("payPassword");
		MemberCnd cnd = new MemberCnd();
		cnd.setId(currentUser().getUserId());
		MemberVo mem = memberService.queryMemberByCnd(cnd);
		if (!MD5.toMD5(payPassword).equals(mem.getPaypassword())) {
			return MessageBox.build("0", "交易密码错误，请重新输入。");
		}
		return null;
	}

	/**
	 * 换卡-提交审核
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author huangpin
	 * @version 0.1 2015年5月7日
	 * @param change
	 * @return MessageBox
	 */
	@RequiresAuthentication
	@RequestMapping(value = "/addChange")
	@ResponseBody
	public MessageBox addChange(BankcardChange change) {
		try {
			if (change == null) {
				return MessageBox.build("0", "请填写更换信息");
			}
			String[] s = change.getPicString().split("::");
			String[] types = s[0].split(",");
			String[] urls = s[1].split(",");
			List<BankcardPic> pics = new ArrayList<BankcardPic>();
			for (int i = 0; i < types.length; i++) {
				BankcardPic p = new BankcardPic();
				p.setPicType(types[i]);
				p.setPicUrl(urls[i]);
				pics.add(p);
			}
			return changeService.add(change, pics, currentUser(), change.getAddIp());
		} catch (Exception e) {
			logger.error("", e);
		}
		return null;
	}

	/**
	 * 补充资料-提交审核
	 * <p>
	 * Description:这里写描述<br />
	 * </p>
	 * @author 陈建国
	 * @version 0.1 2015年4月30日
	 * @param change
	 * @return MessageBox
	 */
	@RequiresAuthentication
	@RequestMapping(value = "/addModifyChange")
	@ResponseBody
	public MessageBox addModifyChange(BankcardChange change) {
		try {
			if (change == null) {
				return MessageBox.build("0", "请填写更换信息");
			}
			String[] s = change.getPicString().split("::");
			String[] types = s[0].split(",");
			String[] urls = s[1].split(",");
			String[] ids = s[2].split(",");
			List<BankcardPic> pics = new ArrayList<BankcardPic>();
			for (int i = 0; i < types.length; i++) {
				if (ids[i].equals("null")) {
					BankcardPic p = new BankcardPic();
					p.setPicType(types[i]);
					p.setPicUrl(urls[i]);
					pics.add(p);
				}
			}
			return changeService.addModify(change, pics, currentUser(), change.getAddIp());
		} catch (Exception e) {
			logger.error("", e);
		}
		return null;
	}

	@RequiresAuthentication
	@RequestMapping(value = "/path")
	@ResponseBody
	public String getUrl() {
		return currentRequest().getRealPath("/");
	}

}
