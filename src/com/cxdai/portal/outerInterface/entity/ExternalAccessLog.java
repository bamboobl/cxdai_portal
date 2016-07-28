package com.cxdai.portal.outerInterface.entity;

/**
 * 
 * <p>
 * Description:外部访问日志<br />
 * </p>
 * 
 * @title ExternalAccessLog.java
 * @package com.cxdai.portal.outerInterface.vo
 * @author yangshijin
 * @version 0.1 2014年8月19日
 */
public class ExternalAccessLog {

	/** 主键Id **/
	private Integer id;

	/** 访问的IP **/
	private String accessIp;

	/** 访问的URL **/
	private String accessUrl;

	/** 访问的类型说明 **/
	private String accessType;

	/** 访问的类名 **/
	private String accessClass;

	/** 访问的方法名称 **/
	private String accessMethod;

	/** 访问时间 **/
	private String accessTime;

	/** 返回状态 (0:成功，-1：ip无访问权限，-2:失败， -3：请求过于频繁, -4:参数错误) **/
	private int status;

	/** 返回时间 **/
	private String returnTime;

	/** 备注 **/
	private String remark;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAccessIp() {
		return accessIp;
	}

	public void setAccessIp(String accessIp) {
		this.accessIp = accessIp;
	}

	public String getAccessUrl() {
		return accessUrl;
	}

	public void setAccessUrl(String accessUrl) {
		this.accessUrl = accessUrl;
	}

	public String getAccessType() {
		return accessType;
	}

	public void setAccessType(String accessType) {
		this.accessType = accessType;
	}

	public String getAccessClass() {
		return accessClass;
	}

	public void setAccessClass(String accessClass) {
		this.accessClass = accessClass;
	}

	public String getAccessMethod() {
		return accessMethod;
	}

	public void setAccessMethod(String accessMethod) {
		this.accessMethod = accessMethod;
	}

	public String getAccessTime() {
		return accessTime;
	}

	public void setAccessTime(String accessTime) {
		this.accessTime = accessTime;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getReturnTime() {
		return returnTime;
	}

	public void setReturnTime(String returnTime) {
		this.returnTime = returnTime;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

}