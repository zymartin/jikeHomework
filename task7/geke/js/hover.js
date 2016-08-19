define(function(require, exports, module){
	var a = {};
	a.hover = function(){
		var learnPath = $('.learn-card a')
    	learnPath.each(function(index){
    		$(this).mouseenter(function(){
    			if(index == 4){
    				$(this).css({'border':'1px solid red'});
    				return;
    			}
    			if(index > 4){
    				$(this).css({
    					'border-left':'1px solid red',
    					'border-bottom':'1px solid red'
    				})
    				learnPath.eq(index+1).css({'border-left':'1px solid red'});
    				learnPath.eq(index-5).css({'border-bottom':'1px solid red'});
    				if(index == 9){$(this).css({'border-color':'red'})}
    				return;
    			}
    			$(this).css({'border':'1px solid red'});
    			$(this).css({'border-right':'0'});
    			learnPath.eq(index+1).css({'border-left':'1px solid red'});
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
