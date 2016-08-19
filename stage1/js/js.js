var btn = document.getElementById('btn');
// 绑定click事件
btn.onclick=function(){
	var name = document.getElementById('name').value,
		score = document.getElementById('score').value,
		level = '';
	if(name != '' &&score !=''){
		level = checkLv(score);
		addDate(name,score,level);
	}else{
		alert('请填写完整数据');
	}
}
// 检查数据
function checkLv(score){
	if(!isNaN(score)){  // 是否数字
		if(0 <= score && score <= 100){  //控制在0~100范围
			// 返回判断
			if(score > 90){
				level = '一等生';
				return level;
			}else if(score > 80){
				level = '二等生';
				return level;
			}else if(score > 70){
				level = '三等生';
				return level;
			}else if(score > 60){
				level = '四等生';
				return level;
			}else{
				level = '不及格';
				return level;
			}
		}else{
			alert('超出范围');
		}
	}else{alert('格式错误')}
}

//      增加数据
function addDate(name,score,lv){
	if(lv == undefined){return;}
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	// 写入数据
	td1.innerText = name;
	td2.innerText = score;
	td3.innerText = lv;
	// push元素
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	document.getElementById('push').appendChild(tr);
}