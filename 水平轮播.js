
	var currIndex;
	var lis;
	var liwidth;
	var len;
	var id;

	init();
	function init(){
		currIndex = 1;
		var li_1 = document.querySelector('.item:first-of-type');
		var copy_1 = li_1.cloneNode(true);
		var li_last = document.querySelector('.item:last-of-type');
		var copy_last = li_last.cloneNode(true);

		var list = document.querySelector('.list');//获取所有的list
		list.appendChild(copy_1);//将第一个item加到list组后面
		list.insertBefore(copy_last,li_1);//将最后一个item加到list组前面

		lis = document.querySelectorAll('.item');
		liwidth = lis[0].offsetWidth;//获取第一个item的宽度
		len = lis.length;

		list.style.width = liwidth * len + 'px';//将宽度设置为所有图片的宽度和
		list.style.left = -liwidth + 'px';//将第一张图片显示出来

		document.querySelector(".prev").onclick = function(){
			slidePrev();
		}
		document.querySelector(".next").onclick = function(){
			slideNext();
		}

		var bullets = document.querySelectorAll('.bullet');//获取原点
		for(var i = 0;i<bullets.length;i++){
			bullets[i].index = i;
			bullets[i].onclick = function(){
				currIndex = this.index + 1;//因为前面插入了图，所以第一个原点对应第二个图
				slideTo(currIndex);
			}
		}
		document.querySelector('.slider').onmouseover = function(){
			stop();
		}
		document.querySelector('.slider').onmouseout = function(){
			auto();
		}
		auto();
	}
	function slideNext(){
		currIndex++;
		slideTo(currIndex);
	}
	function slidePrev(){
		currIndex--;
		slideTo(currIndex);
	}
	function slideTo(index){
		var list = document.querySelector(".list");
		if(index === len){//滑到最后一个图片时
			currIndex = index = 2;
			list.style.left = -liwidth + 'px';
		}
		if(index === -1){//滑到第一张图片时
			currIndex = index = len - 3;
			list.style.left = -(len - 2) * liwidth + 'px';
		}
		var focusIndex;//获取新的黄焦点
		var bullets = document.querySelectorAll('.bullet');
		if (index === 0){
			focusIndex = bullets.length-1;
		}else if(index === len-1){
			focusIndex = 0;
		}else{
			focusIndex = index - 1;
		}
		document.querySelector('.focus').className = 'bullet';
		bullets[focusIndex].className = 'bullet focus';

		var left = -index * liwidth;
		onimate(list,{
			left:left
		})
	}
	function auto(){
		clearInterval(id);
		id = setInterval(function(){
			slideNext();
		},2000);
	}
	function stop(){
		clearInterval(id);
	}