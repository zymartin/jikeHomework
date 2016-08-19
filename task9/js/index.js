//页面的数据承载
var pageData,t;
$('.table li').width($(window).width()/6);
$('.table li').last().width(($(window).width()/6)*2);

//轮播方法
function swiper(){
    var ctn = $('.picCtn ul');
    var cloneLi = $('.picCtn li').eq(0).clone();
    var distance = $('.picCtn').width();

    ctn.append(cloneLi);
    var num = $('.picCtn li').length;
    var index = 0;

    //布局数据初始化

    ctn.width(distance*num);
    $('.swiperPic li').width(distance);

    //动画
    var go = function(){
        index--;
        if(index<=-num){
            //到达最后一张,回到第一张
            index = -1;
            ctn.css('margin-left',0);
            ctn.animate({'margin-left':index*distance},1000);
        }else{
            ctn.animate({'margin-left':index*distance},1000);
        }
    }
    t = setInterval(go,3000);
};


//自后台取出数据的fun，传入栏目的code
function getTabData(res){
    var res = res||'tuijian';
    $.ajax({
        url:'/platform/get',
        type:'POST',
        async:false,
        data:{type:res},
        success:function(data){
            pageData = data;
        },
        error:function(){
            pageData = [];
        }
    })
};

//点击时访问mysql取出数据  并插入html中
$('.content li').on('click',function(){
    $('.picCtn ul').html('');
    clearInterval(t);
    //取出data
    getTabData(this.dataset.type);
    var htmlstr = '';
    var htmlstrSwiper = '';

    //字符串拼接
    for(var i = pageData.length-1; i > -1; i--){
        if(pageData[i].sign != 'swiperPic'){
            htmlstr +=
                '<div class="item">'+
                '<img class="fl" src="'+pageData[i].img+'" alt=""/>'+
                '<div class="news_title">'+
                pageData[i].title+
                '</div>'+
                '<div class="news_time">'+
                '<span class="tip_time fl">'+pageData[i].doTime+'</span>';
            if(pageData[i].sign != 'no'){
                htmlstr += '<span class="tip_type fr">'+pageData[i].sign+'</span>'
            }
            htmlstr += '</div></div>';
        }else{
            htmlstrSwiper +=

                '<li><a href="#"><img src="'+pageData[i].img+'" alt=""/></a>'+
                '<p>'+pageData[i].title+'</p>'+
                '</li>';
        };
    }
    $('.picCtn ul').html(htmlstrSwiper);
    swiper();
    $('.news_item').html(htmlstr);
});
$('.content li')[0].click();