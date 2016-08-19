define(function(require, exports, module){
	var a = {};
	a.tabToggle = function(){
		/* tab切换 */
        var lesson_info = $('.lesson_info');
        var lessontab_li = $('.lesson_list ul li');

        lessontab_li.each(function(index){
        	$(this).on('mouseenter',function(){
	        	$(this).find('.lesson_info').addClass('lesson_info_hover');
	        	$(this).find('.lesson_info p').css({
	        		'height':'52',
	        		'opacity':1,
	        		'margin-bottom':10
	        	});
	        	$(this).find('.zhongji,.learn_number').css({
	        		'display':'block'
	        	});
	        })
	        .on('mouseleave',function(){
	        	$(this).find('.lesson_info').removeClass('lesson_info_hover');
	        	$(this).find('.lesson_info p').css({
	        		'height':0,
	        		'opacity':0,
	        		'margin-bottom':0
	        	});
	        	$(this).find('.zhongji,.learn_number').css({
	        		'display':'none'
	        	});
	        });
        });
	}
	module.exports = a;
})
