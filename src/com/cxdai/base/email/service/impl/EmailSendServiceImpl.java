package com.cxdai.base.email.service.impl;

import java.util.Date;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cxdai.base.email.service.EmailSendService;
import com.cxdai.base.email.vo.EmailSendVo;
import com.cxdai.utils.PropertiesUtil;

/**
 * <p>
 * Description:邮件发送业务实现类<br />
 * </p>
 * 
 * @title EmailSendServiceImpl.java
 * @package com.cxdai.base.email.service.impl
 * @author justin.xu
 * @version 0.1 2014年4月17日
 */
@Service
public class EmailSendServiceImpl implements EmailSendService {

	@Autowired
	private JavaMailSenderImpl javaMailSender;

	@Override
	public void send(EmailSendVo emailSendVo) throws Exception {
		// 是否发送邮件
		String emailSendYn = PropertiesUtil.getValue("email_send_yn");
		if (null != emailSendYn && !"yes".equals(emailSendYn.trim())) {
			return;
		}
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		// 设置utf-8或GBK编码，否则邮件会有乱码
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
		// 设置发送人名片
		helper.setFrom(javaMailSender.getUsername(), javaMailSender.getUsername());
		// 设置收件人
		if (null != emailSendVo.getToUsers() && emailSendVo.getToUsers().length > 0) {
			helper.setTo(emailSendVo.getToUsers());
		}
		// 设置抄送人
		if (null != emailSendVo.getCcUsers() && emailSendVo.getCcUsers().length > 0) {
			helper.setCc(emailSendVo.getCcUsers());
		}
		// 设置密送人
		if (null != emailSendVo.getBccUsers() && emailSendVo.getBccUsers().length > 0) {
			helper.setBcc(emailSendVo.getBccUsers());
		}
		// 邮件发送时间
		helper.setSentDate(new Date());
		// 主题
		helper.setSubject(emailSendVo.getSubject());
		// 邮件内容，注意加参数true，表示启用html格式
		helper.setText(emailSendVo.getContent(), true);
		// 发送
		javaMailSender.send(mimeMessage);
	}

	public void sendEmail(String content, String email) throws Exception {
		EmailSendVo emailSendVo = new EmailSendVo();
		// 封装内容
		emailSendVo.setContent(content);
		emailSendVo.setSubject("国诚金融");
		emailSendVo.setToUsers(new String[] { email });
		send(emailSendVo);
	}
}
