
	var prevIndex,nextIndex;
	var len;
	var id;
	into();
	function into(){
		prevIndex = nextIndex = 0;
		len = document.querySelectorAll('.list .item').length;

		document.querySelector('.prev').onclick = function(){
			 slidePrev();
		}
		document.querySelector('.next').onclick = function(){
			 slideNext();
		}
		var bullets = document.querySelectorAll('.bullet');
		for(var i = 0;i < bullets.length;i++){
			bullets[i].index = i;
			bullets[i].onclick = function(){
				prevIndex = nextIndex;
				nextIndex = this.index;
				slideTo(prevIndex,nextIndex);
			}
		}
		var slider = document.querySelector('.slider');
		slider.onmouseover = function(){
			stop();
		}
		slider.onmouseout = function(){
			auto();
		}
		auto();

	}
	function slidePrev(){
		prevIndex = nextIndex;
		nextIndex--;
		if(nextIndex === -1){
			nextIndex = len-1;
		}
		slideTo(prevIndex,nextIndex);
	}
	function slideNext(){
		prevIndex = nextIndex;
		nextIndex++;
		if(nextIndex === len){
			nextIndex = 0;
		}
		
		slideTo(prevIndex,nextIndex);
	}
	function slideTo(prev,next){
		var lis = document.querySelectorAll('.list .item');
		
		var bullets = document.querySelectorAll('.bullet');
		bullets[prev].className = 'bullet';
		bullets[next].className = 'bullet focus';

		onimate(lis[prev],{opacity: 0});
		onimate(lis[next],{opacity: 100});

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
