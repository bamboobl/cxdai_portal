<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/page/common/taglib.jsp"%>
<%@ include file="/WEB-INF/page/common/public.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>PC端直接注册</title>
<link href="${basePath}/css/layout.css" rel="stylesheet" type="text/css" />
<link href="${basePath}/css/stylezc.css" rel="stylesheet" type="text/css" />
<script src="${basePath}/js/jquery-1.8.3.minzc.js" type="text/javascript"></script>
<script type="text/javascript" src="${basePath}/js/jquery.event.drag-1.5.minzc.js"></script>
<script type="text/javascript" src="${basePath}/js/jquery.touchSliderzc.js"></script>
<style type="text/css">
.name-cg1{   
position:absolute; 
top: 15%;
left:37%;
text-align:center;
float:left;
font-size: 18px;}
</style>
<script type="text/javascript">
 
$(document).ready(function () {
	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
		},function(){
		$("#btn_prev,#btn_next").fadeOut()
		})
	$dragBln = false;
	$(".main_image").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e) {
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	})
	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	})
	$(".main_image a").click(function() {
		if($dragBln) {
			return false;
		}
	})
	timer = setInterval(function() { $("#btn_next").click();}, 5000);
	$(".main_visual").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() { $("#btn_next").click();}, 5000);
	})
	$(".main_image").bind("touchstart", function() {
		clearInterval(timer);
	}).bind("touchend", function() {
		timer = setInterval(function() { $("#btn_next").click();}, 5000);
	})

$(".head-weixin-icon").hover(function(){
$(".head-ewm-tag").css("display","block");
},function(){
$(".head-ewm-tag").css("display","none");
});
 
});
$(function(){
	$("#inAccount" ).click(function() {
		window.open("${path}/myaccount/toIndex.html","_blank");
	});	
});
 

 
</script>
<c:if test="${flag==0}">
<script type="text/javascript">
$(function(){
	$('.tc-bigbox').css("display","block"); 
	var currentTime=3;
	var temp=setInterval(function name() {
	    currentTime--;
	   	if (currentTime==0) {
	   	    clearInterval(temp);
		    $('.tc-bigbox').css("display","none");
		}
	}, 1000);
});
</script>
</c:if>
 
</head>
 
<body style="background:#fff;">
<!--头部开始-->
	<%@ include file="/WEB-INF/page/common/header.jsp"%>
	<!--头部结束-->
	<div style="height:60px; margin-top:80px;">
    
    </div>

	<div class="bigboxwk " style=" background:#fff; border:none;  padding-bottom:100px; "> 
  
   
   <div class="bigboxwk " style="width:86%;"> <img src="${basePath}/images/res-cg.png"/> </div>
   
  <ul class="steps-box" style="margin-top:20px;">
        <li style="padding-left:0;">
      <div class="res-smbox"> <span class="title-res">注册成功</span> <span >您已获得2o元红包和一次抽奖机会</span> </div >
      <div class="res-smboxs"><img src="${basePath}/images/icon-1.png"/><a href="${path}/lottery_chance/info.html" target="_blank" class="btn-style ">去抽奖</a></div>
    </li>
        <li>
      <div class="res-smbox"> <span class="title-res">定期宝投资</span> <span >首投3、6、12月定期宝得抽奖机会</span></div >
      <div class="res-smboxs"><img src="${basePath}/images/icon-2.png"/><a href="${path}/dingqibao.html" target="_blank" class="btn-style ">去投定期宝</a></div>
    </li>
        <li>
      <div class="res-smbox"> <span class="title-res">论坛连续签到30天</span> <span >再得1次抽奖机会</span> </div >
      <div class="res-smboxs"><img src="${basePath}/images/icon-3.png"/><a href="${bbsPath}" target="_blank" class="btn-style "> 去论坛签到 </a></div>
    </li>
        <li style="border:none;">
      <div class="res-smbox"> <span class="title-res">首次投资满1000元 </span> <span class="boxbox" style="">可获得80元红包奖励</span> </div >
      <div class="res-smboxs"><img src="${basePath}/images/icon-4.png"/><a href="${path}/dingqibao.html" target="_blank" class="btn-style ">去投资</a></div>
    </li>
      </ul>
  <div class="btn-user-box">
        <input type="button" class="user-btn" id="inAccount" style="background:#da3931;" value="进入账户"/>
      </div>
</div>

<!----------------弹窗----------------->
 <div class="tc-bigbox" style="display:none;">
	<div class="chengong">
    	<img src="${basePath}/images/chengong.png"/>
    	<div class="name-cg1"><span style="text-align: center;">${username}</span></div>
    </div>

</div>
<!----------------弹窗----------------->

<div class="clearfix"></div>
<%@ include file="/WEB-INF/page/common/footer.jsp"%>


</body>
</html>
