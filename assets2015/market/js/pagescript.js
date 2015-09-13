

	function randomAlphaNum() {
		var rnd = Math.floor(Math.random() * 62);
		if (rnd >= 52) return String.fromCharCode(rnd - 4);
		else if (rnd >= 26) return String.fromCharCode(rnd + 71);
		else return String.fromCharCode(rnd + 65);
	}

  var $sp_nav = $(".special_nav");

  var toSet = $sp_nav.outerHeight();


	jQuery(document).ready(function($) {
            
            
            $(".special_nav ul li a").click(function(event){	
					//var toSet = $(this).parent(".special_nav").outerHeight();	
         //alert(toSet); 
					event.preventDefault();
					$('html,body').stop().animate({scrollTop:$(this.hash).offset().top - toSet+1},2000,'easeInOutSine');
                    $('.active').attr('class','');
                    $(this).parent('li').attr('class','active');
				});
	    //$(".home").css("margin-top",$("#navmenu").height());
           $cls =  $("#close-button");
             $(".sidebar-link").click(function(event){
                 var toSet = $("#topheader").height();	 
		 event.preventDefault();
		 $('html,body').stop().animate({scrollTop:$(this.hash).offset().top - toSet+1},2000,'easeInOutSine');
                 $cls.click();  
             });           


		$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
		});
                
                

		$('#galleryslideshow').bjqs({
		'height' : 400,
		'width' : 'auto',
		'responsive' : true,
		'animtype' : 'fade', // accepts 'fade' or 'slide'
		'animduration' : 450, // how fast the animation are
		'animspeed' : 4000, // the delay between each slide
		'automatic' : true, // automatic

		'showcontrols' : true, // show next and prev controls
		'centercontrols' : true, // center controls verically
		'nexttext' : '', // Text for 'next' button (can use HTML)
		'prevtext' : '', // Text for 'previous' button (can use HTML)
		'showmarkers' : false, // Show individual slide markers
		'centermarkers' : false, // Center markers horizontally

		'keyboardnav' : true, // enable keyboard navigation
		'hoverpause' : true, // pause the slider on hover

		'usecaptions' : true, // show captions for images using the image title tag
		'randomstart' : true, // start slider at random slide
		'responsive' : true // enable responsive capabilities (beta)
		});

		$('#galleryslideshow2').bjqs({
		'height' : 400,
		'width' : 'auto',
		'responsive' : true,
		'animtype' : 'fade', // accepts 'fade' or 'slide'
		'animduration' : 450, // how fast the animation are
		'animspeed' : 4000, // the delay between each slide
		'automatic' : true, // automatic

		'showcontrols' : true, // show next and prev controls
		'centercontrols' : true, // center controls verically
		'nexttext' : '', // Text for 'next' button (can use HTML)
		'prevtext' : '', // Text for 'previous' button (can use HTML)
		'showmarkers' : false, // Show individual slide markers
		'centermarkers' : false, // Center markers horizontally

		'keyboardnav' : true, // enable keyboard navigation
		'hoverpause' : true, // pause the slider on hover

		'usecaptions' : true, // show captions for images using the image title tag
		'randomstart' : true, // start slider at random slide
		'responsive' : true // enable responsive capabilities (beta)
		});

		$('#galleryslideshow3').bjqs({
		'height' : 300,
		'width' : 'auto',
		'responsive' : true,
		'animtype' : 'fade', // accepts 'fade' or 'slide'
		'animduration' : 450, // how fast the animation are
		'animspeed' : 2500, // the delay between each slide
		'automatic' : true, // automatic

		'showcontrols' : true, // show next and prev controls
		'centercontrols' : true, // center controls verically
		'nexttext' : '', // Text for 'next' button (can use HTML)
		'prevtext' : '', // Text for 'previous' button (can use HTML)
		'showmarkers' : false, // Show individual slide markers
		'centermarkers' : false, // Center markers horizontally

		'keyboardnav' : true, // enable keyboard navigation
		'hoverpause' : true, // pause the slider on hover

		'usecaptions' : true, // show captions for images using the image title tag
		'randomstart' : true, // start slider at random slide
		'responsive' : true // enable responsive capabilities (beta)
		});
		
  var controller = false;
  var hammertime;
  var parallaxImageHeight = 300;
  var scrollBreakpoint = 1080; 
  var parallaxScene1, parallaxScene2, parallaxScene3, parallaxScene4;
  var insightsImageScene, insightsTextScenes = [], wordsScene;
  var wordsTimeline;
  var insightsTextTweenItems;
  var insightsImageTween;
  var insightsTextTweens ;
  var getStartedOwlCarusell;
  var doinInsight = false;
  var doit; 

  var useTranslate3d = false;
  var parralaxScrollImageTween;

  if(useTranslate3d){
  	parralaxScrollImageTweenFrom = { y:0 };
  	parralaxScrollImageTweenTo = { y:400, ease: Linear.easeNone };

  } else {
  	parralaxScrollImageTweenFrom = { y:0, z:0.01 };
  	parralaxScrollImageTweenTo = { y:400, z:0.01, ease: Linear.easeNone };
  }

  setHeight();
  doScrollMagic();

 // alert($('.image').width());



  function doScrollMagic(){
  	var windowWidth = $(window).innerWidth();
  	var windowHeight = $(window).innerHeight();

  	if(windowWidth >= scrollBreakpoint ){
  		controller = new ScrollMagic({});


      var imageOffset = windowHeight / 2 * -1;
      var parallaxImageDuration = windowHeight + parallaxImageHeight;

     

doInsightsScene();

	  var parallaxImage1 = $('.parallax-first .parallax-image');
      var parallaxTrigger1 = $('.parallax-first');
      var parallaxTween1 = new TweenMax.fromTo(parallaxImage1, 1, parralaxScrollImageTweenFrom , parralaxScrollImageTweenTo);

      parallaxScene1 = new ScrollScene({triggerElement: parallaxTrigger1, duration: parallaxImageDuration, offset: imageOffset})
              .setTween(parallaxTween1)
              .addTo(controller);


      var parallaxImage2 = $('.parallax-second .parallax-image');
      var parallaxTrigger2 = $('.parallax-second');
      var parallaxTween2 = new TweenMax.fromTo(parallaxImage2, 1, parralaxScrollImageTweenFrom , parralaxScrollImageTweenTo);

      parallaxScene2 = new ScrollScene({triggerElement: parallaxTrigger2, duration: parallaxImageDuration, offset: imageOffset})
              .setTween(parallaxTween2)
              .addTo(controller);

      var parallaxImage3 = $('.parallax-third .parallax-image');
      var parallaxTrigger3 = $('.parallax-third');
      var parallaxTween3 = new TweenMax.fromTo(parallaxImage3, 1, parralaxScrollImageTweenFrom , parralaxScrollImageTweenTo);

      parallaxScene3 = new ScrollScene({triggerElement: parallaxTrigger3, duration: parallaxImageDuration, offset: imageOffset})
              .setTween(parallaxTween3)
              .addTo(controller);

      var parallaxImage4 = $('.parallax-fourth .parallax-image');
      var parallaxTrigger4 = $('.parallax-fourth');
      var parallaxTween4 = new TweenMax.fromTo(parallaxImage4, 1, parralaxScrollImageTweenFrom , parralaxScrollImageTweenTo);

      parallaxScene4 = new ScrollScene({triggerElement: parallaxTrigger4, duration: parallaxImageDuration, offset: imageOffset})
              .setTween(parallaxTween4)
              .addTo(controller);


      
  }
}


  function doInsightsScene(){
  	
  	doinInsight = true;
  	var windowWidth = $(window).innerWidth();
  	var windowHeight = $(window).innerHeight();
  	var mySceneObj = $('.why-page');

  	var myScrollObj = $('.why-page ul.insights .item');
  	var objScrollDist = Math.abs( $('.why-page ul.insights').innerHeight() - windowHeight + 164);
  	var $myTexts = $('ul.insights .body');

  	var showText = function(index) {
  		
  		$myTexts.each(function () {
  			TweenMax.killTweensOf(this);
  		});
  		TweenMax.to( $myTexts , 0.4, { autoAlpha: 0, ease: Linear.easeNone } );
  		if (index >= 0) {
  			TweenMax.to( $myTexts[index], 0.4, { autoAlpha: 1, ease: Linear.easeNone, delay: 0.4} );
  		}
  	};

  	$myTexts.each(function(key, value){
  		var textOffset = (key == 0) ? -1*windowHeight/2 : 0;
    
      var scene = new ScrollScene( { triggerElement: $(value).next(), offset: textOffset, duration: 0} )
      .on("start", function ( e ) { showText(e.scrollDirection === "REVERSE" ? key-1 : key); })
      .addTo(controller);
      insightsTextScenes.push(scene);
  });

  	insightsImageTween = new TweenMax.to( myScrollObj, 100, { y: '-=' + objScrollDist, ease: Linear.easeNone } );

    insightsImageScene = new ScrollScene({triggerElement: mySceneObj, offset: windowHeight/2 ,duration: 500})
    .setTween(insightsImageTween)
    .setPin(mySceneObj,{pushFollowers: true, spacerClass: 'content-wrap'})
    .addTo(controller);

    doinInsight = false;
}

function changeInsightScene(){
	var windowWidth = $(window).innerWidth();
	var windowHeight = $(window).innerHeight();
	var objScrollDist = Math.abs( $('.why-page ul.insights').innerHeight() - windowHeight + 164);
   
    insightsImageTween.progress(0);
    insightsImageTween.updateTo({css: {y: '-=' + objScrollDist}}, true);
    insightsImageScene.setTween(insightsImageTween);
    insightsImageScene.offset( windowHeight/2 );
    insightsImageScene.update(true);
}


  $(window).on("resize", function () {
  	clearTimeout(doit);
  	doit = setTimeout(resizedw, 150);
  });

  function resizedw(){
    toSet = $sp_nav.outerHeight();
  	windowHeight = $(window).innerHeight();
  	windowWidth = $(window).innerWidth();
  	imageOffset = windowHeight / 2 * -1;

  	parallaxImageDuration = windowHeight + parallaxImageHeight;

    if(windowWidth >= scrollBreakpoint){
    	$('.first-scene-pin').css({
    		"height": windowHeight,
    		"min-height": windowHeight
    	});

    	$('.second-scene-pin').css({
    		"height": windowHeight,
    		"min-height": windowHeight
    	});
    }
    setHeight();
    toggleController();
}


  function setHeight() {
    var windowHeight = $(window).height(); 
    var windowWidth = $(window).width(); 

    /*
    $('body.new-frontpage #content article').each(function(){
    	if( $( this ).hasClass('top-part') ){
    		$( this ).css( 'height', windowHeight );
    	} else if( $( this ).hasClass('part2') ){
    		if(windowWidth > scrollBreakpoint ){
    			$( this ).find( '.content' ).css( 'height', windowHeight);
    		} else {
    			$( this ).css( 'height', 'auto' );
    			$( this ).find( '.content' ).css( 'height', 'auto' );
    		}
    	}
    	else if( $( this ).hasClass('part6') ){
    		if(windowWidth > scrollBreakpoint ){
    			$( this ).find( '.content' ).css( 'height', windowHeight);
    		} else {
    			$( this ).find( '.content' ).css( 'height', 'auto' );
    		}
    	}
    });
    if( $('body').hasClass('new-frontpage') && windowWidth >= scrollBreakpoint ){
    	$('#content').css( 'padding-top', windowHeight );
    } else {
    	$('#content').css( 'padding-top', 0 );
    }
   */

};



  function toggleController(){
  	var windowWidth = $(window).innerWidth();
  	if(windowWidth >= scrollBreakpoint ){

  		if( !controller ){
  			doScrollMagic();
  		} else {
       

        parallaxScene1.duration( parallaxImageDuration );
        parallaxScene1.offset( imageOffset );

        parallaxScene2.duration( parallaxImageDuration );
        parallaxScene2.offset( imageOffset );

        parallaxScene3.duration( parallaxImageDuration );
        parallaxScene3.offset( imageOffset );

        parallaxScene4.duration( parallaxImageDuration );
        parallaxScene4.offset( imageOffset );

        changeInsightScene();
    }

} else {
	if( controller ){
		
		if(insightsImageScene){
			insightsImageScene.destroy(true);

			$.each(insightsTextScenes, function () {
				this.removeTween(true);
				this.enabled(false);
			});

			TweenMax.set( $('.why-page'), {clearProps:"all"});
			TweenMax.set( $('.why-page ul.insights .item'), {clearProps:"all"});
			TweenMax.set( $('.why-page ul.insights .body'), {clearProps:"all"});
		}

		

		controller = controller.destroy(true);
		controller = false;
	}
}
}

});
