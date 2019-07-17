
function parallax(){
	var nav = $(".menu ul li");
	var contents = $("#content > section");

	nav.click(function(e){
		e.preventDefault();
		var target = $(this);
		var index = target.index();
		var section = contents.eq(index);
		var offset = section.offset().top;
		$("html,body").animate({scrollTop:offset},600,"easeInOutExpo");
	});

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		if(wScroll >= contents.eq(0).offset().top){
			nav.removeClass("active");
			nav.eq(0).addClass("active");
		}
		if(wScroll >= contents.eq(1).offset().top){
			nav.removeClass("active");
			nav.eq(1).addClass("active");
		}
		if(wScroll >= contents.eq(2).offset().top){
			nav.removeClass("active");
			nav.eq(2).addClass("active");
		}
		if(wScroll >= contents.eq(3).offset().top){
			nav.removeClass("active");
			nav.eq(3).addClass("active");
		}
		if(wScroll >= contents.eq(4).offset().top){
			nav.removeClass("active");
			nav.eq(4).addClass("active");
		}
		if(wScroll >= contents.eq(5).offset().top){
			nav.removeClass("active");
			nav.eq(5).addClass("active");
		}

		if(wScroll >= contents.eq(1).offset().top - $(window).height()/3){
			contents.eq(1).find(".sec2").addClass("show");
		}
		if(wScroll >= contents.eq(2).offset().top - $(window).height()/3){
			contents.eq(2).find(".sec3").addClass("show");
		}
		if(wScroll >= contents.eq(3).offset().top - $(window).height()/3){
			contents.eq(3).find(".sec4").addClass("show");
		}
		if(wScroll >= contents.eq(4).offset().top - $(window).height()/3){
			contents.eq(4).find(".sec5").addClass("show");
		}
		if(wScroll >= contents.eq(5).offset().top - $(window).height()/3){
			contents.eq(5).find(".sec6").addClass("show");
		}

		if(wScroll >= $(".sbox.img1").offset().top - $(window).height()/2){
			$(".sbox.img1").addClass("show");
		}
		if(wScroll >= $(".sbox.img2").offset().top - $(window).height()/2){
			$(".sbox.img2").addClass("show");
		}
		if(wScroll >= $(".sbox.img3").offset().top - $(window).height()/2){
			$(".sbox.img3").addClass("show");
		}
		if(wScroll >= $(".sbox.img4").offset().top - $(window).height()/2){
			$(".sbox.img4").addClass("show");
		}
		if(wScroll >= $(".sbox.img5").offset().top - $(window).height()/2){
			$(".sbox.img5").addClass("show");
		}
	});
};


function fullNav(){
	$(".bar_icon").click(function(){
		$(this).toggleClass("effect");
		$(".outside").toggleClass("effect");
	});
}

function bar(){
	$(".bar_icon").click(animation);
	function animation(){
		if($(".bar_icon .bar").hasClass("active")){
			$(".bar_icon .bar").removeClass("active");
			$(".bar_icon .bar").addClass("notActive");
		} else {
			$(".bar_icon .bar").removeClass("notActive");
			$(".bar_icon .bar").addClass("active");
		}
	}
};


function main_ainamiton() {
	var tl = new TimelineLite();
	tl.from(".sm1", 0.8, {left:"-100",autoAlpha:0, ease: SlowMo.easeOut, delay:2.5});
	tl.from(".sm2", 0.8, {left:"300", autoAlpha:0, ease: SlowMo.easeOut},"-=0.5");
	tl.from(".sm3", 0.6, {left:"-20", autoAlpha:0, ease: SlowMo.easeOut},"-=0.3");
	tl.from(".sm4", 0.6, {left:"20", autoAlpha:0, ease: SlowMo.easeOut},"-=0.3");
	tl.staggerFrom(".sbox ul li",0.5,{scale:0, rotation:300,transformOrigin:"left",autoAlpha:0},0.1,"stagger");
	tl.play();
};


function main_slide() {
	$(".slide_bg").each(function(){
		var slides = $(this).find(">div"),		 
			slideCount = slides.length,				
			currentIndex = 0; 								 
				
		slides.eq(currentIndex).fadeIn(2000);	
		setInterval(showNextSlide,20000);
		
		function showNextSlide(){
			var nextIndex = (currentIndex + 1) % slideCount;
					
			slides.eq(currentIndex).fadeOut(2000);	
			slides.eq(nextIndex).fadeIn(2000);			
			
			currentIndex = nextIndex;	
		}
	});
};


function counter() {
   if ($('.counter .count').size()) {
      $c = $('.counter .count');

		$c.each(function () {
			var $this = $(this);
			$this.data('target', parseInt($this.html()));
			$this.data('counted', false);
			$this.html('0');
		});

		$(window).bind('scroll', function () {
		   var speed = 3000;

		   $c.each(function (i) {
		      var $t = $(this);
		      if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top){
		           $t.data('counted', true);

		           $t.animate({
		               dummy: 1
		           }, {
		               duration: speed,
		               step: function (now) {
		                   var $this = $(this);
		                   var val = Math.round($this.data('target') * now);
		                   $this.html(val);
		               },
		               easing: 'easeInOutQuart'
		           });

		           // easy pie
		           $('.pie').easyPieChart({
		               barColor: '#fff',
		               trackColor: '#000',
		               scaleColor: false,
		               lineWidth: 7,
		               size: 200,
		               lineCap: 'round',
		               animate: { duration: speed, enabled: true }
		           });
		       	}
		   });
		}).triggerHandler('scroll');
   }
}





