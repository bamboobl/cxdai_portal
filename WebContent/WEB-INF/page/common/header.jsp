<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<div class="header">
	<!--topbar-->
	<div class="topbar">
    	<div class="grid-1100">
            <div class="topbar-left">
                <div style="float:left; margin-left:px; color:#888; line-height:28px; padding-left:16px; font-size:14px; background:url(${path }/images/v5/telicon.png) no-repeat 0 2px; "> 客服电话400-0156-676 </div>
            </div>
            <div class="topbar-right">
                <ul class="fr f14">
                	<shiro:authenticated>
                	<li class="topmenu-gray"><a href="${path }/myaccount/toIndex.html" style="color:#f05e13; padding-right:0px;">${portal:currentUser().userName }</a><a href="javascript:logout();">退出</a><span>|</span></li>
                	</shiro:authenticated>
                	<shiro:notAuthenticated>
                	<li class="topmenu-gray"><a href="${path}/member/toLogin.html?backUrl=1">立即登录</a><span>|</span></li>
                	</shiro:notAuthenticated>
                    <li class="topmenu-blue"><a href="${path}/sycee.html">元宝商城</a><span>|</span><a href="${path }/lottery_chance/info.html" id="chanceTotalNumTip">抽大奖</a><span>|</span></li>
                    <li class="topmenu-gray"><a href="${path}/bangzhu.html">帮助中心</a><span>|</span><a href="${path }/zixun.html">国诚资讯</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!--nav main-->
    <div class="navbar" role="navigation">
    	<div class="grid-1100">
        	<div class="logo">
    			<a href="${path }/"><img src="${path}/images/v5/logo.png" alt="国诚金融"/></a>
            </div>
            <div class="menu">
                <ul id="headerMenu">
                    <li class="mainlevel active" id="homeA"><a href="${path }/">首页</a></li>
                    <li class="mainlevel" id="touziA"><a href="${path }/dingqibao.html">我要投资</a>
                        <ul id="sub_01">
                            <li><a href="${path }/dingqibao.html">定期宝</a></li>
                            <li><a href="${path }/curInController.html">活期宝</a></li>
                            <li><a href="${path }/toubiao.html">散标投资</a></li>
                            <li><a href="${path }/zhaiquan.html">债权转让</a></li>
                        </ul>
                    </li>            
                    <li class="mainlevel" id="rongziA"><a href="${path }/bangzhu/25.html">我要融资</a></li>
                    <li class="mainlevel" id="xinrenA"><a href="${path }/newPeopleArea/newPeopleAreaBiao.html">新人特惠</a> </li>
                    <li class="mainlevel"><a href="${bbsPath}" target="_blank">国诚社区</a> </li>
                    <li class="mainlevel" id="womenA"><a href="${path }/jianjie.html">关于我们</a></li>           
                    <li class="mainlevel menu-bluebg" id="zhanghuA">
                    	<a href="${path }/myaccount/toIndex.html" class="adim">
                    		<span>
                    			<shiro:notAuthenticated><img src="${path}/images/v5/lg-user.png"></shiro:notAuthenticated>
                    			<shiro:authenticated><img src="${path }${portal:currentUser().headImg }"></shiro:authenticated>
                   			</span>我的账户
                    	</a>
                     	<shiro:authenticated>
                     	<ul id="sub_01">
                            <li><a href="${path }/myaccount/toIndex.html">账户总览</a></li>
                            <li><a href="${path }/lottery_use_record/lott_use_record.html">我的奖励<span id="jiangliSpan"></span></a></li>
                            <li><a href="${path }/account/topup/toTopupIndex.html">在线充值</a></li>
                            <li><a href="javascript:logout();">退出</a></li>
                        </ul>
                    	</shiro:authenticated>
                    </li>        
               </ul>
          </div>
       </div>
    </div>
</div><!--头部end-->
<script>
$(function(){
	<shiro:authenticated>
	// 统计抽奖机会有效总次数
	$.ajax({
		url : "${path}/lottery_chance/queryLotteryChanceUseNumTotal.html",
		type : 'post',
		success : function(data){
			if(new Number(data) > 0){
				$("#chanceTotalNumTip").html("抽大奖("+data+")");
			}else{
				$("#chanceTotalNumTip").html("抽大奖");
			}
		},
		error : function(data) {
			layer.msg('网络连接异常，请刷新页面或稍后重试！', 1, 5);
		}
	});
	$.ajax({
		url : "${path}/lottery_chance/queryLotteryChanceUseNumTotal.html?flag=red",
		type : 'post',
		success : function(data){
			if(data>0){
				$("#jiangliSpan").html("(<span class='oren'>"+data+"</span>)");
			}
		},
		error : function(data) {
			layer.msg('网络连接异常，请刷新页面或稍后重试！', 1, 5);
		}
	});
	$.ajax({
		url : "${path}/lottery_chance/LotteryTip.html",
		type : 'post',
		success : function(data){
			if(new Number(data) > 0){
    			 $.layer({
						title:'抽奖机会提醒',
						area: ['400px','200px'],  
						dialog:{
							type:1,
							msg:'动动手指坐享其成！</br>恭喜您邀请'+new Number(data)+'位好友成功，获得'+new Number(data)+'次抽奖机会</br>快去国诚官网“抽大奖”试试手气吧！',
						 	btns:1,
						 	btn: ['我知道了']
						 /* 	yes: function(index){
						 		window.parent.location.href="${path }/dingqibao/${fixBorrowVo.id}.html";
						 	} */
						}
						/* close: function(index){
					 		window.parent.location.href="${path }/dingqibao/${fixBorrowVo.id}.html";
					 	} */
					 }); 
    		}
		},
		error : function(data) {
			layer.msg('网络连接异常，请刷新页面或稍后重试！', 1, 5);
		}
	});
	</shiro:authenticated>
});

function logout() {
	layer.confirm("确认退出?" , function (){
		$.ajax({
			url : '${basePath }/logout.html',
			type : 'post',
			dataType : 'text',
			success : function(data) {
				window.open("${path }/","_self");
			},
			error : function(data) {
				layer.msg('网络连接异常，请刷新页面或稍后重试！', 1, 5);
			}
		});
	});
}
var _tipFlag = true;
if(_tipFlag == true){
	// layer.alert("动动手指坐享其成！（换行）恭喜您邀请1位好友成功，获得1次抽奖机会（换行）快去国诚官网“抽大奖”试试手气吧！");
	// 点击‘我知道了’后，后台标记为提醒过的，并将_tipFlag标记为false
}

/**
 * 设置底部菜单选中样式
 */
var pathStr = window.location.pathname ;
$("#headerMenu").children('li').removeClass("active");
if(pathStr.indexOf('/dingqibao.')!=-1||pathStr.indexOf('/curInController.')!=-1||pathStr.indexOf('/zhaiquan')!=-1||pathStr.indexOf('/toubiao')!=-1||pathStr.indexOf('/zhitongche/')!=-1){
	$("#touziA").addClass("active");
}else if(pathStr.indexOf('/bangzhu/25')!=-1){
	$("#rongziA").addClass("active");
}else if(pathStr.indexOf('/newPeopleArea/')!=-1){
	$("#xinrenA").addClass("active");
}else if(pathStr.indexOf('/jianjie')!=-1||pathStr.indexOf('/baodao')!=-1||pathStr.indexOf('/gonggao')!=-1){
	$("#womenA").addClass("active");
}
if(pathStr.indexOf('/myaccount/')!=-1||pathStr.indexOf('/myAccount')!=-1||pathStr.indexOf('/account/')!=-1||pathStr.indexOf('/curAccount')!=-1||pathStr.indexOf('/bill/')!=-1||pathStr.indexOf('tainer.')!=-1||pathStr.indexOf('/accOpertingRecord/')!=-1||pathStr.indexOf('/lottery_use_record')!=-1){
	$("#zhanghuA").addClass("active");$("#touziA").removeClass("active");
}else if(pathStr=='/cxdai_portal/'||pathStr==''||pathStr=='/'){
	$("#homeA").addClass("active");
}
</script>