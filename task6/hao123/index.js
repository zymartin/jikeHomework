var storage = localStorage.getItem('theme'),
	banner = document.getElementById('banner'),
	change_theme = document.getElementById('change_theme'),
	my_theme = document.getElementById('theme'),
//  主题配置 theme
	theme = {
		default:{
			banner: 'rgba(252,252,252,.8)',
			bg_color: '#fcfcfc'
		},
		one:{
			banner:'honeydew',
			bg_color:'#A7F3AD'
		},
		two:{
			banner:'gold',
			bg_color:'khaki'
		}
	};
	// 鼠标移动效果
change_theme.onmouseover = function(){
	my_theme.style.display = 'block';
}
change_theme.onmouseleave =function(){
	my_theme.style.display = 'none';
}
// 点击触发
my_theme.onclick = function(e){
	// 取得目标位置数据
	var name = e.target.dataset.theme;
	var obj = theme[name];
	if(name == 'my'){
		// 让用户自定义颜色
		name = prompt('请输入16进制颜色 如：#456 / #a7b8d9');
		// 验证输入的合法性
		if((/^#[0-9a-fA-F]{3,6}$/).test(name)){
			document.body.style.background = name;
		}else{
			// 格式错误，即重置默认主题
			alert('格式错误');
			name = 'default';
		};
	}else{
		// 改变样式
		document.body.style.background = obj.bg_color;
		banner.style.background = obj.banner;
	}
	// 存入缓存
	localStorage.setItem('theme',name);
}

// 如果存在
if (storage) {
	//根据格式判断使用方法 
	if((/^#[0-9a-fA-F]{3,6}$/).test(storage)){
		document.body.style.background = storage;
	}else{
		document.body.style.background = theme[storage].bg_color;
		banner.style.background = theme[storage].banner;
	}
}