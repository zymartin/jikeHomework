define(function(t,n,a){var i={};i.swiper=function(t,n,a,i,r,s,e){function f(t,n){c.stop().animate({left:n*t},a),l.attr("index",t)}function d(){var t=l.attr("index"),n=l.attr("offset"),a=l.attr("num");t==-a-(v-a)&&(t=0,c.css("left",n*t)),t--,f(t,n),s&&o()}function o(){var t=l.attr("index");$(e).find("span").eq(-t-1).addClass("on").siblings().removeClass("on")}for(var l=$("#"+t),c=l.find("ul"),v=l.find("li").size(),u=1;u<=n;u++){var h=l.find("li:nth-child("+u+")").clone();l.find("ul").append(h)}var p=l.find("li");if(p.css({width:l.width()/n}),l.css("height",c.height()),l.attr("offset",l.width()/n),l.attr("index",0),l.attr("num",n),l.find(".arrow-left").on("click",function(){var t=$(this).parent(),n=t.attr("index"),a=t.attr("offset");t.attr("num");0==n&&(n=-v,c.css("left",a*n)),n++,f(n,a),s&&o()}),l.find(".arrow-right").on("click",function(){var t=$(this).parent(),n=t.attr("index"),a=t.attr("offset"),i=t.attr("num");n==-i-(v-i)&&(n=0,c.css("left",a*n)),n--,f(n,a),s&&o()}),1==i){if(s){for(var x=0;x<v;x++)$(e).append('<span data-index="'+(x+1)+'"></span>');$(e).find("span").last().addClass("on"),$(e).find("span").on("click",function(){var n=-$(this).attr("data-index"),a=$("#"+t).attr("offset");$(this).addClass("on").siblings().removeClass("on"),f(n,a)})}var m=setInterval(d,r);l.hover(function(){clearInterval(m)},function(){m=setInterval(d,r)})}},a.exports=i});