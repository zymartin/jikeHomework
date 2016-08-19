var waterFallData = [{
    title: '除了中央纪委 这个机构也能巡视中央国家机关',
    pic: 'img/news1.jpg',
    origin: '搜狐新闻',
    time: '06-06 22：39',
    sign: 'hot'
}, {
    title: '运营商首推不限量套餐 本地流量超量后降速不收费',
    pic: false,
    origin: '凤凰财经',
    time: '06-08 04:07',
    sign: 'hot'
}, {
    title: '肯尼亚全国大停电3小时:都是一只猴子惹得祸',
    pic: false,
    origin: '搜狐新闻',
    time: '06-08 14:25',
    sign: 'no'
}, {
    title: '劫匪抢劫麦当劳 遇上吃晚饭的特种兵',
    pic: 'img/new2.jpg',
    origin: '凤凰网',
    time: '06-09 10:53',
    sign: 'hot'
}];
// ********************单例模式

var index = {
    init:function(){
        this.render();
        this.bind();
    },
    //页面元素
    render:function(){
        var me = this;
        me.background = $('#background');
        me.moreBar = $('.moreBar');
        me.moreCtn = $('.moreCtn');
        me.newsMenu_li = $('.newsMenu li');
        me.tab = $('.tab');
        me.topHeader = $('#topHeader');
        me.topHeaderFix = $('#topHeaderFix');
        me.newsHot = $('.newsHot');
        me.newsCtn = $('.newsCtn');
    },
    //绑定方法
    bind:function(){
        var me = this;
        me.func.pageinit();
        me.newsMenu_li.on('click', me.func.tabChang);
        $(window).on('scroll',me.func.headerShowOrHide);
        document.onmousewheel = me.func.scrollFunc;
    },
    func:{
        pageinit:function(){
            index.background.width($(window).width()).height(window.screen.availHeight);
        },
        tabChang:function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.tab'+$(this).index()).show().siblings().hide();
        },
        headerShowOrHide:function(){
            var distance = $(this).scrollTop();
            var fixR = ($(document).width() - index.newsCtn.width()) / 2 + 5;
            console.log(fixR);
            if (distance > 180) {

                index.topHeader.hide();
                index.topHeaderFix.show();
            } else {
                index.topHeader.show();
                index.topHeaderFix.hide();
            }
            if (distance > 190) {
                index.newsHot.css({
                    position: 'fixed',
                    top: '100px',
                    right: fixR
                });
            } else {
                index.newsHot.css({
                    position: 'absolute',
                    top: '20px',
                    right: '5px'
                });
            }
        },
        scrollWay:function(e){
            e = e || window.event;
            if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
                if (e.wheelDelta > 0) { //滑轮向上滚动
                    return 'up';
                }
                if (e.wheelDelta < 0) { //滑轮向下滚动
                    return 'down';
                }
            } else if (e.detail) { //Firefox滑轮事件  
                if (e.detail < 0) { //滑轮向上 
                    return 'up';
                }
                if (e.detail > 0) { //滑轮向下
                    return 'down';
                }
            }
        },
        appendNews:function(){
            var htmlstr = '';
            for (var i = 0; i < waterFallData.length; i++) {
                htmlstr +=

                    '<div class="item">' +
                    '   <div class="newsTitle cf">' +
                    '       <a href="#">';
                if (waterFallData[i].sign == 'hot') {
                    htmlstr += '<i></i> '
                }

                if (waterFallData[i].pic != false) {
                    htmlstr += '<img class="fr" src="' + waterFallData[i].pic + '">';
                };

                htmlstr +=

                    waterFallData[i].title +
                    '       </a>' +
                    '   </div>' +
                    '   <div class="origin">' +
                    '       <span>' + waterFallData[i].origin + '</span>' +
                    '       <span>' + waterFallData[i].time + '</span>' +
                    '   </div>' +
                    '</div>';
            };
            $('.itemCtn').append(htmlstr);
        },
        scrollFunc:function(){
            //判断到达页面底部 & 鼠标滚动向下
            if (document.body.scrollHeight - $(window).scrollTop() == $(window).height() && index.func.scrollWay() == 'down') {
                $('.rect').hide();
                index.func.appendNews();
            };
        }
    }
}
index.init();
