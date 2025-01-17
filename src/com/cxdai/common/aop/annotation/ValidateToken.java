package com.cxdai.common.aop.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 验证token注解
 * <p>
 * Description:这里写描述<br />
 * </p>
 * 
 * @title DisableDuplicateSubmission.java
 * @package com.cxdai.common.aop.processor
 * @author zhaowei
 * @version 0.1 2015年11月19日
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface ValidateToken {

}
