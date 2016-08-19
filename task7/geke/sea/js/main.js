// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	require('jquery');
	console.log(111);
	var xx = 'x5';

	/*var index = require('index');//同步
	console.log(index);*/

	var index = require.async('index',function(index_callback){ //异步
		console.log(index_callback);
		index_callback.a.doSomething();
	});

  // 通过 require 引入依赖
  // var $ = require('jquery');
  // var Spinning = require('./spinning');

  // 通过 exports 对外提供接口
  // exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  // module.exports = ...

  	var common = require.async('common',function(index_callback){ //异步
		console.log(index_callback);
		index_callback.a.common();
		console.log(xx);
	});


	module.exports = xx;

});