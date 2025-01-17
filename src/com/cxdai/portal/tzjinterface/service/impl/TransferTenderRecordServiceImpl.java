package com.cxdai.portal.tzjinterface.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cxdai.portal.tzjinterface.mapper.TenderRecordAggVoMapper;
import com.cxdai.portal.tzjinterface.mapper.TenderRecordTransferLogMapper;
import com.cxdai.portal.tzjinterface.service.TransferTenderRecordService;
import com.cxdai.portal.tzjinterface.vo.TenderRecordAggVo;
import com.cxdai.portal.tzjinterface.vo.TransferTenderRecordLogVo;
import com.cxdai.utils.exception.AppException;

@Service
public class TransferTenderRecordServiceImpl implements TransferTenderRecordService{

	@Autowired
	private TenderRecordAggVoMapper tenderRecordAggVoMapper;
	@Autowired
	TenderRecordTransferLogMapper tenderRecordTransferLogMapper;
	
	@Transactional(rollbackFor = Exception.class)
	@Override
	public List<TenderRecordAggVo> queryTenderRecordAggList(String OId) throws AppException {
		List<TenderRecordAggVo> tenderRecordAggVoList = null;
		tenderRecordAggVoList = tenderRecordAggVoMapper.queryTenderRecordAggList(OId);
		TransferTenderRecordLogVo transferTenderRecordLogVo = new TransferTenderRecordLogVo();
		transferTenderRecordLogVo.setOId(OId);
		//记录投标记录流水
		tenderRecordTransferLogMapper.insertTransferTenderRecordLog(transferTenderRecordLogVo);
		return tenderRecordAggVoList;
	}
	@Transactional(rollbackFor = Exception.class)
	@Override
	public Integer updateTransferTenderRecordLog(
			TransferTenderRecordLogVo transferTenderRecordLogVo) throws AppException {
		return tenderRecordTransferLogMapper.updateTransferTenderRecordLog(transferTenderRecordLogVo);
	}

}
