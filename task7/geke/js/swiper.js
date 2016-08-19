define(function(require, exports, module) {
	var a = {};
	a.swiper = function(id,num,speed,isanimate,time,isIconButton,box){
        var target = $('#'+id),
            img_ctn = target.find('ul'),
            size = target.find('li').size();

        for(var i = 1; i <= num; i++){
            var clone = target.find('li:nth-child('+i+')').clone();
            target.find('ul').append(clone);
        }
        var imgbox = target.find('li');

        // 页面初始化
        imgbox.css({'width':target.width()/num});
        target.css('height',img_ctn.height());
        target.attr('offset',target.width()/num);
        target.attr('index',0);
        target.attr('num',num);
        //End 初始化

        target.find('.arrow-left').on('click',function(){
            var target = $(this).parent(),
                index = target.attr('index'),
                offset = target.attr('offset'),
                num = target.attr('num');

            if(index == 0){
                index = -size;
                img_ctn.css('left',offset*index);
            }
            index++;
            animate(index,offset);
            if(isIconButton){RandL_click()};
        });
        target.find('.arrow-right').on('click',function(){
            var target = $(this).parent(),
                index = target.attr('index'),
                offset = target.attr('offset'),
                num = target.attr('num');

            if(index == -num-(size-num)){
                index = 0;
                img_ctn.css('left',offset*index);
            }

            index--;
            animate(index,offset);
            if(isIconButton){RandL_click()};
        })

        // 动画函数
        if(isanimate == true){
            if(isIconButton){
                for(var j = 0; j < size; j++){
                    $(box).append('<span data-index="'+(j+1)+'"></span>');
                }
                $(box).find('span').last().addClass('on');
                $(box).find('span').on('click',function(){
                    var index = -$(this).attr('data-index'),
                        offset = $('#'+id).attr('offset');
                    $(this).addClass('on').siblings().removeClass('on');
                    animate(index,offset);
                })
            }
            // 自动轮播
            var t = setInterval(c_animate,time);
            target.hover(function(){
                clearInterval(t);
            },function(){
                t = setInterval(c_animate,time);
            })
        };

        function animate(index,offset){
            img_ctn.stop().animate({left:offset*index},speed);
            target.attr('index',index);
        }
        function c_animate(){
            var index = target.attr('index'),
                offset = target.attr('offset'),
                num = target.attr('num');

                if(index == -num-(size-num)){
                    index = 0;
                    img_ctn.css('left',offset*index);
                }

                index--;
                animate(index,offset);
                if(isIconButton){RandL_click()};
        }
        //底部按钮
        function RandL_click(){
            var index = target.attr('index');
            $(box).find('span').eq(-index-1).addClass('on').siblings().removeClass('on');
        }
    }
	module.exports = a;
});