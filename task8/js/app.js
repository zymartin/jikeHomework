var rowWidth = 0;
var pageSign = '推荐';
var pageData,itemData = {},dowhat;

for(var i = 0; i < $('.tHeader>div').length; i++){
    rowWidth += $('.tHeader>div').eq(i).width();
};
(function(){
    $('.row').width(rowWidth+50);
    $('.row.tHeader').width(rowWidth);
    console.log(rowWidth);
})();
//数据添加按钮
$('.head .addData').on('click',function(){
    $('.inputKuang .newstab').removeAttr('readOnly');
    $('.pop').show();
    dowhat = 'addData';
});

//关闭弹窗
$('.popClose,.cancel').on('click',function(){
    $('.pop').hide();
});


$('#dashboard-menu li a').on('click',function(){
    getTabData(this.dataset.type);
    pageSign = $(this).find('span').text();
    addHTML();
    funinit();
});
$('#dashboard-menu li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});
$("[data-type='"+signCode(pageSign)+"']").click();





$('.do').on('click',function(){
    var param = {};
    param.title = $('.inputKuang .newstitle').val();
    param.tab = $('.inputKuang .newstab').val();
    param.img = $('.inputKuang .newsimg').val();
    param.time = $('.inputKuang .newstime').val();
    param.sign = $('.inputKuang .newssign').val();
    if(dowhat == 'addData'){
        $.ajax({
            url:'../php/putData.php',
            type:'POST',
            data:param,
            success:function(data){
                console.log(param);
                console.log(data);
                if(data.status == 'success'){
                    successFun();
                };
            },
            error:function(){console.log('error');}
        });
    }else if(dowhat == 'alterData'){
        console.log('修改');

        itemData.newsTitle = $('.inputKuang .newstitle').val();
        itemData.newsTab = $('.inputKuang .newstab').val();
        itemData.newsImg = $('.inputKuang .newsimg').val();
        itemData.newsTime = $('.inputKuang .newstime').val();
        itemData.newsSign = $('.inputKuang .newssign').val();

        $.ajax({
            url:'../php/update.php',
            type:'POST',
            data:itemData,
            success:function(data){
                if(data.status == 'success'){
                    successFun();
                };
            },
            error:function(){
                console.log('error');
            }
        });
    }

});

function successFun(){
    alert('执行成功');
    $('.pop').hide();
    $("[data-type='"+signCode(pageSign)+"']").click();
    console.log(pageSign);
}


function funinit(){
    //修改btn
    $('.alter').on('click',function(){
        $('.pop').show();
        $('.inputKuang .newstab').attr("readOnly",'true');
        dowhat = 'alterData';
    });
    //项目选择
    $('.row').on('click',function(){
        var me = $(this).find('.row1');
        if(me.hasClass('active')){
            me.removeClass('active');
            me.find('input').prop("checked",false);
        }else{
            me.addClass('active');
            me.find('input').prop("checked",true);
        };
    });

    //阻止事件传播
    $('.row2 .btn').on('click',function(e){
        e.stopPropagation();
        var chooseRow = $(this).parents('.row2').siblings('.row1');
        itemData.newsNo = chooseRow.find('.newsNo').html();
        itemData.newsTitle = chooseRow.find('.newsTitle').html();
        itemData.newsTab = chooseRow.find('.newsTab').html();
        itemData.newsImg = chooseRow.find('.newsImg').html();
        itemData.newsTime = chooseRow.find('.newsTime').html();
        itemData.newsSign = chooseRow.find('.newsSign').html();

        $('.inputKuang .newstitle').val(itemData.newsTitle);
        $('.inputKuang .newstab').val(itemData.newsTab);
        $('.inputKuang .newsimg').val(itemData.newsImg);
        $('.inputKuang .newstime').val(formatTime(itemData.newsTime));
        $('.inputKuang .newssign').val(itemData.newsSign);
    });
    //数据删除按钮
    $('.del').on('click',function(){
        if(confirm('确定要删除吗？')){
            dowhat = 'delData';
            $.ajax({
                url:'../php/delData.php',
                type:'POST',
                data:itemData,
                success:function(data){
                    console.log(data);
                    if(data.status == 'success'){
                        successFun();
                    };
                },
                error:function(data){
                    console.log('error');
                    console.log(data);
                }
            })
        }

    });
}
function formatTime(time){
    var arr = time.split('-');
    for(var n = 0; n < arr.length; n++){
        if(n >= 1 && arr[n].length <= 1){
            arr[n] = '0'+arr[n];
        };
    };
    return arr[0]+'-'+arr[1]+'-'+arr[2];
}


//获取后台的指定栏目数据
function getTabData(res){
    var res = res||'newsTuijian';
    $.ajax({
        url:'../php/getData.php',
        type:'POST',
        async:false,
        data:{table:res},
        success:function(data){
            pageData = data;
            console.log(pageData);
        },
        error:function(){}
    })
};

function signCode(sign){
    switch(sign){
        case '推荐':
            return 'newsTuijian';
        case '百家':
            return 'newsBaijia';
        case '本地':
            return 'newsBendi';
        case '图片':
            return 'newsTupian';
        case '娱乐':
            return 'newsYule';
        case '社会':
            return 'newsShehui';
        case '军事':
            return 'newsJunshi';
        case '女人':
            return 'newsNvren';
        case '搞笑':
            return 'newsGaoxiao';
        default :
            return 'newsTuijian';
    }
}
console.log(signCode('推荐'));
//DOM操作
function addHTML(){
    var htmlstr = '';

    for(var i = 0; i < pageData.length;i++){
        if(pageData[i].swiper==undefined){
            htmlstr +=
                '<div class="row item">'+
                '<div class="row1">'+
                '<input class="fl" type="checkbox"/>'+
                '<div class="fl newsNo">'+
                pageData[i].newsNo+
                '</div>'+
                '<div class="fl newsTitle">'+
                pageData[i].newsTitle+
                '</div>'+
                '<div class="fl newsTab">'+
                pageSign+
                '</div>'+
                '<div class="fl newsImg">'+
                pageData[i].newsImg+
                '</div>'+
                '<div class="fl newsTime">'+
                pageData[i].newsTime+
                '</div>'+
                '<div class="fl newsSign">'+
                pageData[i].newsType+
                '</div>'+

                '</div>'+
                '<div class="row2">'+
                '<ul>'+
                '<li><a class="btn alter" href="#">修改</a></li>'+
                '<li>'+
                '<a class="btn del" href="#">删除</a>'+

                '</li>'+
                '</ul>'+
                '</div></div>';
        };

    };
    $('.tBody').html(htmlstr);
}
