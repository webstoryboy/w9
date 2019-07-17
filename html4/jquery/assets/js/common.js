// JavaScript Document

$(window).resize(function(){	
	$('#scrollBox').overscroll({
		scrollLeft :0,
		scrollTop : 575,
		captureWheel  : false
	});
});

var rotation = function (){
   $("#scene02 .wind img").rotate({
	  angle:0, 
	  animateTo:360, 
	  duration:5000,
	  callback: rotation,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}

var rotation02 = function (){
   $("#scene07 .wind img").rotate({
	  angle:0, 
	  animateTo:360, 
	  duration:8000,
	  callback: rotation02,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}


$(function(){ // document ready(문서가 열렸을때 실행)

	rotation();
	rotation02();
	
	// scene01
	var s01obj01 = $('#scene01 .obj01');
	TweenMax.to(s01obj01, 1.6, {css:{top:"124px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	var s01obj02 = $('#scene01 .obj12');
	TweenMax.to(s01obj02, 1.3, {css:{top:"438px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});

	// scene02
	var s02obj01 = $('#scene02 .obj07');
	TweenMax.to(s02obj01, 1.3, {css:{top:"560px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	
	// scene03
	var s03obj01 = $('#scene03 .obj01');
	TweenMax.to(s03obj01, 1.1, {css:{top:"92px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	var s03obj02 = $('#scene03 .obj06');	
	TweenMax.to(s03obj02, 1.7, {css:{top:"128px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	var s03obj03 = $('#scene03 .obj07');
	TweenMax.to(s03obj03, 1.3, {css:{top:"500px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	var s03obj04 = $('#scene03 .bg03');
	TweenMax.to(s03obj04, 2.2, {css:{top:"684px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});

	// scene04
	var s04obj01 = $('#scene04 .obj01');
	TweenMax.to(s04obj01, 1.7, {css:{top:"320px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	var s04obj02 = $('#scene04 .obj04');
	TweenMax.to(s04obj02, 1.1, {css:{top:"513px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});

	// scene05
	var s05obj01 = $('#scene05 .obj02');
	TweenMax.to(s05obj01, 1.6, {css:{top:"262px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	var s05obj02 = $('#scene05 .obj08');
	TweenMax.to(s05obj02, 1.3, {css:{top:"450px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	// scene06
	var s06obj01 = $('#scene06 .obj01');
	TweenMax.to(s06obj01, 1.5, {css:{top:"556px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	var s06obj02 = $('#scene06 .obj04');
	TweenMax.to(s06obj02, 1.3, {css:{top:"548px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	// scene07
	var s07obj01 = $('#scene07 .obj03');
	TweenMax.to(s07obj01, 1.7, {css:{top:"600px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	var s07obj02 = $('#scene07 .obj05');
	TweenMax.to(s07obj02, 1.3, {css:{top:"445px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	// scene08
	var s08obj01 = $('#scene08 .obj01');
	TweenMax.to(s08obj01, 1.8, {css:{top:"366px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	var s08obj02 = $('#scene08 .obj03');
	TweenMax.to(s08obj02, 1.3, {css:{top:"560px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});

	// scene09
	var s09obj01 = $('#scene09 .obj03');
	TweenMax.to(s09obj01, 1.3, {css:{top:"715px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});	
	var s09obj02 = $('#scene09 .obj04');
	TweenMax.to(s09obj02, 1.6, {css:{top:"676px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	

	$('.navi li a, .sceneBtn').click(function(){	
	    var posX = $($(this).attr('href')).position().left;
	    var posY = $($(this).attr('href')).position().top;
		var scrollL = $('#scrollBox').scrollLeft();
		var scrollT = $('#scrollBox').scrollTop();
		$('#scrollBox').stop().animate({'scrollLeft':posX+scrollL,'scrollTop':posY+scrollT},1200, 'easeInOutExpo');		
		return false;
	});


	$('#scrollBox').scroll(function(){ 
		var posX = $('#scrollBox').scrollLeft() ; 
		var posY = $('#scrollBox').scrollTop() ; 
		$('.wrap .cloud01').css({'left':posX*0.6, 'top':posY*0.3});
		$('.wrap .cloud02').css({'left':-posX*0.3, 'top':-posY*0.6});
		
		if(posX <= 1200 && posY >= 500){
			$('.navi li').removeClass('on').eq(0).addClass('on');
		}		
		if(posX >= 1200 && posY < 1000){
			$('.navi li').removeClass('on').eq(1).addClass('on');
		}
		if(posX >= 1200 && posY > 900){
			$('.navi li').removeClass('on').eq(2).addClass('on');
		}		
		if(posX >= 3200 && posY < 900){
			$('.navi li').removeClass('on').eq(3).addClass('on');
		}
		if(posX >= 3300 && posY > 900){
			$('.navi li').removeClass('on').eq(4).addClass('on');
		}
		if(posX >= 4800 && posY < 900){
			$('.navi li').removeClass('on').eq(5).addClass('on');
		}
		if(posX >= 5000 && posY > 900){
			$('.navi li').removeClass('on').eq(6).addClass('on');
		}
		if(posX >= 6200 && posY < 900){
			$('.navi li').removeClass('on').eq(7).addClass('on');
		}
		if(posX >= 6900 && posY > 700){
			$('.navi li').removeClass('on').eq(8).addClass('on');
		}
	})
	
	

});