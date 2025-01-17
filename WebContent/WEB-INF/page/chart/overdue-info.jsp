<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/page/common/taglib.jsp"%>
<%@ include file="/WEB-INF/page/common/public.jsp"%>

<input type="hidden" id="type" value="overdueInfo"/>
<input type="hidden" id="pageNum" value="${page.pageNo}"/>
<input type="hidden" id="totalPage" value="${page.totalPage}"/>
<input type="hidden" id="totalCount" value="${page.totalCount}"/>

<div class="caiwubg"> 
  	<table class="nobordertop">
       <tr>
       <th height="38">借款标题</th>
       <th>类型</th>
       <th>借款人</th>
       <th>期数</th>
       <th>应还本金</th>
       <th>应还直通车金额</th>
       <th>应还利息</th>
       <th>应还罚息</th>
       <th>应还日期</th>
       <th>还款状态</th>
      </tr>
      <c:forEach items="${page.result}" var="repaymentChartVo" varStatus="s">
      <tr <c:if test="${s.index%2==1}">bgcolor="#ecfafd"</c:if>>
       <td><a href="${path }/toubiao/${repaymentChartVo.borrowId}.html" title="${repaymentChartVo.borrowName}">${fn:substring(repaymentChartVo.borrowName,0,12)}<c:if test="${fn:length(repaymentChartVo.borrowName)>12}">..</c:if></a></td>
       <td align="center">
       <c:if test="${repaymentChartVo.borrowType==1}">信用标</c:if>
       <c:if test="${repaymentChartVo.borrowType==2}">抵押标</c:if>
       <c:if test="${repaymentChartVo.borrowType==3}">净值标</c:if>
       <c:if test="${repaymentChartVo.borrowType==5}">担保标</c:if>
       </td>
       <td align="center"><a href="${path}/accountdetail/show.html?userName=${portal:encode(portal:encode(repaymentChartVo.userNameEncrypt))}"  target="_blank" title="${repaymentChartVo.userName}">${repaymentChartVo.userName}</a></td>
       <td align="center">
    		<c:if test="${repaymentChartVo.style == 1 || repaymentChartVo.style == 2}">
            ${repaymentChartVo.order}/${repaymentChartVo.timeLimit }
            </c:if>
            <c:if test="${repaymentChartVo.style != 1 && repaymentChartVo.style != 2}">
            ${repaymentChartVo.order}/1
            </c:if>
       </td>
       <td align="center"> <font color="#00a7e5">￥<fmt:formatNumber value="${repaymentChartVo.capital}" pattern="#,##0.00"/></font></td>
       <td align="center"> <font color="#00a7e5">
       	  <c:if test="${repaymentChartVo.firstAccount != null}">￥<fmt:formatNumber value="${repaymentChartVo.firstAccount}" pattern="#,##0.00"/></c:if>
	      <c:if test="${repaymentChartVo.firstAccount == null}">￥0.00</c:if>
       </font>
       </td>
       <td align="center"> <font color="#00a7e5">￥<fmt:formatNumber value="${repaymentChartVo.interest}" pattern="#,##0.00"/></font></td>
       <td align="center"> <font color="#00a7e5">￥<fmt:formatNumber value="${repaymentChartVo.lateInterest}" pattern="#,##0.00"/></font></td>
       <td align="center"> ${repaymentChartVo.repaymentTimeStr}</td>
       <td align="center"><font color="#00a7e5">
       	  <c:if test="${repaymentChartVo.status == 0 && repaymentChartVo.webstatus == 0}">未还款</c:if>
          <c:if test="${repaymentChartVo.status == 0 && repaymentChartVo.webstatus == 1}">已垫付</c:if>
          <c:if test="${repaymentChartVo.status == 1}">
          <%-- ${repaymentChartVo.repaymentYestimeStr} --%>
          	已还款
          </c:if>
       </font></td>
      </tr>
      </c:forEach>
   </table>
</div>

<!-- 翻页 -->            
<div class="yema">
	<div class="yema_cont">
		<div class="yema rt">
			<jsp:include page="/WEB-INF/page/common/ajaxpage.jsp">
			<jsp:param name="pageNo" value="${page.pageNo}" />
			<jsp:param name="totalPage" value="${page.totalPage}" />
			<jsp:param name="hasPre" value="${page.hasPre}" />
			<jsp:param name="prePage" value="${page.prePage}" />
			<jsp:param name="hasNext" value="${page.hasNext}" />
			<jsp:param name="nextPage" value="${page.nextPage}" />
			</jsp:include>
		</div>
	</div>  
</div>
