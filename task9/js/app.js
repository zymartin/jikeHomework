var rowWidth = 0;
var pageSign = {code:'tuijian',name:'推荐'};
var pageData,itemData = {},dowhat;

for(var i = 0; i < $('.tHeader>div').length; i++){
    rowWidth += $('.tHeader>div').eq(i).width();
};
(function(){
    $('.row').width(rowWidth+50);
    $('.row.tHeader').width(rowWidth);
})();
//数据添加按钮
$('.head .addData').on('click',function(){
    $('.pop').show();
    dowhat = 'addData';
});

//关闭弹窗
$('.popClose,.cancel').on('click',function(){
    $('.pop').hide();
});

//侧边栏的栏目切换
$('#dashboard-menu li a').on('click',function(){
    getTabData(this.dataset.type);
    pageSign.code = this.dataset.type;
    pageSign.name = $(this).find('span').text();

    addHTML();
    funinit();
});
$('#dashboard-menu li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});
$("[data-type='"+pageSign.code+"']").click();




//弹窗的确定按钮功能
$('.do').on('click',function(){
    var param = {};
    param.id = itemData.id;
    param.title = $('.inputKuang .newstitle').val();
    param.tab = $('.inputKuang select').val();
    param.img = $('.inputKuang .newsimg').val();
    param.doTime = $('.inputKuang .newstime').val();
    param.sign = $('.inputKuang .newssign').val()==''?'no':$('.inputKuang .newssign').val();


    var reg = /[^\s]+\.(jpg|gif|png|bmp)/i;
    var reg2 = /^[^\|"'<>]*$/;
    //验证判断
    if(param.img != ''){
        if(!reg.test(param.img)){
            alert('图片地址格式错误');return false;
        }
        if(!reg2.test(param.img)){
            alert("请勿输入\n\n 1 单引号: ' \n 2 双引号: \" \n 3 竖 杠: | \n 4 尖角号: < > \n等非法字符");return false;
        }
    }else{
        alert('图片地址栏为空，请填写');
        return false;
    }
    //标题验证
    if(param.title != ''){
        if(!reg2.test(param.title)){
            alert("请勿输入\n\n 1 单引号: ' \n 2 双引号: \" \n 3 竖 杠: | \n 4 尖角号: < > \n等非法字符");return false;
        }
    }else{
        alert('标题栏为空，请填写');
        return false;
    }
    if(param.doTime == ''){
        alert('日期为空，请选择');
        return false;
    }
    if(param.tab == ''){
        alert('请填写所属栏目');
        return false;
    }

    if(!reg2.test(param.sign)){
        alert("请勿输入\n\n 1 单引号: ' \n 2 双引号: \" \n 3 竖 杠: | \n 4 尖角号: < > \n等非法字符");return false;
    }


    //发起ajax
    if(dowhat == 'addData'){
        $.ajax({
            url:'/platform/add',
            type:'POST',
            data:param,
            success:function(data){
                console.log(param);
                console.log(data);
                if(data.status == 'success'){
                    successFun();
                }else if(data.status == 'nosuccess'){
                    alert(data.msg);
                };
            },
            error:function(){console.log('error');}
        });
    }else if(dowhat == 'alterData'){
        $.ajax({
            url:'/platform/alter',
            type:'POST',
            data:param,
            success:function(data){
                console.log();
                if(data.status == 'noSuccess'){
                    alert(data.msg);
                    return false;
                }
                if(data.status == 'success'){
                    successFun();
                };
            },
            error:function(data){
                console.log('error');
                console.log(data);
            }
        });
    }

});



function successFun(){
    alert('执行成功');
    $('.pop').hide();
    $("[data-type='"+pageSign.code+"']").click();
}


function funinit(){
    //修改btn
    $('.alter').on('click',function(){
        $('.pop').show();
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
        itemData.id = chooseRow.find('.newsNo').html();
        itemData.title = chooseRow.find('.newsTitle').html();
        itemData.tab = chooseRow.find('.newsTab').html();
        itemData.img = chooseRow.find('.newsImg').html();
        itemData.doTime = chooseRow.find('.newsTime').html();
        itemData.sign = chooseRow.find('.newsSign').html();

        $('.inputKuang .newstitle').val(itemData.title);
        // $(".inputKuang select").find("option[value='"+itemData.tab+"']").attr("selected",true);
        $(".inputKuang select").find("option[value='"+pageSign.code+"']").attr("selected",true);
        // $('.inputKuang select').val(itemData.tab);
        $('.inputKuang .newsimg').val(itemData.img);
        $('.inputKuang .newstime').val(formatTime(itemData.doTime));
        $('.inputKuang .newssign').val(itemData.sign);
    });
    //数据删除按钮
    $('.del').on('click',function(){
        if(confirm('确定要删除吗？')){
            dowhat = 'delData';
            $.ajax({
                url:'/platform/del',
                type:'POST',
                data:itemData,
                success:function(data){
                    console.log(data);
                    if(data.status == 'success'){
                        successFun();
                    };
                },
                error:function(data){
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
    console.log(res);
    var res = res||'tuijian';
    $.ajax({
        // url:'../php/getData.php',
        url:'/platform/get',
        type:'POST',
        async:false,
        data:{type:res},
        success:function(data){
            pageData = data;
        },
        error:function(data){
            pageData = [];
        }
    })
};


//取得数据后的 DOM操作
function addHTML(){
    var htmlstr = ' ';
    console.log(pageData);

    for(var i = pageData.length-1; i > -1;i--){
        if(pageData[i].swiper==undefined){
            htmlstr +=
                '<div class="row item">'+
                '<div class="row1">'+
                '<input class="fl" type="checkbox"/>'+
                '<div class="fl newsNo">'+
                pageData[i].id+
                '</div>'+
                '<div class="fl newsTitle">'+
                pageData[i].title+
                '</div>'+
                '<div data-tab="'+pageSign.code+'" class="fl newsTab">'+
                pageSign.name+
                '</div>'+
                '<div class="fl newsImg">'+
                pageData[i].img+
                '</div>'+
                '<div class="fl newsTime">'+
                pageData[i].doTime+
                '</div>'+
                '<div class="fl newsSign">'+
                pageData[i].sign+
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
    $('.row.item').width(rowWidth+50);
}
