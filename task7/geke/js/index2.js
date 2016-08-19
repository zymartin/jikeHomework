define(function(require, exports, module) {
	var a = {};
	a.swiper = function(id,num){
        	var parent = $('#'+id).children();
        	var width = $('#'+id).width()/num;
        	console.log(width);
        	var children = parent.children();
        	parent.find('a').css('width',width)
        	parent.css('width',width*children.length);
        	$('.arrow-left').on('click',function(){
        		$(this).siblings('div').children().animate({'left':width});
        	});
        	$('.arrow-right').on('click',function(){
        		$(this).siblings('div').children().animate({'left':-width});
        	});
        }
	module.exports = a;
});