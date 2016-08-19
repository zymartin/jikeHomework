waterFall();
	window.onscroll = function(){
		console.log(2);
		var dataImg = {
			'data':[{src:'card1.png'},{src:'computer.jpg'},{src:'imglogo-r.png'},{src:'lazy_img.png'}]
		};
		if(scrollSide()){
			$.each(dataImg.data,function(index,value){
				var box = $('<div>').addClass('box').appendTo($('#waterFallContainer'));
				var content = $('<div>').addClass('img_box').appendTo(box);
				console.log($(value).attr('src'));
				$('<img>').attr('src','img/'+$(value).attr('src')).appendTo(content);
			});
			waterFall();
			
		};
	}

	
	function waterFall(){
		var box = $('.box');
		//单个box的宽度;
		var singleW = box[0].offsetWidth;
		//一行显示多少个
		var num = Math.floor($(window).width()/singleW);
		$('#waterFallContainer').css('width',num*singleW);

		var boxHeightArr = [];
		box.each(function(index,value){
			var boxHeight = box.eq(index).outerHeight();
			if (index < num) {
				boxHeightArr[index] = boxHeight;
				// console.log(boxHeight);
			}else{
				var minBoxHeight = Math.min.apply(null,boxHeightArr);
				// console.log(minBoxHeight);
				var minBoxIndex = $.inArray(minBoxHeight,boxHeightArr);
				// console.log(minBoxIndex);
				$(value).css({
					position:'absolute',
					top:minBoxHeight,
					left:box.eq(minBoxIndex).position().left
				});
				boxHeightArr[minBoxIndex] += box.eq(index).outerHeight(); 
				// console.log(boxHeightArr);
			}
		})

		// console.log(num);
		// console.log(singleW);
		// console.log(num*singleW);
	}

	function scrollSide(){
		var box = $('.box');
		var lastBoxHeight = box.last().get(0).offsetTop+Math.floor(box.last().outerHeight()/2);
		//当前容器的高度
		var documentHight = $(window).height();
		var scrollHeight = $(window).scrollTop();
		console.log(documentHight);
		console.log(scrollHeight);
		return (lastBoxHeight<=(scrollHeight+documentHight))?true:false;
	}