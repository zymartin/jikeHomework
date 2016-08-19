var btn = document.getElementById('btn');
btn.onclick = function(){
	var num_1 = document.getElementById('num_1').value,
		num_2 = document.getElementById('num_2').value,
		type = document.getElementById('type').value,
		result = document.getElementById('total'),
		num;
	/*1. 判断数据合法性*/
	if(!isNaN(num_1) && !isNaN(num_2) && num_1!='' && num_2!=''){
		/*2. 判断计算符的合法性*/
		if(type =='*'){
			num = fun.multiplication(num_1,num_2);
		}else if(type == '/'){
			// 除数不能为0 判断
			if(num_2 != 0){
				num = fun.division(num_1,num_2);
			}else{
				alert('除数不能为0');
				return;
			};
		}else if(type == '+'){
			num = fun.add(num_1,num_2);
		}else if(type == '-'){
			num = fun.minus(num_1,num_2);
		}else{
			alert('请检查您的计算方式，目前仅支持：+  -  *  /');
			return;
		}
		result.innerHTML = parseFloat(num.toFixed(5));;
	}else{
		alert('数据异常');
	}
}
var fun = {
	multiplication:function(num1,num2){return num1*num2},
	division:function(num1,num2){return num1/num2},
	add:function(num1,num2){return parseFloat(num1)+parseFloat(num2)},
	minus:function(num1,num2){return num1-num2},
};