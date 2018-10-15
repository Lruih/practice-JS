function $(id){
 	return document.getElementById(id);
}
window.onload = function(){
	var count = 0;
	var timer = null;
	$("start").onclick = function(){
		timer = setInterval(function(){
			count++;
			$("id_S").innerHTML = showNum(count % 60);
			$("id_M").innerHTML = showNum(parseInt(count / 60) % 60);
			$("id_H").innerHTML = showNum(parse(count / 3600));
		},1000);
	}
	$("parse").onclick = function(){
	//取消定时器
	clearInterval(timer);
    }
    $("stop").onclick = function(){
    	//取消定时器
	clearInterval(timer);
		//数据清零，总秒数清零
		count = 0;
		//画面清零
		$("id_S").innerHTML = "00";
		$("id_M").innerHTML = "00";
		$("id_H").innerHTML = "00";
    }
}

//处理单个数字
function showNum(num){
	if (num < 10) {
		return "0" + num;
	}else{
		return num;
	}

}
