package com.cxdai.wx.entry.mainIn.service.impl;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cxdai.base.entity.Stock;
import com.cxdai.portal.account.mapper.AccountLogMapper;
import com.cxdai.portal.account.service.AccountDayLogService;
import com.cxdai.portal.account.service.FriendService;
import com.cxdai.portal.account.service.MyAccountReportService;
import com.cxdai.portal.curAccount.mapper.CurAccountMapper;
import com.cxdai.portal.member.service.MemberService;
import com.cxdai.portal.member.vo.MemberVo;
import com.cxdai.portal.stock.mapper.StockMapper;
import com.cxdai.wx.common.WxConstants;
import com.cxdai.wx.entry.bind.mapper.BindHistoryVoMapper;
import com.cxdai.wx.entry.bind.mapper.BindVoMapper;
import com.cxdai.wx.entry.bind.vo.BindVo;
import com.cxdai.wx.entry.mainIn.mapper.HistoryMessageMapper;
import com.cxdai.wx.entry.mainIn.service.MainInService;
import com.cxdai.wx.entry.mainIn.vo.HistoryMessage;
import com.cxdai.wx.entry.message.autoreply.mapper.AutoMapper;
import com.cxdai.wx.entry.message.autoreply.vo.Auto;
import com.cxdai.wx.entry.message.autoreply.vo.BorrowDetail;
import com.cxdai.wx.entry.message.autoreply.vo.CollectWeight;
import com.cxdai.wx.entry.message.autoreply.vo.IncomeDetail;
import com.cxdai.wx.entry.message.autoreply.vo.LeastInvestment;
import com.cxdai.wx.entry.message.autoreply.vo.MoneyDetail;
import com.cxdai.wx.entry.message.autoreply.vo.PromotNumber;
import com.cxdai.wx.entry.message.autoreply.vo.StockDetail;
import com.cxdai.wx.entry.message.autoreply.vo.TenderDetail;
import com.cxdai.wx.utils.WxUtils;

@Service
public class MainInServiceImpl implements MainInService {
	@Autowired
	private BindVoMapper bindMapper;
	@Autowired
	private MemberService memberService;
	@Autowired
	private AccountDayLogService accountDayLogService;
	@Autowired
	private StockMapper stockMapper;
	@Autowired
	private AccountLogMapper accountLogMapper;
	@Autowired
	private MyAccountReportService myAccountService;
	@Autowired
	private AutoMapper autoMapper;
	@Autowired
	private HistoryMessageMapper historyMessageMapper;
	@Autowired
	private BindHistoryVoMapper bindHistoryVoMapper;
	@Autowired
	private FriendService friendService;
	@Autowired
	private MyAccountReportService myAccountReportService;
	@Autowired
	CurAccountMapper curAccountMapper;

	public String updateUnBind(Integer wId) throws Exception {
		BindVo bindVo = new BindVo();
		MemberVo bd = bindMapper.selectByWxId(wId);
		if (bd == null) {
			throw new Exception("当前微信账户没有绑定国诚金融账户");
		}
		Long date = new Date().getTime() / 1000;
		bindVo.setUpdateTime(date);
		bindVo.setWxId(wId);
		bindVo.setStatus(0);
		bindVo.setFromstatus(1);
		if (bindMapper.update(bindVo) == 1) {
			bindVo.setCreateTime(date);
			bindVo.setUserId(bd.getId());
			bindHistoryVoMapper.saveBindHistory(bindVo);
			return "success";
		} else {
			throw new Exception("解绑失败,请重试!");
		}
	}

	public String queryPromot(Integer wId) throws Exception {
		int b = queryBindOrUnbid(WxConstants.PROMOT_KEY, wId);
		if (b == 1) {
			MemberVo mb = bindMapper.selectByWxId(wId);
			Integer count = friendService.queryAllFriendCountByUserId(mb.getId());
			if (count != null && count != 0) {
				PromotNumber op = new PromotNumber();
				op.setUsername(mb.getUsername());
				op.setAllPromot(count + "");
				return op.toString();
			}
			return "尊敬的" + mb.getUsername() + ",\n您当前没有推广人数" + "\n" + WxConstants.FOUR;
		} else if (b == 0) {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功即可查询账户有推广人数\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
		Auto auto = autoMapper.queryByKeyWord(WxConstants.PROMOT_KEY);
		return auto == null ? null : auto.getContent();

	}

	public String queryOption(Integer wId) {
		int b = queryBindOrUnbid(WxConstants.OPTIONS_KEY, wId);
		if (b == 1) {
			MemberVo mb = bindMapper.selectByWxId(wId);
			List<Stock> list = stockMapper.getByProperty("user_id", mb.getId() + "");
			if (list != null && list.size() > 0) {
				StockDetail op = new StockDetail();
				op.setOptionsNumber(list.get(0).getStockNum().toString());
				op.setUsername(mb.getUsername());
				return op.toString();
			}
			return "尊敬的" + mb.getUsername() + ",\n您当前没有期权" + "\n" + WxConstants.TWO;
		} else if (b == 0) {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功即可查询账户期权详情\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
		Auto auto = autoMapper.queryByKeyWord(WxConstants.OPTIONS_KEY);
		return auto == null ? null : auto.getContent();
	}

	public String queryLeastinvest(Integer wId) {
		int b = queryBindOrUnbid(WxConstants.LEASTINVEST_KEY, wId);
		if (b == 1) {
			MemberVo mb = bindMapper.selectByWxId(wId);
			List<Stock> list = stockMapper.getByProperty("user_id", mb.getId() + "");
			if (list == null || list.size() <= 0) {
				return "尊敬的" + mb.getUsername() + ",\n您当前没有期权,不能查询最少投资额" + "\n" + WxConstants.THREE;
			} else {
				BigDecimal money = accountLogMapper.haveStockMoney(mb.getId());
				LeastInvestment investment = new LeastInvestment();
				investment.setUsername(mb.getUsername());
				investment.setLeastInvestment(money.toString());
				return investment.toString();
			}
		} else if (b == 0) {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功即可查询账户最少投资额\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
		Auto auto = autoMapper.queryByKeyWord(WxConstants.LEASTINVEST_KEY);
		return auto == null ? null : auto.getContent();
	}

	public String queryVip(Integer wId) throws Exception {
		// int b = queryBindOrUnbid(WxConstants.VIP_KEY, wId);
		// if (b == 1) {
		// MemberVo mb = bindMapper.selectByWxId(wId);
		// MemberApproVo memberApproVo = memberService.queryMemberApproByUserId(mb.getId());
		// if (memberApproVo == null || memberApproVo.getInDate() == null) {
		// return "尊敬的" + mb.getUsername() + "，\n您尚未开通vip" + "\n" + WxConstants.FIVE;
		// } else {
		// VipDetail detail = new VipDetail();
		// detail.setUsername(mb.getUsername());
		// detail.setDate2(DateUtils.format(memberApproVo.getInDate(), DateUtils.YMD_DASH));
		// return detail.toString();
		// }
		// } else if (b == 0) {
		// String url = WxUtils.getBindUrl();
		// return "您好\n 您尚未绑定微信账号,绑定成功即可查询账户vip详情\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		// }
		return null;
	}

	public String queryCollected(Integer wId) throws Exception {
		int i = queryBindOrUnbid(WxConstants.COLLECTWEIGHT_KEY, wId);
		if (i == 1) {
			MemberVo mb = bindMapper.selectByWxId(wId);
			BigDecimal dayInterst = accountDayLogService.queryDayAverageCollectionTotal(mb.getId());
			CollectWeight cw = new CollectWeight();
			cw.setUsername(mb.getUsername());
			cw.setWeightMoney(dayInterst.toString());
			return cw.toString();
		} else if (i == 0) {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功即可查询账户加权待收详情\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
		Auto auto = autoMapper.queryByKeyWord(WxConstants.COLLECTWEIGHT_KEY);
		return auto == null ? null : auto.getContent();
	}

	private int queryBindOrUnbid(String key, Integer wId) {
		if (wId == null || wId == 0) {
			return 0;
		}
		Auto auto = autoMapper.queryByKeyWord(key);
		if (auto != null) {
			if (auto.getNeedPermission() == 1) {// 需要权限
				MemberVo mb = bindMapper.selectByWxId(wId);
				if (mb != null) {
					return 1;
				}
				return 0; // 需要权限未绑定
			}
		}
		return -1; // 没有推送信息
	}

	@Override
	public String queryMoneyDetail(Integer wId) throws Exception {
		MemberVo memberVo = bindMapper.selectByWxId(wId);
		if (memberVo != null) {
			Map<String, Object> userInvestDetailMap = myAccountService.queryUserInvestDetail(memberVo.getId());
			Map<String, BigDecimal> mapCapitalInfo = myAccountService.queryUserAccountDetail(memberVo.getId());
			MoneyDetail md = new MoneyDetail();
			BigDecimal b = new BigDecimal(0);

			b = b.add(mapCapitalInfo.get("collection")).add(mapCapitalInfo.get("use_money")).add(mapCapitalInfo.get("tenderLockAccountTotal")).add(mapCapitalInfo.get("cashLockTotalMoney"))
					.add(mapCapitalInfo.get("firstFreezeAccount")).add(mapCapitalInfo.get("firstUseMoney")).add(mapCapitalInfo.get("transferLockAccountTotal")).add(mapCapitalInfo.get("cur_total"))
					.add(mapCapitalInfo.get("fixCapitalTotal")).add(mapCapitalInfo.get("fixInvestNoTotal"));
			md.setTotalMoney(b);// 总额

			md.setDrawMoney(mapCapitalInfo.get("drawMoney"));// 可提
			md.setNoDrawMoney(mapCapitalInfo.get("noDrawMoney"));// 受限
			md.setOrdinaryAvailable(mapCapitalInfo.get("use_money"));// 普通
			md.setTrainAvailable(mapCapitalInfo.get("firstUseMoney"));// 直通车
			md.setTotalDrawMoney(new BigDecimal(userInvestDetailMap.get("cashTotalMoney").toString()));
			md.setTotalMoneyByCharge(new BigDecimal(userInvestDetailMap.get("rechangeTotalMoney").toString()));
			md.setTotalNoDrawMoney(mapCapitalInfo.get("noUseMoney"));
			md.setTotalTrain(mapCapitalInfo.get("firstTotal"));
			md.setUsername(memberVo.getUsername());

			// CurAccountVo cur = curAccountMapper.selectByUserId(memberVo.getId());
			// if (cur != null) {
			// md.setTotalMoney(b.add(cur.getTotal()));// 总额
			// } else {
			// md.setTotalMoney(b);// 总额
			// }

			return md.toString();
		} else {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功即可查询资金详情\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
	}

	@Override
	public String queryCollectionDetail(Integer wId) throws Exception {
		MemberVo memberVo = bindMapper.selectByWxId(wId);
		if (memberVo != null) {
			Map<String, BigDecimal> mapCapitalInfo = myAccountService.queryUserAccountDetail(memberVo.getId());
			Map<String, BigDecimal> userDetailMap = myAccountReportService.queryUserAccountDetail(memberVo.getId());
			BigDecimal hasNetMoney = userDetailMap.get("netMoney_yesInterstTotal").add(userDetailMap.get("netMoney_awardTotal")).add(userDetailMap.get("netMoney_receiveInterest"))
					.add(userDetailMap.get("netMoney_stockMoney"));
			IncomeDetail detail = new IncomeDetail();
			detail.setNetIncome(mapCapitalInfo.get("netEaring"));
			detail.setTotalIncome(mapCapitalInfo.get("netMoney"));
			detail.setTotalOut(mapCapitalInfo.get("payTotal"));
			detail.setUsername(memberVo.getUsername());
			detail.setHasNetMoney(hasNetMoney);
			return detail.toString();
		} else {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功即可查询收益详情\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
	}

	@Override
	public String queryBorrowDetail(Integer wId) throws Exception {
		MemberVo memberVo = bindMapper.selectByWxId(wId);
		if (memberVo != null) {
			Map<String, Object> userBorrowDetail = myAccountService.queryUserBorrowDetail(memberVo.getId());
			BorrowDetail bd = new BorrowDetail();
			bd.setNeedPayInter(new BigDecimal(userBorrowDetail.get("waitPayInterest").toString()));
			bd.setNeedPayPena(new BigDecimal(userBorrowDetail.get("unPayLateInterest").toString()));
			bd.setTotalborrow(new BigDecimal(userBorrowDetail.get("borrowTotal").toString()));
			bd.setTotalNeedPay(new BigDecimal(userBorrowDetail.get("repaymentAccountTotal").toString()));
			bd.setUsername(memberVo.getUsername());
			return bd.toString();
		} else {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功即可查询借款详情\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
	}

	@Override
	public String queryTenderDetail(Integer wId) throws Exception {
		MemberVo memberVo = bindMapper.selectByWxId(wId);
		if (memberVo != null) {
			Map<String, Object> userInvestDetailMap = myAccountService.queryUserInvestDetail(memberVo.getId());
			Map<String, BigDecimal> mapCapitalInfo = myAccountService.queryUserAccountDetail(memberVo.getId());
			TenderDetail td = new TenderDetail();
			td.setCollectedInter(new BigDecimal(userInvestDetailMap.get("interstTotal").toString()));
			td.setPayInter(new BigDecimal(userInvestDetailMap.get("unpayInterest").toString()));
			td.setTotalCollected(mapCapitalInfo.get("collection"));
			td.setTotalTender(new BigDecimal(userInvestDetailMap.get("investTotal").toString()));
			td.setUnReceiveInterest(new BigDecimal(userInvestDetailMap.get("unReceiveInterest").toString()));
			td.setUsername(memberVo.getUsername());
			return td.toString();
		}
		return "您好\n 您尚未绑定微信账号,绑定成功即可查询投标详情\n<a href=\"" + WxUtils.getBindUrl() + "\">点击这里,立即绑定</a>";
	}

	@Override
	public String queryMessageByClickKey(Integer wId, String key) {
		String message = null;
		Auto auto = new Auto();
		auto = autoMapper.queryTextByEvent(key);
		if (auto != null) {
			if (auto.getNeedPermission() == 1) {
				MemberVo vo = bindMapper.selectByWxId(wId);
				if (vo != null) {
					message = auto.getContent();
				} else {
					String url = WxUtils.getBindUrl();
					message = "欢迎使用查询服务\n 您尚未绑定微信账号," + "绑定成功即可查看\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
				}
			} else {
				message = auto.getContent();
			}
		}
		return message;
	}

	@Override
	public String queryBindMessage(Integer wId) {
		MemberVo memberVo = bindMapper.selectByWxId(wId);
		if (memberVo != null) {
			return "您好,当前微信已绑定官方账号,请解绑后重试！\n回复【" + WxConstants.UNBIND_KEY + "】一键解绑";
		} else {
			String url = WxUtils.getBindUrl();
			return "您好\n 您尚未绑定微信账号,绑定成功可以及时获取最新账户通知\n<a href=\"" + url + "\">点击这里,立即绑定</a>";
		}
	}

	@Override
	public int insertHistoryMessage(HistoryMessage message) {
		return historyMessageMapper.insert(message);
	}

	@Override
	public String queryAutoMessage(String key) {
		Auto auto = autoMapper.queryByKeyWord("?");
		return auto.getContent();
	}
}