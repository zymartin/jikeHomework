define(function(require, exports, module) {
	var a = {};
	a.aside_hover = function(){
        	var lesson_list = $('#lesson_list_ul li');
			var lesson_list_detail = $('.lesson_list_detail');

			lesson_list.on('mouseover',function(e){
				$(this).addClass('lesson_list_over');
				$(this).find('.lesson_list_detail').show();
			});
			lesson_list.on('mouseout',function(e){
				$(this).removeClass('lesson_list_over');
				lesson_list_detail.hide();
			});
        }
	module.exports = a;
});