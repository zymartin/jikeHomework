// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	require('jquery');

	/*多个同时展示的无限轮播*/
	var swiper = require.async('swiper',function(callback){ //异步
		//参数：绑定的id 容器内显示的个数 动画速度 是否自动轮播 自动轮播的时间间隔
		callback.swiper('swiper_animate',1,300,true,2000,true,'#pagination');
		callback.swiper('swiper1',6,300);
		callback.swiper('swiper2',7,300);
		callback.swiper('swiper4',6,300);
		callback.swiper('swiper3',3,500);
	});

	/*hover效果*/
	var aside_hover = require.async('aside_hover',function(callback){
			callback.aside_hover();
	});
	var hover = require.async('hover',function(callback){
			callback.hover();
	});
	/*子tab下拉效果*/
	var tabtoggle = require.async('tabtoggle',function(callback){
			callback.tabToggle();
	})
});