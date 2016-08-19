define(function(require, exports, module) {
	var a = {};
	var b = {};
	var c = 55;
	a.doSomething = function(){
		console.log('my ok');
	}
	a.doSomething2 = function(){
		console.log('my ok2');
	}
	a.doSomething3 = function(){
		console.log('my ok3');
	}
	a.doSomething4 = function(){
		console.log('my ok4');
	}

	module.exports = {a,b,c};

});