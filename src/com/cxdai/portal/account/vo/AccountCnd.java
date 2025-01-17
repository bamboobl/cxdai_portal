package com.cxdai.portal.account.vo;

import java.io.Serializable;

/**
 * <p>
 * Description:账户类查询条件<br />
 * </p>
 * 
 * @title AccountCnd.java
 * @package com.cxdai.portal.account.vo
 * @author justin.xu
 * @version 0.1 2014年4月25日
 */
public class AccountCnd implements Serializable {

	private static final long serialVersionUID = -3531851612222097637L;
	private Integer id;
	private Integer userId;
	/**
	 * 是否锁定记录, 锁定： yes
	 */
	private String lockedRecordYn;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getLockedRecordYn() {
		return lockedRecordYn;
	}

	public void setLockedRecordYn(String lockedRecordYn) {
		this.lockedRecordYn = lockedRecordYn;
	}

}
