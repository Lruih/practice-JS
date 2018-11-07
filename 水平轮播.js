
	var currIndex;
	var lis;
	var liwidth;
	var len;
	init();
	function init(){
		var currIndex = 1;
		var li_1 = document.querySelector('.item:first-of-type');
		var copy_1 = li_1.cloneNode(true);
		var li_last = document.querySelector('.item:last-of-type');
		var copy_last = li_last.cloneNode(true);

		var list = document.querySelector('.list');
		list.appendChild(copy_1);
		list.insertBefore(copy_last,li_1);

		lis = document.querySelectorAll('.item');
		liwidth = lis[0].offsetWidth;
		len = lis.length;

		list.style.width = liwidth * len + 'px';

		document.querySelector(".prev").onclick = function(){
			slideNext();
		}
		document.querySelector(".next").onclick = function(){
			slidePrev()
		}
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
		if(index === len){
			currIndex = index = 2;
			list.style.left = -liwidth + 'px';
		}
		if(index === -1){
			currIndex = index = len - 3;
			list.style.left = -(len - 2) * liwidth + 'px';
		}

		var left = -index * liwidth;
		onimate(list,{
			left:left
		});
	}
	function auto(){}
	function stop(){}