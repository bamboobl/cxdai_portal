package com.cxdai.portal.cms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.cxdai.common.page.Page;
import com.cxdai.portal.account.vo.SearchInvestCnd;
import com.cxdai.portal.borrow.vo.BorrowVo;
import com.cxdai.portal.cms.constant.CmsConstant;
import com.cxdai.portal.cms.service.CmsArticleService;
import com.cxdai.portal.cms.service.CmsChannelService;
import com.cxdai.portal.cms.service.CmsPediaEntryService;
import com.cxdai.portal.cms.service.CmsTagService;
import com.cxdai.portal.cms.vo.CmsArticle;
import com.cxdai.portal.cms.vo.CmsChannel;
import com.cxdai.portal.cms.vo.CmsPediaEntry;
import com.cxdai.portal.cms.vo.CmsTag;
import com.cxdai.portal.first.service.FirstBorrowService;
import com.cxdai.portal.first.vo.FirstBorrowCnd;
import com.cxdai.portal.first.vo.FirstBorrowVo;
import com.cxdai.portal.invest.service.InvestRecordService;
import com.cxdai.portal.news_notice.service.NewsNoticeService;
import com.cxdai.portal.news_notice.vo.NewsNoticeVo;

@Controller
public class CmsKnowCotroller {

	@Autowired
	CmsChannelService channelService;
	@Autowired
	CmsPediaEntryService cmsPediaEntryService;
	@Autowired
	InvestRecordService investRecordService;
	@Autowired
	NewsNoticeService newsNoticeService;
	@Autowired
	FirstBorrowService firstBorrowService;
	@Autowired
	CmsTagService cmsTagService;
	@Autowired
	CmsArticleService articleService;

	@RequestMapping(value = "/baike")
	public ModelAndView index(String initai) throws Exception {
		ModelAndView mav = new ModelAndView("/cms/know");
		// 获取知识百科栏目信息
		CmsChannel cmsChannel = channelService.getCmsChannelById(CmsConstant.KNOW);
		// 按字母检索
		List<String> initials = cmsPediaEntryService.queryAllInitials();
		// 查询所有的词典
		List<CmsPediaEntry> cmsPediaEntries = cmsPediaEntryService.queryPediaEntrysByInitials(initai, 0, 160);
		// 投标专区
		SearchInvestCnd seach = new SearchInvestCnd();
		seach.setLimitTime("isTendering");
		seach.setOrderType("asc");
		List<BorrowVo> investList = investRecordService.queryInvestRecordList(seach, new Page(0, 6));
		// 国诚最新公告
		List<NewsNoticeVo> newsNoticeVos = newsNoticeService.queryNewNewsNoticeList(0, 0, 3);
		FirstBorrowCnd firstBorrowCnd = new FirstBorrowCnd();
		Page page = new Page(0, 7);
		// 直通车专区
		List<FirstBorrowVo> firstBorrowVos = firstBorrowService.queryFirstBorrowByFirstBorrowCnd(firstBorrowCnd, page);
		// 查询头部动态显示的栏目
		List<CmsChannel> showChannels = channelService.queryShowChannels();
		mav.addObject("showChannels", showChannels);
		mav.addObject("cmsChannel", cmsChannel);
		mav.addObject("initials", initials);
		mav.addObject("cmsPediaEntries", cmsPediaEntries);
		mav.addObject("investList", investList);
		mav.addObject("newsNoticeVos", newsNoticeVos);
		mav.addObject("firstBorrowVos", firstBorrowVos);
		mav.addObject("initai", initai);
		return mav;
	}

	
	
	@RequestMapping(value = "/baike-{initial}")
	public ModelAndView indexInitial(@PathVariable("initial") String initial) throws Exception {
		return index(initial);
	}
	
	

	@RequestMapping(value = "/baike/{id}")
	public ModelAndView knowdetail(@PathVariable("id") Integer id) throws Exception {
		ModelAndView mav = new ModelAndView("/cms/knowdetail");
		CmsPediaEntry cmsPediaEntry = cmsPediaEntryService.getCmsPediaEntryById(id);
		// 投标专区
		SearchInvestCnd seach = new SearchInvestCnd();
		seach.setLimitTime("isTendering");
		seach.setOrderType("asc");
		List<BorrowVo> investList = investRecordService.queryInvestRecordList(seach, new Page(0, 6));
		// 按字母检索
		List<String> initials = cmsPediaEntryService.queryAllInitials();
		// 国诚最新公告
		List<NewsNoticeVo> newsNoticeVos = newsNoticeService.queryNewNewsNoticeList(0, 0, 3);
		FirstBorrowCnd firstBorrowCnd = new FirstBorrowCnd();
		Page page = new Page(0, 7);
		// 直通车专区
		List<FirstBorrowVo> firstBorrowVos = firstBorrowService.queryFirstBorrowByFirstBorrowCnd(firstBorrowCnd, page);
		// 相关标签
		List<CmsTag> cmsTags = cmsTagService.queryTagsByName(cmsPediaEntry.getName(), 0, 21);
		// 相关文章
		List<CmsArticle> cmsArticles = articleService.queryArticlesByTag(cmsPediaEntry.getName(), 0, 12);
		// 查询头部动态显示的栏目
		List<CmsChannel> showChannels = channelService.queryShowChannels();
		mav.addObject("showChannels", showChannels);
		mav.addObject("cmsPediaEntry", cmsPediaEntry);
		mav.addObject("investList", investList);
		mav.addObject("initials", initials);
		mav.addObject("newsNoticeVos", newsNoticeVos);
		mav.addObject("firstBorrowVos", firstBorrowVos);
		mav.addObject("cmsTags", cmsTags);
		mav.addObject("cmsArticles", cmsArticles);
		return mav;
	}

}
