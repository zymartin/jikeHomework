(function(){
	var array = ['a','x','b','d','m','a','k','m','p','j','a'],
		result = {},  // 存放数据结果
		max_key = '',  //出现次数最多的字母
		max_count = 0;  //次数

	for(var i = 0;i <= array.length;i++){ //遍历
	/* Start 创建对象数组 */
		var val = array[i];
		if (!result[val]) {  //如果数组中没有该对象
			result[val] = [];  //创建该对象的一个数组
		};
    /* End 创建对象数组 */
    	result[val].push(i); // 将当前的位置放于对象数组内

    	if(result[val].length > max_count){ //如果对象数组的长度（个数）大于出现的次数的值

			max_key = array[i];  // 那么出现次数最多的就为该字母
			max_count = result[val].length; //出现次数为该对象数组的长度
		}
	};
	console.log(result);
	document.write('出现次数最多的字母为'+max_key+'<br />');
	document.write('出现次数有'+max_count+'<br />');
	document.write('出现的位置是'+result[max_key]);
})();