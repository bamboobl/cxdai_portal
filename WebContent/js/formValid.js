/**
 * 表单验证JS
 * 
 * 使用说明：
 * 1、引入JS
 * 示例：<script type="text/javascript" src="${basePath}/js/formValid.js"></script>
 * 
 * 2、表单元素添加dataType和msg属性
 * 示例：
 * 	dataType="Require" msg="借款标题不能为空"
 * 	dataType="Character|Limit" min="6" max="12" msg="投标密码必须为字母或数字|投标密码长度必须在6~12位之间"
 * 
 * 3、表单提交前调用Validator.Validate()方法，参数1为formId，参数2为错误提示方示(详见下方)
 * 示例：if (Validator.Validate('salariatForm',1)==false) return;
 * 
 * 规则设置可参见/page/borrow/applyCommerceBorrow.jsp
 */
Validator = {
	Require : /.+/,
	Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	Phone : /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,
	Mobile : /^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/,
	Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
	IdCard : "this.IsIdCard(value)",
	Currency : /^\d+(\.\d+)?$/,
	Money : /^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/,	//金额
	Number : /^\d+$/,
	Zip : /^[1-9]\d{5}$/,
	QQ : /^[1-9]\d{4,8}$/,
	Integer : /^[-\+]?\d+$/,
	Double : /^[-\+]?\d+(\.\d+)?$/,
	English : /^[A-Za-z]+$/,
	Character : /^[a-zA-Z0-9]+$/,	//只能是字母或数字
	Chinese : /^[\Α-\￥]+$/,
	Username : /^[a-z]\w{3,}$/i,
	UnSafe : /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,
	IsSafe : function(str) {
		return !this.UnSafe.test(str);
	},
	SafeString : "this.IsSafe(value)",
	Filter : "this.DoFilter(value, getAttribute('accept'))",
	Limit : "this.limit(value.length,getAttribute('min'),  getAttribute('max'))",//长度范围
	LimitB : "this.limit(this.LenB(value), getAttribute('min'), getAttribute('max'))",
	Date : "this.IsDate(value, getAttribute('min'), getAttribute('format'))",
	Repeat : "value == document.getElementsByName(getAttribute('to'))[0].value",
	Range : "getAttribute('min') <= (value|0) && (value|0) <= getAttribute('max')",//数值范围
	Compare : "this.compare(value,getAttribute('operator'),getAttribute('to'))",
	Custom : "this.Exec(value, getAttribute('regexp'))",
	Group : "this.MustChecked(getAttribute('name'), getAttribute('min'), getAttribute('max'))",
	ErrorItem : [ document.forms[0] ],
	//ErrorMessage : [ "以下原因导致提交失败：\t\t\t\t" ],
	ErrorMessage : [ "请按以下要求填写：\t\t\t\t" ],
	Validate : function(formId, mode) {
		var theForm = document.getElementById(formId);
		var obj = theForm || event.srcElement;
		var count = obj.elements.length;
		this.ErrorMessage.length = 1;
		this.ErrorItem.length = 1;
		this.ErrorItem[0] = obj;
		
		for ( var i = 0; i < count; i++) {
			with (obj.elements[i]) {
				var dataTypes = obj.elements[i].getAttribute("dataType");
				if (dataTypes==null)continue;
				
				var _dataTypeAry = dataTypes.split('|');
				var _errorMsgAry = getAttribute("msg").split('|');
				
				for(var j=0;j<_dataTypeAry.length;j++){
					var _dataType = _dataTypeAry[j];
					//var _dataType = obj.elements[i].getAttribute("dataType");
					if (typeof (_dataType) == "object"|| typeof (this[_dataType]) == "undefined" || _dataType==null)continue;
					
					this.ClearState(obj.elements[i]);
					if (getAttribute("require") == "false" && value == "")continue;
					
					var _errorMsg = _errorMsgAry[j];
					
					switch (_dataType) {
						case "IdCard":
						case "Date":
						case "Repeat":
						case "Range":
						case "Compare":
						case "Custom":
						case "Group":
						case "Limit":
						case "LimitB":
						case "SafeString":
						case "Filter":
							if (!eval(this[_dataType])) {
								if(_errorMsg!=null && _errorMsg != "undefined")this.AddError(i, _errorMsg);
							}
							break;
						default:
							if (!this[_dataType].test(value)) {
								if(_errorMsg!=null && _errorMsg != "undefined")this.AddError(i, _errorMsg);
							}
							break;
					}
				}
			}
		}
		//错误提示方式
		if (this.ErrorMessage.length > 1) {
			mode = mode || 1;
			var errCount = this.ErrorItem.length;
			switch (mode) {
				case 1://批量提示
					layer.alert(this.ErrorMessage.join("\n"));
					this.ErrorItem[1].focus();
					break;
				case 2://批量提示,错误表单框中字体变红
					for ( var i = 1; i < errCount; i++)
						this.ErrorItem[i].style.color = "red";
				case 3://表单后面显示红字提示
					for ( var i = 1; i < errCount; i++) {
						try {
							var span = document.createElement("SPAN");
							span.id = "__ErrorMessagePanel";
							span.style.color = "red";
							this.ErrorItem[i].parentNode.appendChild(span);
							span.innerHTML = this.ErrorMessage[i].replace(/\d+:/,
									"*");
						} catch (e) {
							layer.alert(e.description);
						}
					}
					this.ErrorItem[1].focus();
					break;
				case 4://单个弹出提示
					//alert(this.ErrorMessage[1].replace(/\d+:/,""));
					layer.alert(this.ErrorMessage[1].replace(/\d+:/,""));
					this.ErrorItem[1].focus();
					break;
				default:
					layer.alert(this.ErrorMessage.join("\n"));
					break;
			}
			return false;
		}
		return true;
	},
	limit : function(len, min, max) {
		min = min || 0;
		max = max || Number.MAX_VALUE;
		return min <= len && len <= max;
	},
	LenB : function(str) {
		return str.replace(/[^\x00-\xff]/g, "**").length;
	},
	ClearState : function(elem) {
		with (elem) {
			if (style.color == "red")
				style.color = "";
			var lastNode = parentNode.childNodes[parentNode.childNodes.length - 1];
			if (lastNode.id == "__ErrorMessagePanel")
				parentNode.removeChild(lastNode);
		}
	},
	AddError : function(index, str) {
		this.ErrorItem[this.ErrorItem.length] = this.ErrorItem[0].elements[index];
		//this.ErrorMessage[this.ErrorMessage.length] = this.ErrorMessage.length + ":" + str;	//以数字为序号
		this.ErrorMessage[this.ErrorMessage.length] = str;
	},
	Exec : function(op, reg) {
		return new RegExp(reg, "g").test(op);
	},
	compare : function(op1, operator, op2) {
		op1 = parseFloat(op1);
		op2 = parseFloat(op2);
		switch (operator) {
			case "NE":
				return (op1 != op2);
			case "GT":
				return (op1 > op2);
			case "GE":
				return (op1 >= op2);
			case "LT":
				return (op1 < op2);
			case "LE":
				return (op1 <= op2);
			default:
				return (op1 == op2);
		}
	},
	MustChecked : function(name, min, max) {
		var groups = document.getElementsByName(name);
		var hasChecked = 0;
		min = min || 1;
		max = max || groups.length;
		for ( var i = groups.length - 1; i >= 0; i--)
			if (groups[i].checked)
				hasChecked++;
		return min <= hasChecked && hasChecked <= max;
	},
	DoFilter : function(input, filter) {
		return new RegExp("^.+\.(?=EXT)(EXT)$".replace(/EXT/g, filter.split(
				/\s*,\s*/).join("|")), "gi").test(input);
	},
	IsIdCard : function(number) {
		var date, Ai;
		var verify = "10x98765432";
		var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
		var area = [ '', '', '', '', '', '', '', '', '', '', '', '北京', '天津',
				'河北', '山西', '内蒙古', '', '', '', '', '', '辽宁', '吉林', '黑龙江', '',
				'', '', '', '', '', '', '上海', '江苏', '浙江', '安微', '福建', '江西',
				'山东', '', '', '', '河南', '湖北', '湖南', '广东', '广西', '海南', '', '',
				'', '重庆', '四川', '贵州', '云南', '西藏', '', '', '', '', '', '', '陕西',
				'甘肃', '青海', '宁夏', '新疆', '', '', '', '', '', '台湾', '', '', '',
				'', '', '', '', '', '', '香港', '澳门', '', '', '', '', '', '', '',
				'', '国外' ];
		var re = number
				.match(/^(\d{2})\d{4}(((\d{2})(\d{2})(\d{2})(\d{3}))|((\d{4})(\d{2})(\d{2})(\d{3}[x\d])))$/i);
		if (re == null)
			return false;
		if (re[1] >= area.length || area[re[1]] == "")
			return false;
		if (re[2].length == 12) {
			Ai = number.substr(0, 17);
			date = [ re[9], re[10], re[11] ].join("-");
		} else {
			Ai = number.substr(0, 6) + "19" + number.substr(6);
			date = [ "19" + re[4], re[5], re[6] ].join("-");
		}
		if (!this.IsDate(date, "ymd"))
			return false;
		var sum = 0;
		for ( var i = 0; i <= 16; i++) {
			sum += Ai.charAt(i) * Wi[i];
		}
		Ai += verify.charAt(sum % 11);
		return (number.length == 15 || number.length == 18 && number == Ai);
	},
	IsDate : function(op, formatString) {
		formatString = formatString || "ymd";
		var m, year, month, day;
		switch (formatString) {
		case "ymd":
			m = op.match(new RegExp("^(("));
			if (m == null)
				return false;
			day = m[6];
			month = m[5] * 1;
			year = (m[2].length == 4) ? m[2] : GetFullYear(parseInt(m[3], 10));
			break;
		case "dmy":
			m = op.match(new RegExp("^("));
			if (m == null)
				return false;
			day = m[1];
			month = m[3] * 1;
			year = (m[5].length == 4) ? m[5] : GetFullYear(parseInt(m[6], 10));
			break;
		default:
			break;
		}
		if (!parseInt(month))
			return false;
		month = month == 0 ? 12 : month;
		var date = new Date(year, month - 1, day);
		return (typeof (date) == "object" && year == date.getFullYear()
				&& month == (date.getMonth() + 1) && day == date.getDate());
		function GetFullYear(y) {
			return ((y < 30 ? "20" : "19") + y) | 0;
		}
	}
}
