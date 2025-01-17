package com.cxdai.portal.lottery.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cxdai.base.mapper.BaseLotteryChanceRuleInfoMapper;
import com.cxdai.portal.lottery.mapper.LotteryChanceRuleInfoMapper;
import com.cxdai.portal.lottery.service.LotteryChanceRuleInfoService;
import com.cxdai.portal.lottery.vo.LotteryChanceRuleInfoVo;

/**
 * 
 * <p>
 * Description:抽奖机会来源类型规则信息业务逻辑处理类<br />
 * </p>
 * @title LotteryChanceRuleInfoServiceImpl.java
 * @package com.cxdai.portal.lottery.service.impl 
 * @author YangShiJin
 * @version 0.1 2015年4月7日
 */
@Service
public class LotteryChanceRuleInfoServiceImpl implements LotteryChanceRuleInfoService{

	@Autowired
	private BaseLotteryChanceRuleInfoMapper baseLotteryChanceRuleInfoMapper;
	@Autowired
	private LotteryChanceRuleInfoMapper lotteryChanceRuleInfoMapper;

	@Override
	public LotteryChanceRuleInfoVo selectByCode(String code) throws Exception {
		return lotteryChanceRuleInfoMapper.selectByCode(code);
	}
}
