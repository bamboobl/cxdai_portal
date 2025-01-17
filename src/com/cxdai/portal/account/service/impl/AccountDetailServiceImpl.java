package com.cxdai.portal.account.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cxdai.common.page.Page;
import com.cxdai.portal.account.mapper.AccountDetailMapper;
import com.cxdai.portal.account.service.AccountDetailService;
@Service
public class AccountDetailServiceImpl implements AccountDetailService {
	@Autowired
	private AccountDetailMapper accountDetailMapper;
	@Override
	public Page queryInvestList(Map<String, Object> params, Page page) throws Exception {
		page.setTotalCount(accountDetailMapper.countInvestVo(params));
		page.setResult(accountDetailMapper.queryInvestVoList(params, page));
		return page;
	}
	public Page queryFixList(Map<String, Object> params, Page page) throws Exception {
		page.setTotalCount(accountDetailMapper.queryFixVoCount(params));
		page.setResult(accountDetailMapper.queryFixVoList(params, page));
		return page;
	}
}
