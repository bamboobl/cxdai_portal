var showMsg="";
var o = {
	num:"100%",
	cicleNum:"100%",
	diagramDiv:"diagram",
	getDiv:".get",
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		var str = 0.35441205295814837;
		return Math.floor((str*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael(o.diagramDiv, 91, 91),
			rad = 38,//rad=40
			defaultText = o.cicleNum+'%';
			var proceInt=parseInt(defaultText);
			if(proceInt>=100){
				showMsg="已完成";
			}else if (proceInt<=0){
				showMsg="未开始";
			}
			else if ((proceInt>0) && (proceInt<100)){
				showMsg="进行中";
				}
			speed = 250;
		var rc=r.circle(45, 45, 38);
			rc.animate({fill: "#fff", stroke: "#dbdbdb", "stroke-width": 11});
			
		var title = r.text(45, 40, defaultText).attr({
			font: 'bold 18px Microsoft JhengHei',
			fill: '#767676'
		}).toFront();
		r.text(45, 60, showMsg).attr({
			font: '13px Microsoft JhengHei',
			fill: '#767676'
		}).toFront();
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				//alpha = v == 360 ? 359.99 : v,
				alpha = v == 360 ? 359.33: v,
				random = o.random(10, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 45 + rad * Math.cos(b),
				sy = 45 - rad * Math.sin(b),
				x = 45 + rad * Math.cos(a),
				y = 45 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		$(o.getDiv).find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value=o.num;
				if(Number(value)>=100){
					value=0;
					rc.animate({fill: "#fff", stroke: "#94c73d", "stroke-width": 12});
				}
				else if((Number(value)<100) && (Number(value)>0)) {
					var z = r.path().attr({ arc: [value, "#00a7e5", rad], 'stroke-width': 12 });
				}
				else if(Number(value)<=0){
					var z = r.path().attr({ arc: [value, "#dbdbdb", rad], 'stroke-width': 12 });
				}

		});
		
	}
}
//小进度圆形图
var showMsg="";
var oo = {
	num:"100%",
	cicleNum:"100%",
	diagramDiv:"diagram1",
	getDiv:".get1",
	init: function(){
		this.diagram1();
	},
	random: function(l, u){
		var str = 0.35441205295814837;
		return Math.floor((str*(u-l+1))+l);
	},
	diagram1: function(){
		var r = Raphael(oo.diagramDiv, 40, 40),
			rad = 17,//rad=40
 			defaultText = oo.cicleNum+'%';
//			var proceInt=parseInt(defaultText);
//			if(proceInt>=100){
//				showMsg="已完成";
//			}else if (proceInt<=0){
//				showMsg="未开始";
//			}
//			else if ((proceInt>0) && (proceInt<100)){
//				showMsg="进行中";
//				}
			speed = 250;
		var rc=r.circle(18, 18, 17);
			rc.animate({fill: "#fff", stroke: "#dbdbdb", "stroke-width": 2});
			
		var title = r.text(18, 18, defaultText).attr({
			font: 'bold 10px Microsoft YaHei',
			fill: '#767676'
		}).toFront();
		r.customAttributes.arc1 = function(value, color1, rad){
			var v = 3.6*value,
				//alpha = v == 360 ? 359.99 : v,
				alpha = v == 360 ? 359.33: v,
				random = oo.random(10, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 18 + rad * Math.cos(b),
				sy = 18 - rad * Math.sin(b),
				x = 18 + rad * Math.cos(a),
				y = 18 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color1 }
		}
		$(oo.getDiv).find('.arc1').each(function(i){
			var t = $(this), 
				color = t.find('.color1').val(),
				value=oo.num;
				if(Number(value)>=100){
					value=0;
					rc.animate({fill: "#fff", stroke: "#94c73d", "stroke-width": 2});
				}
				else if((Number(value)<100) && (Number(value)>0)) {
					var z = r.path().attr({ arc1: [value, "#00a7e5", rad], 'stroke-width': 2 });
				}
				else if(Number(value)<=0){
					var z = r.path().attr({ arc1: [value, "#dbdbdb", rad], 'stroke-width': 2 });
				}

		});
		
	}
}
//数据初始
     $(function(){
    	 initProgress();
      });
     function initProgress(){
    	 $(".loading #diagram").empty();
    	var count = $(".get").find(".arc").find(".percent").val();
 		if(Number(count) < 0.001){
 			o.num = 0.01;
 			o.cicleNum = count;
 		}else{
 			o.num = count;
 			o.cicleNum = count;
 		}
 		o.diagramDiv = "diagram";
 		o.getDiv = ".get";
 		o.init(); 
	     $(".loading #diagram1").empty();
    	var count = $(".get1").find(".arc1").find(".percent1").val();
 		if(Number(count) < 0.001){
 			oo.num = 0.01;
 			oo.cicleNum = count;
 		}else{
 			oo.num = count;
 			oo.cicleNum = count;
 		}
 		oo.diagramDiv = "diagram1";
 		oo.getDiv = ".get1";
 		oo.init(); 

     }
