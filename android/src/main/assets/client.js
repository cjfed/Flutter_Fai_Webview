function showImagePreview(url) {
	var idx = 0;
	for(var i=0;i<imgsrcArr.length;i++){
		if(imgsrcArr[i]==url){
			idx= i;
			break;
		}
	}

	var jsonData = "{\"url\":\""+ url +"\",\"index\":"+idx+",\"urls\":\""+imgsrcArr+"\"}";
	controll.showImagePreview(jsonData);
}

function clickEachItem(index) {
	controll.clickEachItem(index);
}

 var imgsrcArr = [];
/**
 * JS获取html代码中所有的图片地址
 * @param htmlstr
 * @returns imgsrcArr 数组
 */
function getAllImgSrc(htmlstr) {
    var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;

    while (tem = reg.exec(htmlstr)) {
        imgsrcArr.push(tem[2]);
    }
    return imgsrcArr;
}

// 公式插件配置
MathJax.Hub.Config({
    showProcessingMessages: false, //关闭js加载过程信息
    messageStyle: "none", //不显示信息
    "HTML-CSS": {
        showMathMenu: false //关闭右击菜单显示
    }
});

function typeset () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
