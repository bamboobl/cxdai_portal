<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/page/common/taglib.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@ include file="/WEB-INF/page/common/public.jsp"%>
<title>我的账户_投资管理_正在投标中列表_国诚金融</title>

</head>

<body>
<!--头部开始-->
<%@ include file="/WEB-INF/page/common/header.jsp"%>
<!--头部结束-->
<!--我的账户左侧开始-->
<div id="Container">
<div id="Bmain">
  <div class="title">
    <span class="home"><a href="${path}/">国诚金融</a></span><span><a href="${path }/myaccount/toIndex.html">我的账户</a></span><span><a href="#">投资管理</a></span><span><a href="${path }/account/InvestManager/queryTendeIndex.html">正在投标中列表</a></span>
  </div>
		<div id="menu_centert">
				<div id="menu_left">
					<%@ include file="/WEB-INF/page/account/myAccount_leftMenu.jsp"%>
				</div>  
           <!--我的账户左侧 结束 -->
     
<!--我的账户右侧开始 -->         
				<div class="lb_waikuang">
					
					<div id="menu_right"><div class="clear"></div></div>
					
				</div>
</div>
</div>
<div class="clearfix"></div>
	<div>
		<%@ include file="/WEB-INF/page/common/footer.jsp"%>
	</div>
</body>
<script type="text/javascript">
$(function() {
	loadDefaltTenderRecord();
});

var beginTime = '${beginTime}';
var endTime = '${endTime}';
var borrowName = '${borrowName}';
function loadDefaltTenderRecord() {

	$.ajax({
		url : '${basePath}/account/InvestManager/queryTenderingForOtherBorrow/1.html',
		data : {
			beginTime : beginTime,
			endTime : endTime,
			borrowName : borrowName
		},
		type : 'post',
		dataType : 'text',
		success : function(data) {
			$("#menu_right").html(data);

		},
		error : function(data) {
			layer.msg('网络连接异常，请刷新页面或稍后重试！', 1, 5);
		}
	});
}


/**搜索*/
function search(pageNum,borrowStatus) {
	$.ajax({
		url : '${basePath}/account/InvestManager/queryTenderingForOtherBorrow/' + pageNum
				+ '.html',
		data : {
			beginTime : $('#beginTime').val(),
			endTime : $('#endTime').val(),
			borrowName : $('#borrowName').val(),
			borrowStatus:borrowStatus
		},
		type : 'post',
		dataType : 'text',
		success : function(data) {
			$("#menu_right").html(data);

		},
		error : function(data) {
			layer.msg('网络连接异常，请刷新页面或稍后重试！', 1, 5);
		}
	});
}

/**
 * hujianpan
 * 切换统计数据,即已收和待收页签的切换
 */
function toggleList(borrowStatus){
	 $("#un").removeClass("men_li");
	 $("#rec").removeClass("men_li");
		 if(borrowStatus == 'underway'){			
			 $("#un").attr("class",'men_li');
			 turnTenderRecord('${basePath}/account/InvestManager/queryTenderingForOtherBorrow/1.html?borrowStatus='+borrowStatus);
		 }else {					
			 $("#rec").attr("class",'men_li');
			 turnTenderRecord('${basePath}/account/InvestManager/queryTenderingForOtherBorrow/1.html?borrowStatus='+borrowStatus);
		 }
}

function turnTenderRecord(url) {

	$.ajax({
		url : url,
		data : {
			beginTime : beginTime,
			endTime : endTime,
			borrowName : borrowName
		},
		type : 'post',
		dataType : 'text',
		success : function(data) {
			$("#menu_right").html(data);

		},
		error : function(data) {
			layer.msg('网络连接异常，请刷新页面或稍后重试！', 1, 5);
		}
	});
}
</script>
</html>
