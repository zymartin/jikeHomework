define(function(require, exports, module) {
	var a = {};
	var b = {};

	var main = require('main');
	console.log(main);
	var model_index = require('index');
	console.log(model_index);
	console.log('from common : ' + model_index.c);

	model_index.a.doSomething();
	a.common = function(){
		
		console.log($('.dsada'));
		// console.log('from common'+xx);
	}
	
	module.exports = {a,b};
	//exports.a = a;

});