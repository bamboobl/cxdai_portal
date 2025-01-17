
function Dsy() 
{ 
this.Items = {}; 
} 
Dsy.prototype.add = function(id,iArray) 
{ 
this.Items[id] = iArray; 
} 
Dsy.prototype.Exists = function(id) 
{ 
if(typeof(this.Items[id]) == "undefined") return false; 
return true; 
} 

function change(v){ 
var str="0"; 
for(i=0;i<v;i++){ str+=("_"+(document.getElementById(s[i]).selectedIndex-1));}; 
var ss=document.getElementById(s[v]); 
with(ss){ 
length = 0; 
options[0]=new Option(opt0[v],opt0[v]); 
if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v) 
{ 
if(dsy.Exists(str)){ 
ar = dsy.Items[str]; 
for(i=0;i<ar.length;i++)options[length]=new Option(ar[i],ar[i]); 
if(v)options[1].selected = true; 
} 
} 
if(++v<s.length){change(v);} 
} 
} 

var dsy = new Dsy(); 

dsy.add("0",["北京","天津","上海","重庆","辽宁","吉林","黑龙江","河北","山西","陕西","甘肃","青海","山东","安徽","江苏","浙江","河南","湖北","湖南","江西","台湾","福建","云南","海南","四川","贵州","内蒙古","新疆","西藏","宁夏","广东","广西","香港","澳门" ]); 

dsy.add("0_0",["北京"]); 
dsy.add("0_0_0",["北京市","东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云县","延庆县"]); 

dsy.add("0_1",["天津"]);
dsy.add("0_1_0",["和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","北辰区","津南区","武清区","宝坻区","静海县","宁河县","蓟县"]);

dsy.add("0_2",["上海"]);
dsy.add("0_2_0",["黄浦区","卢湾区","徐汇区","徐家汇","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","宝山区","闵行区","嘉定区","浦东新区","松江区","金山区","青浦区","南汇区","奉贤区","崇明县"]);

dsy.add("0_3",["重庆"]);
dsy.add("0_3_0",["渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥区","渝北区","巴南区","万州区","涪陵区","黔江区","长寿区","永川市","合川市","江津市","南川市","綦江县","潼南县","荣昌县","璧山县","大足县","铜梁县","梁平县","城口县","垫江县","武隆县","丰都县","奉节县","开县","云阳县","忠县","巫溪县","巫山县","石柱县","秀山县","酉阳县","彭水县"]);

dsy.add("0_4",["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","葫芦岛","营口","盘锦","阜新","辽阳","铁岭","朝阳"]);
dsy.add("0_4_0",["和平区","沈河区","皇姑区","沈大东区","铁西区","东陵区","于洪区","新城子区","苏家屯区","新民市","辽中县","法库县","康平县"]);
dsy.add("0_4_1",["中山区","西岗区","沙河口区","甘井子区","旅顺口区","金州区","瓦房店市","普兰店市","庄河市","长海县"]);
dsy.add("0_4_2",["铁东","铁西","立山","千山"]);
dsy.add("0_4_3",["新抚区","望花区","东洲区","顺城区","抚顺县","新宾满族自治县","清原满族自治县","抚顺经济开发区","抚顺胜利经济开发区"]);
dsy.add("0_4_4",["平山区","明山区","溪湖区","南芬区"]);
dsy.add("0_4_5",["振兴区","元宝区","振安区","凤城市","东港市","宽甸满族自治县"]);
dsy.add("0_4_6",["古塔区","凌河区","太和区","开发区","松山新区"]);
dsy.add("0_4_7",["连山区","龙港区","南票区"]);
dsy.add("0_4_8",["站前区","西市区","鲅鱼圈区","老边区","大石桥市","盖州市"]);
dsy.add("0_4_9",["双台子区","兴隆台区","盘山县","大洼县"]);
dsy.add("0_4_10",["海州区","新邱区","太平区","清河门区","细河区","彰武县","阜新蒙古族自治县"]);
dsy.add("0_4_11",["文圣区","弓长岭区","宏伟区","太子河区","白塔区","灯塔市","辽阳县"]);
dsy.add("0_4_12",["银州区","清河区","调兵山市","开原市","铁岭县","西丰县","昌图县","铁岭经济开发区","铁岭高新技术产业开发区"]);
dsy.add("0_4_13",["双塔区","龙城区","北票市","凌源市","朝阳县","建平县","喀喇沁左翼蒙古族自治县"]);

dsy.add("0_5",["长春","吉林","四平","辽源","通化","白山","延边州","白城","松原"]);
dsy.add("0_5_0",["朝阳区","南关区","宽城区","二道区","绿园区","双阳区","德惠市","九台市","榆树市","农安县"]);
dsy.add("0_5_1",["船营区","昌邑区","龙潭区","丰满区","舒兰市","桦甸市","蛟河市","磐石市","永吉县(口前镇)"]);
dsy.add("0_5_2",["公主岭市","双辽市","梨树县","伊通满族自治县","铁东区","铁西区","辽河农垦管理区","公主岭国家农业科技园区","四平经济开发区","四平红嘴高新技术开发区","范家屯经济开发区"]);
dsy.add("0_5_3",["龙山区","西安区","东丰县","东辽县"]);
dsy.add("0_5_4",["东昌区","二道江区","梅河口市","集安市","通化县","辉南县","柳河县"]);
dsy.add("0_5_5",["八道江区","江源区","临江市","抚松县","靖宇县","长白朝鲜族自治县"]);
dsy.add("0_5_6",["延吉市","珲春市","和龙市","图门市","龙井市","安图县","汪清县","敦化市"]);
dsy.add("0_5_7",["洮北区","大安市","洮南市","镇赉县","通榆县"]);
dsy.add("0_5_8",["宁江区","扶余县","长岭县","乾安县"]);

dsy.add("0_6",["哈尔滨","齐齐哈尔","鹤岗","双鸭山","鸡西","大庆","伊春","牡丹江","佳木斯","七台河","黑河","绥化","大兴安岭地区"]);
dsy.add("0_6_0",["松北区","道里区","南岗区","道外区","香坊区","平房区","呼兰区","阿城区","双城市","尚志市","五常市","依兰县","方正县","宾县","巴彦县","木兰县","通河县","延寿县"]);
dsy.add("0_6_1",["龙沙区","建华区","铁锋区","富拉尔基区","昂昂溪区","碾子山区","梅里斯达斡尔族区","甘南县","龙江县","克山县","克东县","依安县","拜泉县","泰来县","富裕县","讷河市"]);
dsy.add("0_6_2",["向阳","南山","工农区","兴山区","兴安区","东山区","罗北县","绥滨县"]);
dsy.add("0_6_3",["尖山区"," 宝山区","铁西棚区"]);
dsy.add("0_6_4",["鸡冠区","恒山区","滴道区","梨树区","城子河区","麻山区","虎林市","密山市","鸡东县"]);
dsy.add("0_6_5",["萨尔图区","让胡路区","龙凤区","红岗区","大同区","肇州县","肇源县","林甸县","杜尔伯特蒙古族自治县"]);
dsy.add("0_6_6",["伊春区","南岔区","友好区","西林区","翠峦区","新青区","美溪区","金山屯区","五营区","乌马河区","汤旺河区","带岭区","乌伊岭区","红星区","上甘岭区","铁力市","嘉荫县"]);
dsy.add("0_6_7",["西安区","东安区","阳明区","爱民区","绥芬河市","宁安市","海林市","穆棱市","林口县","东宁县" ]);
dsy.add("0_6_8",["向阳区","前进区","东风区","郊区","桦南县","桦川县","汤原县","抚远县","同江市","富锦市"]);
dsy.add("0_6_9",["新兴区","桃山区","茄子河区","勃利县"]);
dsy.add("0_6_10",["北安市","五大连池市","嫩江县","逊克县","孙吴县","爱辉区"]);
dsy.add("0_6_11",["北林区","望奎县","兰西县","青冈县","庆安县","明水县","绥棱县","安达市","肇东市","海伦市"]);
dsy.add("0_6_12",["呼玛县","塔河县","漠河县","加格达奇区","松岭区","新林区","呼中区"]);

dsy.add("0_7",["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","廊坊","衡水","沧州"]);
dsy.add("0_7_0",["栾城县","藁城县","赞皇县","元氏县","晋州县","平山县","鹿泉县","正定县","行唐县","井陉县","辛集县","新乐县","灵寿县","深泽县","无极县","高邑县","赵县","新华区","长安区","裕华区","桥西区","桥东区"]);
dsy.add("0_7_1",["路北区","路南区","古冶区","开平区","丰润区","丰南区","遵化市","迁安市","滦县","乐亭县","迁西县","玉田县","唐海县","滦南县"]);
dsy.add("0_7_2",["海港区","山海关区","北戴河区","抚宁县","昌黎县","卢龙县","青龙县"]);
dsy.add("0_7_3",["丛台区","邯山区","复兴区","峰峰矿区","武安市","邯郸县","临漳县","成安县","大名县","涉县","磁县","肥乡县","永年县","邱县","鸡泽县","广平县","馆陶县","魏县","曲周县"]);
dsy.add("0_7_4",["桥东区","桥西区","南宫市","沙河市","邢台县","临城县","内丘县","柏乡县","隆尧县","任县","南和县","宁晋县","巨鹿县","新河县","广宗县","平乡县","威县","清河县","临西县"]);
dsy.add("0_7_5",["南市区","北市区","新市区","定州市","安国市","涿州市","高碑店市","清苑县","满城县","徐水县","安新县","容城县","高阳县","蠡县","博野县","雄县","定兴县","易县","涞水县","涞源县","阜平县","顺平县","望都县","唐县","曲阳县"]);
dsy.add("0_7_6",["桥东区","桥西区","宣化区","下花园区","高新区","塞北区","察北区","康保县","沽源县","尚义县","张北县","崇礼县","赤城县","怀安县","万全县","宣化县","阳原县","蔚县","涿鹿县","怀来县"]);
dsy.add("0_7_7",["双桥区","双滦区","鹰手营子矿区","宽城满族自治县","兴隆县","平泉县","滦平县","丰宁满族自治县","隆化县","围场满族蒙古族自治县","承德县"]);
dsy.add("0_7_8",["安次区","广阳区","三河市","霸州市","香河县","永清县","固安县","文安县","大城县","大厂回族自治县"]);
dsy.add("0_7_9",["桃城区","冀州市","深州市","枣强县","武邑县","武强县","饶阳县","安平县","故城县","景县","阜城县"]);
dsy.add("0_7_10",["运河区","新华区","沧县","青县","献县","肃宁县","盐山县","海兴县","南皮县","吴桥县","东光县","孟村回族自治县","泊头市","黄骅市","任丘市","河间市"]);

dsy.add("0_8",["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"]);
dsy.add("0_8_0",["迎泽区","杏花岭区","万柏林区","尖草坪区","晋源区","小店区","古交市","清徐县","阳曲县","娄烦县"]);
dsy.add("0_8_1",["城区","矿区","南郊区","新荣","阳高县","天镇县","广灵县","灵丘县","浑源县","左云县","大同县"]);
dsy.add("0_8_2",["城区","矿区","郊区","平定县","盂县"]);
dsy.add("0_8_3",["长治县","长子县","屯留县","壶关县","黎城县","平顺县","襄垣县","武乡县","沁县","沁源县","城区","郊区","潞城市"]);
dsy.add("0_8_4",["城区","高平市","泽州县","沁水县","阳城县","陵川县"]);
dsy.add("0_8_5",["朔城区","平鲁区","山阴县","应县","右玉县","怀仁县"]);
dsy.add("0_8_6",["榆次区","介休市","榆社县","左权县","和顺县","昔阳县","寿阳县","太谷县","祁县","平遥县","灵石县"]);
dsy.add("0_8_7",["盐湖区","河津市","永济市","稷山县","万荣县","新绛县","闻喜县","临猗县","平陆县","夏县","绛县","垣曲县","芮城县"]);
dsy.add("0_8_8",["忻府区","原平市","定襄县","五台县","代县","繁峙县","宁武县","静乐县","神池县","五寨县","岢岚县","河曲县","保德县","偏关县"]);
dsy.add("0_8_9",["尧都区","侯马市","霍州市","汾西县","吉县","安泽县","大宁县","浮山县","古县","隰县","襄汾县","翼城县","永和县","乡宁县","曲沃县","洪洞县","蒲县"]);
dsy.add("0_8_10",["离石市","汾阳市","孝义市","兴县","岚县","临县","方山县","柳林县","中阳县","交口县","石楼县","交城县","文水县"]);

dsy.add("0_9",["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"]);
dsy.add("0_9_0",["新城区","碑林区","莲湖区","灞桥区","未央区","雁塔区","阎良区","临潼区","长安区","蓝田县","周至县","户县","高陵县"]);
dsy.add("0_9_1",["王益区","印台区","耀州区","宜君县","经济技术开发区"]);
dsy.add("0_9_2",["金台区","渭滨区","陈仓区","凤翔县","岐山县","扶风县","眉县","陇县","千阳县","麟游县","太白县","凤县"]);
dsy.add("0_9_3",["秦都区","渭城区","兴平市","武功县","礼泉县","乾县","泾阳县","三原县","永寿县","彬县","长武县","旬邑县","淳化县"]);
dsy.add("0_9_4",["临渭区","韩城市","华阴市","华县","潼关县","大荔县","蒲城县","澄城县","白水县","合阳县","富平县"]);
dsy.add("0_9_5",["宝塔区","延长县","延川县","子长县","安塞县","志丹县","吴起县","甘泉县","富县","洛川县","宜川县","黄龙县","黄陵县"]);
dsy.add("0_9_6",["汉台区","南郑县","城固县","洋县","西乡县","勉县","宁强县","略阳县","镇巴县","留坝县","佛坪县"]);
dsy.add("0_9_7",["子洲县","绥德县","米脂县","定边县","靖边县","佳县","清涧县","吴堡县","横山县","神木县","俯谷县","榆阳区"]);
dsy.add("0_9_8",["汉滨区","石泉县","紫阳县","旬阳县","汉阴县","白河县","岚皋县","平利县","宁陕县","镇坪县"]);
dsy.add("0_9_9",["商州区","洛南县","山阳县","丹凤县","商南县","镇安县","柞水县"]);

dsy.add("0_10",["兰州","定西","甘南藏族自治州","嘉峪关","金昌","酒泉","白银","临夏回族自治州","陇南","平凉","庆阳","天水","武威","张掖"]); 
dsy.add("0_10_0",["皋兰县","兰州市","永登县","榆中县"]); 
dsy.add("0_10_1",["定西县","临洮县","陇西县","通渭县","渭源县","漳县","岷县"]); 
dsy.add("0_10_2",["迭部县","合作市","临潭县","碌曲县","玛曲县","夏河县","舟曲县","卓尼县"]); 
dsy.add("0_10_3",["嘉峪关市"]); 
dsy.add("0_10_4",["金昌区","永昌县"]); 
dsy.add("0_10_5",["阿克塞哈萨克族自治县","安西县","敦煌市","金塔县","酒泉市","肃北蒙古族自治县","玉门市"]); 
dsy.add("0_10_6",["白银区","平川区","会宁县","景泰县","靖远县"]); 
dsy.add("0_10_7",["东乡族自治县","广河县","和政县","积石山保安族东乡族撒拉族自治县","康乐县","临夏市","临夏县","永靖县"]); 
dsy.add("0_10_8",["成县","徽县","康县","礼县","两当县","文县","武都县","西和县","宕昌县"]); 
dsy.add("0_10_9",["崇信县","华亭县","静宁县","灵台县","平凉市","庄浪县","泾川县"]); 
dsy.add("0_10_10",["合水县","华池县","环县","宁县","庆城县","庆阳市","镇原县","正宁县"]); 
dsy.add("0_10_11",["甘谷县","秦安县","清水县","天水市","武山县","张家川回族自治县"]); 
dsy.add("0_10_12",["古浪县","民勤县","天祝藏族自治县","武威市"]); 
dsy.add("0_10_13",["高台县","临泽县","民乐县","山丹县","肃南裕固族自治县","甘州区"]); 

dsy.add("0_11",["西宁","海东地区","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]);
dsy.add("0_11_0",["城中区","城东区","城西区","城北区","城南新区","海湖新区","湟源县（城关镇）","湟中县（鲁沙尔镇）","大通回族土族自治县"]);
dsy.add("0_11_1",["平安县","乐都县","民和回族土族自治县","互助土族自治县","化隆回族自治县","循化撒拉族自治县"]);
dsy.add("0_11_2",["海晏县","祁连县","刚察县","门源回族自治县"]);
dsy.add("0_11_3",["同仁县","泽库县","尖扎县","河南蒙古族自治县"]);
dsy.add("0_11_4",["共和县","同德县","贵德县","兴海县","贵南县"]);
dsy.add("0_11_5",["玛沁县","班玛县","甘德县","达日县","久治县","玛多县"]);
dsy.add("0_11_6",["玉树县","杂多县","称多县","治多县","囊谦县","曲麻莱县"]);
dsy.add("0_11_7",["德令哈市","格尔木市","乌兰县","天峻县","都兰县"]);

dsy.add("0_12",["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"]);
dsy.add("0_12_0",["历下区","槐荫区","历城区","平阴县","商河县","章丘市","市中区","天桥区","长清区","济阳县"]);
dsy.add("0_12_1",["市南区","四方区","崂山区","城阳区","即墨市","胶南市","莱西市","市北区","黄岛区","李沧区","胶州市","平度市"]);
dsy.add("0_12_2",["淄川区","博山区","周村区","高青县","沂源县","张店区","临淄区","桓台县"]);
dsy.add("0_12_3",["市中区","峄城区","山亭区","滕州市","薛城区","台儿庄区"]);
dsy.add("0_12_4",["东营区","垦利县","广饶县","河口区","利津县"]);
dsy.add("0_12_5",["芝罘区","牟平区","长岛县","莱阳市","蓬莱市","栖霞市","海阳市","福山区","莱山区","龙口市","莱州市","招远市"]);
dsy.add("0_12_6",["潍城区","坊子区","临朐县","青州市","寿光市","高密市","昌邑市","寒亭区","奎文区","昌乐县","诸城市","安丘市"]);
dsy.add("0_12_7",["市中区","微山县","金乡县","汶上县","梁山县","兖州市","邹城市","任城区","鱼台县","嘉祥县","泗水县","曲阜市"]);
dsy.add("0_12_8",["泰山区","宁阳县","新泰市","肥城市","岱岳区","东平县"]);
dsy.add("0_12_9",["环翠区","荣成市","乳山市","文登市"]);
dsy.add("0_12_10",["东港区","五莲县","莒县","岚山区"]);
dsy.add("0_12_11",["莱城区","钢城区"]);
dsy.add("0_12_12",["兰山区","河东区","郯城县","苍山县","平邑县","蒙阴县","临沭县","罗庄区","沂南县","沂水县","费县","莒南县"]);
dsy.add("0_12_13",["德城区","宁津县","临邑县","平原县","武城县","禹城市","陵县","庆云县","齐河县","夏津县","乐陵市"]);
dsy.add("0_12_14",["东昌府区","莘县","东阿县","高唐县","临清市","阳谷县","茌平县","冠县"]);
dsy.add("0_12_15",["滨城区","阳信县","沾化县","邹平县","惠民县","无棣县","博兴县"]);
dsy.add("0_12_16",["牡丹区","单县","巨野县","东明县","曹县","成武县","郓城县","鄄城县","定陶县"]);

dsy.add("0_13",["合肥","蚌埠","巢湖","池州","滁州","阜阳","安庆","淮北","淮南","黄山","六安","马鞍山","宿州","铜陵","芜湖","宣城","亳州"]); 
dsy.add("0_13_0",["庐阳区","瑶海区","蜀山区","包河区","长丰县","肥东县","肥西县"]); 
dsy.add("0_13_1",["龙子湖区","禹会区","怀远县","固镇县","蚌山区","淮上区","五河县"]); 
dsy.add("0_13_2",["居巢区","含山县","和县","庐江县","无为县"]); 
dsy.add("0_13_3",["贵池区","东至县","青阳县","石台县"]); 
dsy.add("0_13_4",["琅琊区","南谯区","定远县","凤阳县","来安县","明光市","全椒县","天长市"]); 
dsy.add("0_13_5",["颍州区","颍东区","颍泉区","阜南县","界首市","临泉县","太和县","颖上县"]); 
dsy.add("0_13_6",["迎江区","大观区","宜秀区","怀宁县","潜山县","宿松县","太湖县","桐城市","望江县","岳西县","枞阳县"]); 
dsy.add("0_13_7",["相山区","杜集区","烈山区","濉溪县"]); 
dsy.add("0_13_8",["凤台县","田家庵区","大通区","谢家集区","八公山区","潘集区"]); 
dsy.add("0_13_9",["屯溪区","黄山区","徽州区","祁门县","休宁县","歙县","黟县"]); 
dsy.add("0_13_10",["金安区","裕安区","霍邱县","霍山县","金寨县","寿县","舒城县"]); 
dsy.add("0_13_11",["当涂县","金家庄区","雨山区","花山区"]); 
dsy.add("0_13_12",["灵璧县","埇桥区","萧县","泗县","砀山县"]); 
dsy.add("0_13_13",["铜官山区","狮子山区","郊区","铜陵县"]); 
dsy.add("0_13_14",["繁昌县","南陵县","芜湖县","镜湖区","弋江区","鸠江区","三山区"]); 
dsy.add("0_13_15",["广德县","绩溪县","郎溪县","宁国市","宣州区","泾县","旌德县"]); 
dsy.add("0_13_16",["利辛县","蒙城县","涡阳县","谯城区"]); 

dsy.add("0_14",["南京","徐州","连云港","淮安","宿迁","盐城","扬州","泰州","南通","镇江","常州","无锡","苏州"]);
dsy.add("0_14_0",["玄武区","秦淮区","鼓楼区","浦口区","雨花台区","六合区","高淳县","白下区","建邺区","下关区","栖霞区","江宁区","溧水县"]);
dsy.add("0_14_1",["鼓楼区","九里区","泉山区","沛县","睢宁县","邳州市","云龙区","贾汪区","丰县","铜山县","新沂市"]);
dsy.add("0_14_2",["连云区","海州区","东海县","灌南县","新浦区","赣榆县","灌云县"]);
dsy.add("0_14_3",["清河区","淮阴区","涟水县","盱眙县","金湖县","楚州区","清浦区","洪泽县"]);
dsy.add("0_14_4",["宿城区","沭阳县","泗洪县","宿豫区","泗阳县"]);
dsy.add("0_14_5",["盐都区","滨海县","射阳县","东台市","大丰市","响水县","阜宁县","建湖县"]);
dsy.add("0_14_6",["广陵区","宝应县","高邮市","江都市","邗江区","仪征市"]);
dsy.add("0_14_7",["海陵区","姜堰市","高港区","兴化市","泰兴市","靖江市"]);
dsy.add("0_14_8",["海门市","崇川区","海安县","启东市","通州市","港闸区","如东县","如皋市"]);
dsy.add("0_14_9",["京口区","丹徒区","扬中市","句容市","润州区","丹阳市"]);
dsy.add("0_14_10",["天宁区","戚墅堰区","溧阳市","金坛市","钟楼区","武进区"]);
dsy.add("0_14_11",["崇安区","北塘区","惠山区","宜兴市","南长区","锡山区","江阴市"]);
dsy.add("0_14_12",["沧浪区","金阊区","吴中区","常熟市","昆山市","太仓市","平江区","虎丘区","相城区","张家港市","吴江市"]);

dsy.add("0_15",["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"]);
dsy.add("0_15_0",["城区","江干区","西湖区","萧山区","桐庐县","建德市","临安市","下城区","拱墅区","滨江区","余杭区","淳安县","富阳市"]);
dsy.add("0_15_1",["海曙区","江北区","镇海区","象山县","余姚市","奉化市","江东区","北仑区","鄞州区","宁海县","慈溪市"]);
dsy.add("0_15_2",["鹿城区","瓯海区","永嘉县","苍南县","泰顺县","乐清市","龙湾区","洞头县","平阳县","文成县","瑞安市"]);
dsy.add("0_15_3",["秀城区","海盐县","桐乡市","平湖市","嘉善县","海宁市"]);
dsy.add("0_15_4",["吴兴区","德清县","安吉县","南浔区","长兴县"]);
dsy.add("0_15_5",["越城区","嵊州市","绍兴县","新昌县","上虞市","诸暨市"]);
dsy.add("0_15_6",["婺城区","武义县","磐安县","义乌市","永康市","金东区","浦江县","兰溪市","东阳市"]);
dsy.add("0_15_7",["柯城区","常山县","龙游县","江山市","衢江区","开化县"]);
dsy.add("0_15_8",["定海区","岱山县","嵊泗县","普陀区"]);
dsy.add("0_15_9",["椒江区","路桥区","三门县","仙居县","临海市","黄岩区","玉环县","天台县","温岭市"]);
dsy.add("0_15_10",["莲都区","缙云县","松阳县","庆元县","龙泉市","青田县","遂昌县","云和县","景宁畲族自治县"]);

dsy.add("0_16",["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"])
dsy.add("0_16_0",["中原区","金水区","二七区","管城回族区","上街区","惠济区","郑东新区","郑州高新区","郑州经济技术开发区","新郑市","新密市","登封市","荥阳市","巩义市","中牟县"]);
dsy.add("0_16_1",["鼓楼区","龙亭区","顺河回族区","禹王台区","金明区","开封县","尉氏县","考县","杞县","通许县"]);
dsy.add("0_16_2",["西工区","老城区","涧西区","瀍河回族区","洛龙区","吉利区","偃师市","孟津县","汝阳县","伊川县","洛宁县","嵩县","宜阳县","新安县","栾川县"]);
dsy.add("0_16_3",["新华区","卫东区","湛河区","石龙区","汝州市","舞钢市","鲁山县","宝丰县","叶县","郏县"]);
dsy.add("0_16_4",["北关区","文峰区","殷都区","龙安区","林州市","安阳县","汤阴县","滑县","内黄县"]);
dsy.add("0_16_5",["淇滨区","山城区","鹤山区","浚县","淇县"]);
dsy.add("0_16_6",["卫滨区","红旗区","凤泉区","牧野区","卫辉市","辉县市","新乡县","获嘉县","原阳县","长垣县","封丘县","延津县"]);
dsy.add("0_16_7",["解放区","中站区","马村区","山阳区","沁阳市","孟州市","修武县","温县","武陟县","博爱县"]);
dsy.add("0_16_8",["华龙区","濮阳县","南乐县","台前县","清丰县","范县"]);
dsy.add("0_16_9",["魏都区","禹州市","长葛市","许昌县","鄢陵县","襄城县"]);
dsy.add("0_16_10",["源汇区","郾城区","召陵区","临颍县","舞阳县"]);
dsy.add("0_16_11",["湖滨区","义马市","灵宝市","渑池县","卢氏县","陕县"]);
dsy.add("0_16_12",["卧龙区","宛城区","桐柏县","方城县","淅川县","镇平县","唐河县","南召县","内乡县","新野县","社旗县","西峡县","邓州市"]);
dsy.add("0_16_13",["梁园区","睢阳区","宁陵县","虞城县","民权县","夏邑县","柘城县","睢县","永城市"]);
dsy.add("0_16_14",["浉河区","平桥区","潢川县","淮滨县","息县","新县","商城县","罗山县","光山县","固始县"]);
dsy.add("0_16_15",["川汇区","商水县","淮阳县","太康县","鹿邑县","西华县","扶沟县","沈丘县","郸城县","项城市"]);
dsy.add("0_16_16",["驿城区","确山县","新蔡县","上蔡县","西平县","泌阳县","平舆县","汝南县","遂平县","正阳县"]);
dsy.add("0_16_17",["济源市"]);

dsy.add("0_17",["武汉","黄石","襄樊","十堰","荆州","宜昌","荆门","鄂州","孝感","黄冈","咸宁","随州","恩施","仙桃市","潜江市","天门市","神农架林区"]);
dsy.add("0_17_0",["江岸区","江汉区","硚口区","汉阳区","武昌区","青山区","洪山区","东西湖","汉南区","蔡甸区","江夏区","黄陂区","新洲区"]);
dsy.add("0_17_1",["黄石港","西塞山","下陆区","铁山区","大冶市","阳新县"]);
dsy.add("0_17_2",["襄城区","樊城区","襄阳区","老河口","枣阳市","宜城市","南漳县","谷城县","保康县"]);
dsy.add("0_17_3",["茅箭区","张湾区","丹江口","郧县","郧西县","竹山县","竹溪县","房县"]);
dsy.add("0_17_4",["沙市区","荆州区","石首市","洪湖市","松滋市","公安县","监利县","江陵县"]);
dsy.add("0_17_5",["西陵区","伍家岗","点军区","猇亭区","夷陵区","宜都市","当阳市","枝江市","远安县","兴山县","秭归县","长阳自治县","五峰自治县"]);
dsy.add("0_17_6",["东宝区","掇刀区","钟祥市","京山县","沙洋县"]);
dsy.add("0_17_7",["鄂城区","梁子湖","华容区"]);
dsy.add("0_17_8",["孝南区","应城市","安陆市","汉川市","孝昌县","大悟县","云梦县"]);
dsy.add("0_17_9",["黄州区","麻城市","武穴市","团风县","红安县","罗田县","英山县","浠水县","蕲春县","黄梅县","龙感湖管理区"]);
dsy.add("0_17_10",["咸安区","赤壁市","嘉鱼县","通城县","崇阳县","通山县"]);
dsy.add("0_17_11",["曾都区","广水市","随县"]);
dsy.add("0_17_12",["恩施市","利川市","建始县","巴东县","宣恩县","咸丰县","来凤县","鹤峰县"]);
dsy.add("0_17_13",["仙桃市"]);
dsy.add("0_17_14",["潜江市"]);
dsy.add("0_17_15",["天门市"]);
dsy.add("0_17_16",["神农架林区"]);

dsy.add("0_18",["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"]);
dsy.add("0_18_0",["岳麓区","芙蓉区","天心区","开福区","雨花区"," 浏阳市","长沙县","望城县","宁乡县"]);
dsy.add("0_18_1",["天元区","荷塘区","芦淞区","石峰区","醴陵市","株洲县","炎陵县","茶陵县","攸县"]);
dsy.add("0_18_2",["岳塘区","雨湖区","湘潭县","湘乡市","韶山市"]);
dsy.add("0_18_3",["雁峰区","珠晖区","石鼓区","蒸湘区","南岳区","耒阳市","常宁市","衡阳县","衡东县","衡山县","衡南县","祁东县"]);
dsy.add("0_18_4",["双清区","大祥区","北塔区","武冈市"," 邵东县","洞口县","新邵县","绥宁县","新宁县","邵阳县","隆回县","城步苗族自治县"]);
dsy.add("0_18_5",["岳阳楼区","君山区","云溪区","临湘市","汨罗市","岳阳县","湘阴县","平江县","华容县"]);
dsy.add("0_18_6",["武陵区","鼎城区","津市市","澧县","临澧县","桃源县","汉寿县","安乡县","石门县"]);
dsy.add("0_18_7",["永定区","武陵源区","慈利县","桑植县"]);
dsy.add("0_18_8",["赫山区","资阳区","沅江市","桃江县","南县","安化县"]);
dsy.add("0_18_9",["北湖区","苏仙区","资兴市","宜章县","汝城县","安仁县","嘉禾县","临武县","桂东县","永兴县","桂阳县"]);
dsy.add("0_18_10",["冷水滩区","零陵区","祁阳县","蓝山县","宁远县","新田县","东安县","江永县","道县","双牌县","江华瑶族自治县"]);
dsy.add("0_18_11",["鹤城区","洪江市","会同县","沅陵县","辰溪县","溆浦县","中方县","新晃侗族自治县","芷江侗族自治县","通道侗族自治县","靖州苗族侗族自治县","麻阳苗族自治县"]);
dsy.add("0_18_12",["娄星区","冷水江市","涟源市","新化县","双峰县"]);
dsy.add("0_18_13",["吉首市","古丈县","龙山县","永顺县","凤凰县","泸溪县","保靖县","花垣县"]);

dsy.add("0_19",["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"]);
dsy.add("0_19_0",["东湖区","西湖区","青云谱区","湾里区","青山湖区","南昌县","新建县","进贤县","安义县"]);
dsy.add("0_19_1",["昌江区","珠山区","乐平市","浮梁县"]);
dsy.add("0_19_2",["安源区","湘东区","上栗县","芦溪县","莲花县"]);
dsy.add("0_19_3",["浔阳区","庐山区","九江县","武宁县","修水县","永修县","德安县","星子县","都昌县","湖口县","彭泽县","瑞昌市"]);
dsy.add("0_19_4",["渝水区","分宜县"]);
dsy.add("0_19_5",["月湖区","余江县","贵溪市"]);
dsy.add("0_19_6",["章贡区","黄金区","赣县","信丰县","大余县","上犹县","崇义县","安远县","龙南县","定南县","全南县","兴国县","宁都县","于都县","会昌县","寻乌县","石城县","南康市","瑞金市"]);
dsy.add("0_19_7",["吉州区","青原区","吉安县","新干县","永丰县","峡江县","吉水县","泰和县","万安县","遂川县","安福县","永新县","井冈山市"]);
dsy.add("0_19_8",["袁州区","靖安县","奉新县","宜丰县","上高县","铜鼓县","万载县","丰城市","樟树市","高安市"]);
dsy.add("0_19_9",["临川区","东乡县","金溪县","资溪县","南城县","南丰县","黎川县","广昌县","崇仁县","乐安县","宜黄县"]);
dsy.add("0_19_10",["信州区","上饶县","广丰县","玉山县","婺源县","鄱阳县","余干县","万年县","弋阳县","横峰县","铅山县","德兴市"]);

dsy.add("0_20",["台北","高雄","基隆","台中","台南","新竹","嘉义"]);
dsy.add("0_20_0",["中正区","万华区","大同区","中山区","松山区","大安区","信义区","内湖区","南港区","士林区","北投区","文山区"]);
dsy.add("0_20_1",["盐埕区","鼓山区","左营区","楠梓区","三民区","新兴区","前金区","苓雅区","前镇区","旗津区","小港区"]);
dsy.add("0_20_2",["仁爱","信义","中正","中山","安乐","暖暖","七堵"]);
dsy.add("0_20_3",["西区","北区","中区","东区","南区","南屯区","西屯区","北屯区"]);
dsy.add("0_20_4",["安平区","安南区","东区","南区","北区","中西区"]);
dsy.add("0_20_5",["东区","北区","香山区"]);
dsy.add("0_20_6",["东门","西门","南门","北门","八奖","竹园","北镇","东山"]);

dsy.add("0_21",["福州","龙岩","南平","宁德","莆田","泉州","三明","厦门","漳州"]); 
dsy.add("0_21_0",["长乐市","福清市","福州市","连江县","罗源县","闽侯县","闽清县","平潭县","永泰县"]); 
dsy.add("0_21_1",["长汀县","连城县","龙岩市","上杭县","武平县","永定县","漳平市"]); 
dsy.add("0_21_2",["光泽县","建阳市","建瓯市","南平市","浦城县","邵武市","顺昌县","松溪县","武夷山市","政和县"]); 
dsy.add("0_21_3",["福安市","福鼎市","古田县","宁德市","屏南县","寿宁县","霞浦县","周宁县","柘荣县"]); 
dsy.add("0_21_4",["莆田市","仙游县"]); 
dsy.add("0_21_5",["安溪县","德化县","惠安县","金门县","晋江市","南安市","泉州市","石狮市","永春县"]); 
dsy.add("0_21_6",["大田县","建宁县","将乐县","明溪县","宁化县","清流县","三明市","沙县","泰宁县","永安市","尤溪县"]); 
dsy.add("0_21_7",["厦门市"]); 
dsy.add("0_21_8",["长泰县","东山县","华安县","龙海市","南靖县","平和县","云霄县","漳浦县","漳州市","诏安县"]); 

dsy.add("0_22",["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","文山","红河","西双版纳","楚雄","大理","德宏","怒江","迪庆"]);
dsy.add("0_22_0",["盘龙区","五华区","官渡区","西山区","东川区","安宁市","呈贡县","晋宁县","富民县","宜良县","嵩明县","石林县","禄劝彝县","寻甸回县"]);
dsy.add("0_22_1",["麒麟区","宣威市","马龙县","沾益县","富源县","罗平县","师宗县","陆良县","会泽县"]);
dsy.add("0_22_2",["红塔区","江川县","澄江县","通海县","华宁县","易门县","峨山县","新平县","元江县"]);
dsy.add("0_22_3",["隆阳区","施甸县","腾冲县","龙陵县","昌宁县"]);
dsy.add("0_22_4",["昭阳区","鲁甸县","巧家县","盐津县","大关县","永善县","绥江县","镇雄县","彝良县","威信县","水富县"]);
dsy.add("0_22_5",["古城区","永胜县","华坪县","玉龙县","宁蒗县"]);
dsy.add("0_22_6",["思茅区","宁洱县","墨江县","景东县","景谷县","镇沅县","江城县","孟连县","澜沧县","西盟县"]);
dsy.add("0_22_7",["临翔区","凤庆县","云县","永德县","镇康县","双江县","耿马县","沧源县"]);
dsy.add("0_22_8",["文山县","砚山县","西畴县","麻栗坡县","马关县","丘北县","广南县","富宁县"]);
dsy.add("0_22_9",["蒙自县","个旧市","开远市","绿春县","建水县","石屏县","弥勒县","泸西县","元阳县","红河县","金平县","河口县","屏边县"]);
dsy.add("0_22_10",["景洪市","勐海县","勐腊县"]);
dsy.add("0_22_11",["楚雄市","双柏县","牟定县","南华县","姚安县","大姚县","永仁县","元谋县","武定县","禄丰县"]);
dsy.add("0_22_12",["大理市","祥云县","宾川县","弥渡县","永平县","云龙县","洱源县","剑川县","鹤庆县","漾濞县","南涧县","巍山县"]);
dsy.add("0_22_13",["潞西市","瑞丽市","梁河县","盈江县","陇川县"]);
dsy.add("0_22_14",["泸水县","福贡县","贡山县","兰坪县"]);
dsy.add("0_22_15",["香格里拉县","德钦县","维西县"]);

dsy.add("0_23",["海口","三亚"]);
dsy.add("0_23_0",["琼山区","龙华区","秀英区","美兰区"]);
dsy.add("0_23_1",["河西区","河东区"]);

dsy.add("0_24",["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","宜宾","广安","达州","眉山","雅安","巴中","资阳","阿坝","甘孜","凉山"]);
dsy.add("0_24_0",["成华区","武侯区","青羊区","锦江区","金牛区","高新区","龙泉驿区","青白江区","新都区","双流县","郫县","温江区","大邑县","金堂县","蒲江县","新津县","都江堰市","彭州市","崇州市","邛崃市"]);
dsy.add("0_24_1",["自流井区","贡井区","大安区","沿滩区","荣县","富顺县"]);
dsy.add("0_24_2",["东区","西区","仁和区","米易县","盐边县"]);
dsy.add("0_24_3",["江阳区","纳溪区","龙马潭区","泸县","合江县","叙永县","古蔺县"]);
dsy.add("0_24_4",["旌阳区","中江县","罗江县","广汉市","绵竹市","什邡市"]);
dsy.add("0_24_5",["涪城区","游仙区","经开区","高新区","科创园区","仙海区","江油市","三台县","安县","平武县","梓潼县","盐亭县","北川县"]);
dsy.add("0_24_6",["利州区","元坝区","朝天区","旺苍县","青川县","剑阁县","苍溪县"]);
dsy.add("0_24_7",["船山区","安居区","蓬溪县","大英县","射洪县"]);
dsy.add("0_24_8",["市中区","东兴区","资中县","隆昌县","威远县"]);
dsy.add("0_24_9",["市中区","五通桥","沙湾","金口河","犍为县","井研县","夹江县","沐川县","峨边县","马边县","峨眉山市"]);
dsy.add("0_24_10",["顺庆区","高坪区","嘉陵区","南部县","仪陇县","西充县","蓬安县","营山县","阆中市"]);
dsy.add("0_24_11",["翠屏区","宜宾县","南溪县","江安县","长宁县","高县","珙县","筠连县","兴文县","屏山县"]);
dsy.add("0_24_12",["广安区","岳池县","武胜县","邻水县","华蓥市"]);
dsy.add("0_24_13",["通川区","达县","宣汉县","开江县","大竹县","渠县","万源市"]);
dsy.add("0_24_14",["东坡区","仁寿县","彭山县","洪雅县","丹棱县","青神县"]);
dsy.add("0_24_15",["雨城区","芦山县","名山县","天全县","荥经县","宝兴县","汉源县","石棉县"]);
dsy.add("0_24_16",["巴州区","通江县","南江县","平昌县"]);
dsy.add("0_24_17",["雁江区","安岳县","乐至县","简阳市"]);
dsy.add("0_24_18",["汶川县","理县","茂县","松潘县","金川县","黑水县","马尔康县","壤塘县","阿坝县","若尔盖县","红原县","九寨沟县","小金县"]);
dsy.add("0_24_19",["康定县","丹巴县","炉霍县","九龙县","甘孜县","雅江县","新龙县","道孚县","白玉县","理塘县","德格县","乡城县","石渠县","稻城县","色达县","巴塘县","泸定县","得荣县"]);
dsy.add("0_24_20",["西昌市","木里县","盐源县","德昌县","会理县","会东县","宁南县","普格县","布拖县","金阳县","昭觉县","喜德县","冕宁县","越西县","甘洛县","美姑县","雷波县"]);

dsy.add("0_25",["贵阳","六盘水","遵义","安顺","铜仁","毕节","黔西南","黔东南","黔南"]);
dsy.add("0_25_0",["清镇市","南明区","云岩区","小河区","花溪区","乌当区","白云区","修文县","开阳县"]);
dsy.add("0_25_1",["钟山区","六枝特区","盘县","水城县"]);
dsy.add("0_25_2",["赤水市","仁怀市","红花岗区","汇川区","正安县","桐梓县","遵义县","凤冈县","余庆县","湄潭县","绥阳县","习水县","道真县","务川县"]);
dsy.add("0_25_3",["西秀区","普定县","平坝县","关岭县","镇宁县","紫云县"]);
dsy.add("0_25_4",["沿河县","印江县","德江县","思南县","江口县","石阡县","松桃县","玉屏县","万山特区","铜仁市"]);
dsy.add("0_25_5",["毕节市","大方县","黔西县","金沙县","织金县","纳雍县","赫章县","威宁县"]);
dsy.add("0_25_6",["兴义市","普安县","晴隆县","贞丰县","册亨县","望谟县","安龙县","兴仁县"]);
dsy.add("0_25_7",["凯里市","雷山县","黎平县","施秉县","麻江县","锦屏县","台江县","剑河县","三穗县","黄平县","从江县","镇远县","天柱县","榕江县","岑巩县","丹寨县"]);
dsy.add("0_25_8",["都匀市","福泉市","瓮安县","贵定县","惠水县","长顺县","独山县","荔波县","平塘县","罗甸县","龙里县","三都县"]);

dsy.add("0_26",["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","兴安","锡林郭勒","阿拉善"]);
dsy.add("0_26_0",["回民区","新城区","玉泉区","赛罕区","土默特左旗","托克托县","和林格尔县","武川县","清水河县"]);
dsy.add("0_26_1",["昆都仑区","东河区","青山区","石拐区","白云矿区","九原区","土默特右旗","固阳县","达尔罕茂明安"]);
dsy.add("0_26_2",["海勃湾区","海南区","乌达区"]);
dsy.add("0_26_3",["新城区","红山区","元宝山区","松山区","阿鲁科尔沁旗","巴林左旗","巴林右旗","林西县","克什克腾旗","翁牛特旗","喀喇沁旗","宁城县","敖汉旗"]);
dsy.add("0_26_4",["科尔沁区","霍林郭勒市","科尔沁左翼中旗","科尔沁左翼后旗","开鲁县","库伦旗","奈曼旗","扎鲁特旗"]);
dsy.add("0_26_5",["东胜区","达拉特旗","准格尔旗","鄂托克前旗","鄂托克旗","杭锦旗","乌审旗","伊金霍洛旗"]);
dsy.add("0_26_6",["海拉尔区","满洲里市","牙克石市","扎兰屯市","额尔古纳市","根河市","阿荣旗","鄂伦春自治旗","莫力达瓦旗"," 鄂温克族自治旗","陈巴尔虎旗","新巴尔虎左旗"," 新巴尔虎右旗"]);
dsy.add("0_26_7",["临河区","五原县","磴口县","乌拉特前旗","乌拉特中旗","乌拉特后旗","杭锦后旗"]);
dsy.add("0_26_8",["集宁区","丰镇市","卓资县","化德县","商都县","兴和县","凉城县","察哈尔右翼前旗","察哈尔右翼中旗","察哈尔右翼后旗","四子王旗"]);
dsy.add("0_26_9",["乌兰浩特市","阿尔山市","科尔沁右翼前旗","科尔沁右翼中旗","扎赉特旗","突泉县"]);
dsy.add("0_26_10",["锡林浩特市","二连浩特市","阿巴嘎旗","苏尼特左旗","苏尼特右旗","东乌珠穆沁旗","西乌珠穆沁旗","太仆寺旗","镶黄旗","正镶白旗","正蓝旗","多伦"]);
dsy.add("0_26_11",["阿拉善左旗","阿拉善右旗","额济纳旗"]);

dsy.add("0_27",["乌鲁木齐","克拉玛依","吐鲁番","哈密","和田","阿克苏","喀什","克孜勒苏柯尔克孜","巴音郭楞蒙古","昌吉","博尔塔拉蒙古","伊犁哈萨克","塔城","阿勒泰"]);
dsy.add("0_27_0",["天山区","沙依巴克区","新市区","水磨沟区","头屯河区","达坂城区","米东区","乌鲁木齐县"]);
dsy.add("0_27_1",["克拉玛依区","独山子区","白碱滩区","乌尔禾区"]);
dsy.add("0_27_2",["吐鲁番市"]);
dsy.add("0_27_3",["哈密市"]);
dsy.add("0_27_4",["和田市"]);
dsy.add("0_27_5",["阿克苏市"]);
dsy.add("0_27_6",["喀什市","疏附县","疏勒县","英吉沙县","泽普县","莎车县","叶城县","麦盖提县","岳普湖县","伽师县","巴楚县"]);
dsy.add("0_27_7",["阿图什市","阿克陶县","阿合奇县","乌恰县"]);
dsy.add("0_27_8",["库尔勒市","轮台县","尉犁县","若羌县","且末县","和静县","和硕县","博湖县","焉耆县"]);
dsy.add("0_27_9",["昌吉市"]);
dsy.add("0_27_10",["博乐市","精河县","温泉县"]);
dsy.add("0_27_11",["塔城地区","阿勒泰地区","伊宁市","奎屯市","伊宁县","察布查尔锡伯县","霍城县","巩留县","新源县","昭苏县","特克斯县","尼勒克县"]);
dsy.add("0_27_12",["塔城市"]);
dsy.add("0_27_13",["阿勒泰市"]);

dsy.add("0_28",["拉萨","昌都","山南","日喀则","那曲","阿里","林芝"]);
dsy.add("0_28_0",["城关区","林周县","达孜县","堆龙德庆县","尼木县","当雄县","曲水县","墨竹工卡县"]);
dsy.add("0_28_1",["昌都县","左贡县","芒康县","洛隆县","边坝县","江达县","贡觉县","类乌齐县","丁青县","察雅县","八宿县"]);
dsy.add("0_28_2",["乃东县","扎囊县","贡嘎县","桑日县","琼结县","洛扎县","加查县","隆子县","曲松县","措美县","错那县","浪卡子县"]);
dsy.add("0_28_3",["日喀则市","南木林县","江孜县","定日县","萨迦县","拉孜县","昂仁县","谢通门县","白朗县","仁布县","康马县","定结县","仲巴县","亚东县","吉隆县","聂拉木县","萨嘎县","岗巴县"]);
dsy.add("0_28_4",["那曲县","申扎县","班戈县","聂荣县","安多县","嘉黎县","巴青县","比如县","索县","尼玛县"]);
dsy.add("0_28_5",["普兰县","札达县","噶尔县","日土县","革吉县","改则县","措勤县"]);
dsy.add("0_28_6",["林芝县","米林县","朗县","工布江达县","波密县","察隅县","墨脱县"]);

dsy.add("0_29",["银川","石嘴山","吴忠","固原","中卫"]);
dsy.add("0_29_0",["兴庆区","金凤区","西夏区","灵武市","永宁县","贺兰县"]);
dsy.add("0_29_1",["大武口区","惠农区","平罗县"]);
dsy.add("0_29_2",["利通区","青铜峡市","同心县","盐池县","红寺堡开发区","太阳山开发区"]);
dsy.add("0_29_3",["原州区","西吉县","隆德县","泾源县","彭阳县"]);
dsy.add("0_29_4",["沙坡头区","中宁县","海原县"]);

dsy.add("0_30",["广州","深圳","珠海","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"]);
dsy.add("0_30_0",["东山区","越秀区","天河区","白云区","番禺区","增城市","从化市","荔湾区","海珠区","芳村区","黄埔区","花都区"]);
dsy.add("0_30_1",["罗湖区","福田区","南山区","宝安区","龙岗区","盐田区"]);
dsy.add("0_30_2",["香洲区","拱北区","前山区","金湾区","斗门区"]);
dsy.add("0_30_3",["龙湖区","濠江区","潮南区","澄海区","金平区","潮阳区","南澳县"]);
dsy.add("0_30_4",["武江区","曲江区","仁化县","乳源县","乐昌市","南雄市","浈江区","始兴县","翁源县","新丰县"]);
dsy.add("0_30_5",["禅城区","顺德区","高明区","南海区","三水区"]);
dsy.add("0_30_6",["蓬江区","恩平市","江海区","新会区","开平市","台山市","鹤山市"]);
dsy.add("0_30_7",["赤坎区","霞山区","坡头区","麻章区","廉江市","雷州市","吴川市","遂溪县","徐闻县"]);
dsy.add("0_30_8",["茂南区","茂港区","高州市","化州市","信宜市","电白县"]);
dsy.add("0_30_9",["端州区","鼎湖区","高要市","四会市","广宁县","怀集县","封开县","德庆县"]);
dsy.add("0_30_10",["惠城区","惠阳区","博罗县","惠东县","龙门县"]);
dsy.add("0_30_11",["梅江区","兴宁市","梅县","大埔县","丰顺县","五华县","平远县","蕉岭县"]);
dsy.add("0_30_12",["城区","陆丰市","海丰县","陆河县"]);
dsy.add("0_30_13",["源城区","紫金县","龙川县","连平县","和平县","东源县"]);
dsy.add("0_30_14",["江城区","阳春市","阳西县","阳东县"]);
dsy.add("0_30_15",["清城区","英德市","连州市","佛冈县","阳山县","清新县","连山县","连南县","飞来峡区"]);
dsy.add("0_30_16",["莞城区","东城区","南城区","万江区","虎门镇","长安镇","茶山镇","厚街镇","沙田镇","道滘镇","中堂镇","望牛墩镇","大朗镇","黄江镇","麻涌镇","高埗镇","石碣镇","石龙镇","企石镇","石排镇","常平镇","洪梅镇","凤岗镇","谢岗镇","横沥镇","寮步镇","桥头镇","东坑镇","清溪镇"," 塘厦镇","大岭山镇","樟木头镇"]);
dsy.add("0_30_17",["石岐区","东区","西区","南区","五桂山区","小榄镇","古镇镇","横栏镇","东升镇","港口镇","沙溪镇","大涌镇","黄圃镇","南头镇","东凤镇","阜沙镇","三角镇","民众镇","南朗镇","三乡镇","坦洲镇","板芙镇","神湾镇"]);
dsy.add("0_30_18",["湘桥区","潮安县","饶平县"]);
dsy.add("0_30_19",["榕城区","普宁市","惠来县","揭东县","揭西县"]);
dsy.add("0_30_20",["云城区","罗定市","新兴县","郁南县","云安县"]);

dsy.add("0_31",["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"]);
dsy.add("0_31_0",["青秀区","兴宁区","西乡塘区","江南区","良庆区","邕宁区","武鸣县","隆安县","马山县","上林县","宾阳县","横县"]);
dsy.add("0_31_1",["城中区","鱼峰区","柳北区","柳南区","柳江县","柳城县","鹿寨县","融安县","融水县","三江县"]);
dsy.add("0_31_2",["象山区","秀峰区","叠彩区","七星区","雁山区","阳朔县","临桂县","灵川县","全州县","平乐县","兴安县","灌阳县","荔浦县","资源县","永福县","龙胜县","恭城县"]);
dsy.add("0_31_3",["万秀区","蝶山区","长洲区","岑溪市","苍梧县","藤县","蒙山县"]);
dsy.add("0_31_4",["海城区","银海区","铁山港区","合浦县"]);
dsy.add("0_31_5",["港口区","防城区","东兴市","上思县"]);
dsy.add("0_31_6",["钦南区","钦北区","灵山县","浦北县"]);
dsy.add("0_31_7",["港北区","港南区","覃塘区","桂平市","平南县"]);
dsy.add("0_31_8",["玉州区","北流市","容县","陆川县","博白县","兴业县"]);
dsy.add("0_31_9",["右江区","凌云县","平果县","西林县","乐业县","德保县","田林县","田阳县","靖西县","田东县","那坡县","隆林县"]);
dsy.add("0_31_10",["八步区","钟山县","昭平县","富川县"]);
dsy.add("0_31_11",["金城江区","宜州市","天峨县","凤山县","南丹县","东兰县","都安县","罗城县","巴马","马镇","环江县","大化县"]);
dsy.add("0_31_12",["兴宾区","合山市","象州县","武宣县","忻城县","金秀县"]);
dsy.add("0_31_13",["江州区","凭祥市","宁明县","扶绥县","龙州县","大新县","天等县"]);

dsy.add("0_32",["九龙","新界","香港岛"]);
dsy.add("0_32_0",["九龙城","油尖旺","深水步","黄大仙","观塘"]);
dsy.add("0_32_1",["大埔","屯门","元朗","北区","西贡","沙田","荃湾","葵青","离岛"]);
dsy.add("0_32_2",["中西区","东区","南区","湾仔"]);

dsy.add("0_33",["半岛","离岛"]);
dsy.add("0_33_0",["花地玛堂区","圣安多尼堂区","大堂区","望德堂区","风顺堂区"]);
dsy.add("0_33_1",["嘉模堂区","圣方济各堂区"]);
 
var s=["province","city","district"]; 
var opt0 = ["","",""]; 
function populateLocations() 
{ 
for(i=0;i<s.length-1;i++) 
document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")"); 
change(0); 
} 