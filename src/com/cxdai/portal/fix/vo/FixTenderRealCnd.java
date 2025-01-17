package com.cxdai.portal.fix.vo;

import com.cxdai.common.page.BaseCnd;

/**
 * <p>
 * Description:定期宝查询条件<br />
 * </p>
 * 
 * @title FirstBorrowCnd.java
 * @package com.cxdai.portal.fix1.vo
 * @author caodefeng
 * @version 0.1 2015年5月14日
 */
public class FixTenderRealCnd extends BaseCnd {

	private static final long serialVersionUID = -6903226903535940857L;
	
	private Integer userId;

	private String beginDay;
	private String endDay;
	//查询不同时间的tag, 如： 7天，30天
	private String tag;
	
	//收益明细首次加载tag
	private String initTag;

	
	//收益明细首次加载tag
		private Integer fixBorrowId;
	/**
	 * @return userId : return the property userId.
	 */
	public Integer getUserId() {
		return userId;
	}

	/**
	 * @param userId
	 *            : set the property userId.
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	/**
	 * @return beginDay : return the property beginDay.
	 */
	public String getBeginDay() {
		return beginDay;
	}

	/**
	 * @param beginDay
	 *            : set the property beginDay.
	 */
	public void setBeginDay(String beginDay) {
		this.beginDay = beginDay;
	}

	/**
	 * @return endDay : return the property endDay.
	 */
	public String getEndDay() {
		return endDay;
	}

	/**
	 * @param endDay
	 *            : set the property endDay.
	 */
	public void setEndDay(String endDay) {
		this.endDay = endDay;
	}

	/**
	 * @return tag : return the property tag.
	 */
	public String getTag() {
		return tag;
	}

	/**
	 * @param tag
	 *            : set the property tag.
	 */
	public void setTag(String tag) {
		this.tag = tag;
	}

	/**
	 * @return initTag : return the property initTag.
	 */
	public String getInitTag() {
		return initTag;
	}

	/**
	 * @param initTag : set the property initTag.
	 */
	public void setInitTag(String initTag) {
		this.initTag = initTag;
	}

	public Integer getFixBorrowId() {
		return fixBorrowId;
	}

	public void setFixBorrowId(Integer fixBorrowId) {
		this.fixBorrowId = fixBorrowId;
	}
	
	

}
