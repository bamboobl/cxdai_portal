<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/page/common/taglib.jsp"%>

<script type="text/javascript">
/**翻页处理*/
function findPage(pageNo){
	window.parent.toggleList('invest',pageNo);
}
</script>

                         <div class="rz_borrow1">
                                      <div class="tbjl">
                                           <table border="0">
                                           <tr>
                                           <td>借款标题</td>
                                           <td>借款人</td>
                                       <!--     <td>投标金额</td>
                                           <td>状态</td> -->
                                           <td>投标方式</td>
                                           <td>投标时间</td>
                                           </tr>
				<c:if
					test="${null==resultPages.result || fn:length(resultPages.result)==0 }">
					<tr>
						<td colspan="5"><font color="red">无投标记录</font></td>
					</tr>
				</c:if>
				<c:forEach items="${resultPages.result}" var="investinfo" varStatus="sta"
				step="1">
				<c:if test="${sta.index %2 ==0 }"><tr style="background:#ecfafd"></c:if>
				<c:if test="${sta.index % 2 != 0 }"><tr style="background:#fff"></c:if>
						<td><a
							href="${path }/toubiao/${investinfo.borrowId }.html"
							target="_blank">${investinfo.borrowName }</a></td>
			   	<td><a
							href="${path}/accountdetail/show.html?userName=${portal:encode(portal:encode(investinfo.userNameEncrypt))}"
							 target="_blank" title="${investinfo.userNameSecret }">${investinfo.userNameSecret }</a></td>
							<%-- 	<td>￥<span id="zcTotal"> <fmt:formatNumber
									value="${investinfo.tenderAccount }" pattern="#,##0.00" /></span></td> --%>
						<%-- <td><img src="${basePath }/images/tongguo.png" /></td> --%>
						<td>
							<c:if test="${investinfo.tenderType==0}">手动投标</c:if>
							<c:if test="${investinfo.tenderType==1}">自动投标</c:if>
							<c:if test="${investinfo.tenderType==2}">直通车投标</c:if>
							<c:if test="${investinfo.tenderType==4}">定期宝投标</c:if>
							<c:if test="${investinfo.tenderType==5}">业务员投标</c:if>
						</td>
						<td>${fn:substring(investinfo.succcessTime, 0, 10)}</td>
					</tr>
				</c:forEach>
                         
                                        </table>                                                                               
                                        </div>
                                
                                <!--yema st-->
                                      <div class="yema">
                                                <div class="yema_cont">
                                                    <div class="yema rt">
				<jsp:include page="/WEB-INF/page/common/ajaxpage.jsp">
					<jsp:param name="pageNo" value="${resultPages.pageNo}" />
					<jsp:param name="totalPage" value="${resultPages.totalPage}" />
					<jsp:param name="hasPre" value="${resultPages.hasPre}" />
					<jsp:param name="prePage" value="${resultPages.prePage}" />
					<jsp:param name="hasNext" value="${resultPages.hasNext}" />
					<jsp:param name="nextPage" value="${resultPages.nextPage}" />
				</jsp:include>

			</div>
                                                </div>  
                                            </div>
                                      <!--yema off-->
                         </div>                                            
