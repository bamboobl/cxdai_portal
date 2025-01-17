package com.cxdai.base.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class InviteDetail implements Serializable {
	private Integer id; // 主键

	private Integer userid; // 推荐人ID

	private Integer invitedUserid; // 被推荐人ID(包括间接)

	private Integer type; // 类别(0:直接,1:间接)

	private Date registerTime; // 被推荐人注册时间

	private Date mobileApprovedTime; // 被推荐人手机认证时间

	private Date emailApprovedTime; // 被推荐人邮箱认证时间

	private Date realnameApprovedTime; // 被推荐人实名认证时间

	private Date vipApprovedTime; // 被推荐人VIP认证时间

	private Date rechargeTime; // 被推荐人累计充值1000元时间

	private Date inviteSuccessTime; // 推荐成功时间

	private BigDecimal totalInterest; // 被推荐人累计实收利息(>=推广成功时间当月)

	private BigDecimal monthInterest; // 被推荐人当月实际利息(>=推广成功时间当月)

	private Integer month; // 月份(12,1,2,...,11)

	private Date addTime; // 添加时间

	private Date updateTime; // 最后更新时间

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public Integer getInvitedUserid() {
		return invitedUserid;
	}

	public void setInvitedUserid(Integer invitedUserid) {
		this.invitedUserid = invitedUserid;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Date getRegisterTime() {
		return registerTime;
	}

	public void setRegisterTime(Date registerTime) {
		this.registerTime = registerTime;
	}

	public Date getMobileApprovedTime() {
		return mobileApprovedTime;
	}

	public void setMobileApprovedTime(Date mobileApprovedTime) {
		this.mobileApprovedTime = mobileApprovedTime;
	}

	public Date getEmailApprovedTime() {
		return emailApprovedTime;
	}

	public void setEmailApprovedTime(Date emailApprovedTime) {
		this.emailApprovedTime = emailApprovedTime;
	}

	public Date getRealnameApprovedTime() {
		return realnameApprovedTime;
	}

	public void setRealnameApprovedTime(Date realnameApprovedTime) {
		this.realnameApprovedTime = realnameApprovedTime;
	}

	public Date getVipApprovedTime() {
		return vipApprovedTime;
	}

	public void setVipApprovedTime(Date vipApprovedTime) {
		this.vipApprovedTime = vipApprovedTime;
	}

	public Date getRechargeTime() {
		return rechargeTime;
	}

	public void setRechargeTime(Date rechargeTime) {
		this.rechargeTime = rechargeTime;
	}

	public Date getInviteSuccessTime() {
		return inviteSuccessTime;
	}

	public void setInviteSuccessTime(Date inviteSuccessTime) {
		this.inviteSuccessTime = inviteSuccessTime;
	}

	public BigDecimal getTotalInterest() {
		return totalInterest;
	}

	public void setTotalInterest(BigDecimal totalInterest) {
		this.totalInterest = totalInterest;
	}

	public BigDecimal getMonthInterest() {
		return monthInterest;
	}

	public void setMonthInterest(BigDecimal monthInterest) {
		this.monthInterest = monthInterest;
	}

	public Integer getMonth() {
		return month;
	}

	public void setMonth(Integer month) {
		this.month = month;
	}

	public Date getAddTime() {
		return addTime;
	}

	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
}