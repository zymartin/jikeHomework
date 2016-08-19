// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	require('jquery');

// 通过 require 引入依赖
// var $ = require('jquery');
// var Spinning = require('./spinning');

// 通过 exports 对外提供接口
// exports.doSomething = ...

// 或者通过 module.exports 提供整个接口
// module.exports = ...

	/*多个同时展示的无限轮播*/
	var swiper = require.async('swiper',function(callback){ //异步
		//参数：绑定的id 容器内显示的个数 动画速度 是否自动轮播 自动轮播的时间间隔
		callback.swiper('swiper_animate',1,300,true,2000,true,'#pagination');
		callback.swiper('swiper1',6,300);
		callback.swiper('swiper2',7,300);
		callback.swiper('swiper4',6,300);
		callback.swiper('swiper3',3,500);
	});
	/*带动画的单个图片轮播*/
	// var swiperWithAnimate = require.async('swiperWithAnimate',function(callback){
	// 	callback();
	// });
	
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