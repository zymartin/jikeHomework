		var isPoint = 1, //小数点可用
			isFirst = 1, //是否首次输入
			isTwoNum = 0, //是否为两个数字
			// 目标
			num_btn = document.getElementById('num_btn'),
			msg = document.getElementById('msg'),
			equel = document.getElementById('equel'),
			fun_btn = document.getElementById('fun_btn'),
			tools_btn = document.getElementById('tools_btn'),
			science_btn = document.getElementById('science_fun'),
			// 计算变化
			num1 = null,
			num2 = null,
			func = null,
			str = '',
			result;

		//按钮方法
		var fun_obj = { 
			//回退
			back:function(string){
				str = string.substring(0,string.length-1);
				num1 = str;
				return str;
			},
			//清空
			clear:function(){
				msg.innerHTML = '';
				this.init();
			},
			//负号
			negative:function(string){
				// 如果有负号
				if(string.indexOf('-') != -1){
					str = string.substring(1);
					msg.innerHTML = str;
					// if(isFirst){ // 如果是第一次输入
					// 	num1 = '-'+str;
					// }else{
					// 	num2 = '-'+str;
					// }
				}else{
					str = '-'+string;
					msg.innerHTML = str;
					// if(isFirst){ // 如果是第一次输入
					// 	num1 = '-'+str;
					// }else{
					// 	num2 = '-'+str;
					// }
				}
			},
			//开方
			sqrt:function(input){
				var number = parseFloat(input).toFixed(3);
				console.log('squrt:'+input);
				console.log('str:'+str);
				if(number>=0){
					number = Math.sqrt(number);
					msg.innerHTML = number;
				}else{
					alert('请输入大于0的数');
				}
				num1 = msg.innerHTML;
				str = '';
			},
			// π
			pi:function(){
				msg.innerHTML = Math.PI;
				if(num1){
					num2 = Math.PI;
				}else{
					num1 = Math.PI;
				};
				str = '';
			},

			html:function(string){
				str = '';
				msg.innerHTML = string;
				str += string;
			},
			//次方
			power:function(number1,number2){
				msg.innerHTML = Math.pow(number1,number2);
			},
			//倒数
			reciprocal:function(number1){
				if(number1 != 0){
					msg.innerHTML = 1/number1;
				}else{
					alert('除数不能为0');
				};
			},
			//平方
			square:function(number1){
				msg.innerHTML = number1*number1;
				isFirst = 1;
				str = msg.innerHTML;
				num1 = msg.innerHTML;
				num2 = null;
				func = null;
				isTwoNum = 0;
			},
			//3次方
			square3:function(number1){
				msg.innerHTML = number1*number1*number1;
				str = msg.innerHTML;
				num1 = msg.innerHTML;
				num2 = null;
				func = null;
				isTwoNum = 0;
			},
			//除法
			division:function(number1,number2){
				if(number2 == 0){
					alert('除数不能为0');
					str = '';
					isFirst = 1;
					return;
				}
				msg.innerHTML = parseFloat((number1/number2).toFixed(3));
			},
			// 乘法
			multiplicative:function(number1,number2){
				msg.innerHTML = parseFloat((number1*number2).toFixed(3));
				isFirst = 0;
			},
			// 加法
			add:function(number1,number2){
				msg.innerHTML = parseFloat(number1)+parseFloat(number2);
			},
			// 减法
			minus:function(number1,number2){
				msg.innerHTML = number1-number2;
			},
			// %
			percent:function(number1){
				console.log(number1);
				console.log('adsad');
				msg.innerHTML = number1/100;
			},
			// 初始化
			init:function(){
				isFirst = 1;
				str = '';
				num1 = null;
				num2 = null;
				func = null;
				isPoint = 1;
				isTwoNum = 0;
			}
		}

		// Start绑定事件


		num_btn.onclick = function(e){
			// 取得目标
			var num = e.target.dataset.num;
			if(num != undefined){
				if(isFirst){ //第一次输入数字
					str += num;
					msg.innerHTML = str;
					num1 = str;
				}else{ //第二次输入数字
					str += num;
					msg.innerHTML = str;
					num2 = str;
				};
			};
		}

// tools
		tools_btn.onclick = function(e){
			// 取得目标
			var tool = e.target.dataset.tool;
			switch(tool){
				case '←': msg.innerHTML = fun_obj.back(str);break;
				case 'C': fun_obj.clear();
						  break;
				case 'CE': fun_obj.clear();
						   break;
				case '±': fun_obj.negative(str);
						  break;
				case '√': fun_obj.sqrt(str);
						  break;
				case 'π': fun_obj.pi();
						  break;
			};
		}

//科学计算
		science_btn.onclick = function(e){
			// 取得目标
			var sec = e.target.dataset.sec;
			if(sec != undefined){
				switch(sec){
					case 'sin': fun_obj.html(sec);
								break;
					case 'cos': fun_obj.html(sec);
								break;
					case 'tan': fun_obj.html(sec);
								break;
					case 'log': fun_obj.html(sec);
								break;
					case 'xy': str = '';
								func = 'xy';
								isTwoNum = 1;
								isFirst = 0;
								break;
					case 'x2': fun_obj.square(num1);
								break;
					case 'x3': fun_obj.square3(num1);
								break;
				}
			}
		}

//加减乘除
		fun_btn.onclick = function(e){
			
			// 取得目标
			var fun = e.target.dataset.fun;
			if(fun!=undefined){
				isFirst = 0;
				if(fun == '/'||fun == '*'||fun == '-'||fun == '+'){
					func = fun;
					str = '';
					isTwoNum = 1;
				}
				if(fun == '%'){
					fun_obj.percent(num1);
					fun_obj.init();
				}
				if(fun == '1/x'){
					fun_obj.reciprocal(num1);
					fun_obj.init();
				}
			}
		}
//等于
		equel.onclick = function(){
			var text = msg.innerHTML;

			if(text.indexOf('sin')!=-1){
				result = parseFloat(text.substring(3)).toFixed(3);
				msg.innerHTML = Math.sin(result);
			}else if (text.indexOf('cos')!=-1) {
				result = parseFloat(text.substring(3)).toFixed(3);
				msg.innerHTML = Math.cos(result);
			}else if (text.indexOf('tan')!=-1) {
				result = parseFloat(text.substring(3)).toFixed(3);
				msg.innerHTML = Math.tan(result);
			}else if (text.indexOf('log')!=-1) {
				result = parseFloat(text.substring(3)).toFixed(3);
				msg.innerHTML = Math.log(result);
			}else if (text.indexOf('ln')!=-1) {
				result = parseFloat(text.substring(3)).toFixed(3);
				msg.innerHTML = Math.LN10;
			}

			if(num2!=undefined){
				switch(func){
					case '/': fun_obj.division(num1,num2);
							  break;
					case '*': fun_obj.multiplicative(num1,num2);
							  break;
					case '-': fun_obj.minus(num1,num2);
							  break;
					case '+': fun_obj.add(num1,num2);
							  break;
					case 'xy': fun_obj.power(num1,num2);
				}
			}

			isFirst = 1;
			str = msg.innerHTML;
			num1 = msg.innerHTML;
			num2 = null;
			func = null;
			isTwoNum = 0;
		}
		// End 绑定事件
