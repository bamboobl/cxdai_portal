<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/page/common/taglib.jsp"%>
<%@ include file="/WEB-INF/page/common/public.jsp"%>  

<div id="user_mian_right"> 
   <div class="lb_waikuang whitebg">
       <div class="searchbox fl whitebg">
           <ul class="lb_title">
               <li>借款标题：<input class="inputText02" name="borrowName" id="borrowName" value="${borrowName}"></li>
               <li>发布时间：
                 <input class="inputText02" name="beginTime" id="beginTime" class="Wdate" value="${beginTime}" onClick="WdatePicker();">
                 ~
                 <input class="inputText02" name="endTime" id="endTime" class="Wdate" value="${endTime}" onClick="WdatePicker();">
               </li>
               <li class="lb_culi" ><span class="lb_title_btn" ><a href="javascript:;" onclick="queryTendering(1,10)">查询</a></span></li>
            </ul>
        </div>
        <div class="myid">
           <div id="myid whitebg">
              <table >
				   <tr>
				     <td>发布时间 </td>
				     <td>借款标题</td>
				     <td>借款标类型</td>
				     <td>借款金额</td>
				     <td>年化利率</td>
				     <td>状态</td>
				     <td>操作</td>
				   </tr>
           		   <c:forEach items="${page.result}" var="borrow" varStatus="sta" step="1" >
                   <tr class="${sta.index%2==0?'trcolor':'firstthird'}">
                     <td>${borrow.publishTimeStr }</td>
                     <td><a title="${borrow.name }" href="${path }/toubiao/${borrow.id}.html" target="_blank">${fn:substring(borrow.name,0,10)}<c:if test="${fn:length(borrow.name)>10}">..</c:if></a></td>
                     <td>${portal:desc(300, borrow.borrowtype)}</td>
                     <td>￥<fmt:formatNumber value="${borrow.account}" pattern="#,##0.00"/></td>
                     <td><fmt:formatNumber value="${borrow.apr }" pattern="#,##0.00"/>%</td>
                     <td class="numcolor">${portal:desc(100, borrow.status)}</td>
                     <td>
	                     <c:if test="${borrow.status == 2}">
	                     	<a href="javascript:calcelBorrow(${borrow.id});">撤标</a>
	                     	&nbsp;&nbsp;<a href="javascript:void(0);" onclick="advanceFullBorrow(${borrow.id},this);">提前满标</a>
	                     </c:if>
	                     
	                     <c:if test="${(borrow.borrowtype != 3 && borrow.borrowtype != 4) and( borrow.status == 1 or borrow.status == 2)}">
	                     	&nbsp;&nbsp;<a href="${path }/salariatBorrow/initEditBorrow/${borrow.id }.html" target="_blank" title="点击可修改借款标信息">修改</a>
	                   	 </c:if>
	                   	 
	                   	 <c:if test="${borrow.borrowtype != 3 && borrow.borrowtype != 4}">
	                     	&nbsp;&nbsp;<a href="${path }/salariatBorrow/initUpload.html?borrowId=${borrow.id }" target="_blank" title="点击可修改认证资料">资料</a>
	                     </c:if>
                     </td>
                   </tr>
           		   </c:forEach> 
               </table>
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
		</div>
      </div>
	</div>
</div>
