define(function(require, exports, module){
	var a = {};
	a.hover = function(){
		var learnPath = $('.learn-card a')
    	learnPath.each(function(index){
    		$(this).mouseenter(function(){
    			if(index == 4){
    				$(this).css({'border':'1px solid #35b558'});
    				return;
    			}
    			if(index > 4){
    				$(this).css({
    					'border-left':'1px solid #35b558',
    					'border-bottom':'1px solid #35b558'
    				})
    				learnPath.eq(index+1).css({'border-left':'1px solid #35b558'});
    				learnPath.eq(index-5).css({'border-bottom':'1px solid #35b558'});
    				if(index == 9){$(this).css({'border-color':'#35b558'})}
    				return;
    			}
    			$(this).css({'border':'1px solid #35b558'});
    			$(this).css({'border-right':'0'});
    			learnPath.eq(index+1).css({'border-left':'1px solid #35b558'});
    		}).mouseleave(function(){
    			if(index == 4){
    				$(this).css({'border':'1px solid #e4e4e4'});
    				return;
    			}
    			if(index > 4){
    				$(this).css({'border-color':'#e4e4e4'})
    				learnPath.eq(index-5).css({'border-color':'#e4e4e4'})
    				learnPath.eq(index+1).css({'border-left':'1px solid #e4e4e4'})
    				if(index == 9){$(this).css({'border-color':'#e4e4e4'})}
    				return;
    			}
    			$(this).css({'border':'1px solid #e4e4e4'})
    			learnPath.eq(index+1).css({'border-left':'1px solid #e4e4e4'})
    			$(this).css({'border-right':'0'})
    		})
    	})
	}
	module.exports = a;
})
