define(function(require, exports, module) {
	var swiperWithAnimate = function(){
        var target = $('#'+id),
            img_ctn = target.find('ul'),
            size = target.find('li').size(),
            imgbox = target.find('li'),
            clone = target.find('li').first().clone();
        
        
        console.log(target);
        // 页面初始化
        imgbox.css({'width':target.width()/num});
        target.css('height',img_ctn.height());
        target.attr('offset',target.width()/num);
        target.attr('index',0);
        target.attr('num',num);

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
        })
        function animate(index,offset){
            img_ctn.stop().animate({left:offset*index},300);
            target.attr('index',index);
        }
    };

	module.exports = swiperWithAnimate;
});