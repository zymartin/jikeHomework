(function() { //自调

    $('#background').width($(window).width()).height(window.screen.availHeight);
    //侧边栏的高度
    $('.moreBar').height(window.screen.availHeight);

    //显隐侧边栏
    $('.moreCtn').mouseenter(function() {
        $('.moreBar').show();
    }).mouseleave(function() {
        $('.moreBar').hide();
    });

    //多页切换
    $('.newsMenu li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab'+$(this).index()).show().siblings().hide();
    });

    //滚动事件
    $(window).on('scroll', function(e) {
        var distance = $(this).scrollTop();
        var fixR = ($(document).width() - $('.newsCtn').width()) / 2 + 5;
        if (distance > 180) {
            $('#topHeader').hide();
            $('#topHeaderFix').show();
        } else {
            $('#topHeader').show();
            $('#topHeaderFix').hide();
        }
        if (distance > 190) {
            $('.newsHot').css({
                position: 'fixed',
                top: '100px',
                right: fixR
            });
        } else {
            $('.newsHot').css({
                position: 'absolute',
                top: '20px',
                right: '5px'
            });
        }


    });

})();

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

function scrollWay(e) {
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
}

function appendNews() {
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
}
var top1 = $(window).scrollTop();

function scrollFunc() {
    //判断到达页面底部 & 鼠标滚动向下
    if (document.body.scrollHeight - $(window).scrollTop() == $(window).height() && scrollWay() == 'down') {
        $('.rect').hide();
        appendNews();
    };

}

document.onmousewheel = scrollFunc;
