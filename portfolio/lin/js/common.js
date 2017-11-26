
setBodyHeight = function(container){
	$(container).css("min-height",windowHeight);
}
shortenString = function(element, maxlength){
	$(element).each(function(i) {
		var stringPre = $(this).text();
		var string = stringPre;
		var stringLength = stringPre.length;
		if(maxlength > stringLength){
			$(this).text(stringPre);
		}
		if(maxlength < stringLength){
			//get position of nearest space to finish line on the word
			var spacePosition = string.indexOf(" ", maxlength);
			string = string.substring(0, spacePosition);
			//change the text inside tag
			$(this).text(string + " ...");
		}
	});
}

addDropdownFooterMenu = function(){
	var winWidth = $(window).width();
	if(winWidth < 761){
		$(".footer_item-title").click(function(){
			if($(this).hasClass("active")){
				$(".footer_item-title").removeClass("active").next().slideUp();
			}else{
				$(".footer_item-title").removeClass("active").next().slideUp();
				$(this).addClass("active").next().slideDown();
			}
		});
	}
}


$(window).load(function() {
	// setBodyHeight("#page");
});
	$(window).resize(function(){
		// setBodyHeight("#page");
		// addDropdownFooterMenu();
	});


$(function() {

	addDropdownFooterMenu();

	//show search in top
	$(".mainHeader_top_search a").click(function(e){
		e.preventDefault();
		$(this).toggleClass('active').prev().toggleClass('active');
	});

	//fixed top menu
	$(window).scroll(function() {
		if ($(window).scrollTop() > 41) {
			$(".mainHeader_bottom").addClass("fixed");
		}
		else{
			$(".mainHeader_bottom").removeClass("fixed");
		}
	});

	//scroll down
	$(".firstScreen_scrollToBottom-wrap").click(function(e){
		e.preventDefault();
		var sectionTop = $(".homeTopBlock_items").offset().top;
		$('html, body').animate({ scrollTop: sectionTop - 70}, 500);
	});

	//remove preload class
	setTimeout(function () {
		$(".mainHeader-wrap, .firstScreen_title, .firstScreen_scrollToBottom").removeClass("preload");
	}, 300);
	setTimeout(function () {
		$(".homeTopBlock_item-left, .homeTopBlock_item-centerTop, .homeTopBlock_item-centerBottom, .homeTopBlock_item-right").removeClass("preload");
	}, 600);




	// open mob menu
	$(".mainHeader_bottom_menu >ul").clone().appendTo(".mainHeader_top_menu").wrap('<div id="my-menu"></div>');
	$("#my-menu").mmenu({
		navbar: {
			"add": true,
			"title": "Меню",
		},
		extensions: [
		  "pagedim-black"
		],
		"offCanvas": {
		  "position": "right"
		},
	});
	$(".mainHeader_mobileToggle").click(function(){
		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		$(this).toggleClass("active");
	});
	var mobSearchClone = $(".mainHeader_mobileSearch").clone();
	$(".mainHeader_mobileSearch").remove();
	mobSearchClone.insertBefore(".mm-panels");
	$(".mainHeader_top_lang").clone().insertBefore(".mainHeader_mobileSearch").wrap('<div class="mainHeader_top_lang-wrapper"></div>');
	$(".mainHeader_top_enter").clone().insertBefore(".mainHeader_top_lang-wrapper .mainHeader_top_lang")
	$(".mainHeader_top_menu >ul").clone().insertBefore(".mm-panels").wrap('<div class="mainHeader_top_menu-wrapper"></div>');
	$(".mainHeader_top_menu-wrapper").addClass("scroll");

	$(".firstScreen_bg").removeClass("preload");

	$(".mainHeader_top_menu-wrapper >ul >li.menu-item-has-children >a").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
		$(this).next().slideToggle();
	});



	///fancybox
	$(".fancybox").fancybox({
		afterShow: function() {
			$('.fancybox-wrap').swipe({
				swipe : function(event, direction) {
					if (direction === 'right' || direction === 'up') {
						$.fancybox.prev( direction );
					} else {
						$.fancybox.next( direction );
					}
				}
			});
		},
		afterLoad : function() {
			$('.fancybox-wrap').swipe({
				swipe : function(event, direction) {
					if (direction === 'right' || direction === 'up') {
						$.fancybox.prev( direction );
					} else {
						$.fancybox.next( direction );
					}
				}
			});
		},
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});

	$(".fancybox-media").fancybox({
		helpers		: {
			title	: { type : 'inside' },
			media : {}
		}
	});

	// sliders
	$('.homeCategories_slider').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		nav:true,
		navText : ['<span class="pages_slider-prev"></span>', '<span class="pages_slider-next"></span>'],
		dots : false,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2,
				margin: 15
			},
			1000:{
				items:4,
				margin: 15
			}
		}
	});
	$('.home_productCard_slider').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		nav:true,
		navText : ['<span class="pages_slider-prev"></span>', '<span class="pages_slider-next"></span>'],
		dots : false,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			500:{
				items:2,
				margin:15
			},
			1000:{
				items:3,
				margin: 13
			}
		}
	});
	$('.pages_productCard_slider').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		nav:true,
		navText : ['<span class="pages_slider-prev"></span>', '<span class="pages_slider-next"></span>'],
		dots : false,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			500:{
				items:2,
				margin:15
			},
			1000:{
				items:4,
				margin: 13
			}
		}
	});

  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 131,
    itemMargin: 15,
    asNavFor: '#slider',
    minItems: 2,
    maxItems: 3
  });
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });

  //
  $(".productCard_right-title").clone().addClass("productCard_right-title-mobile").insertBefore(".productCard_left");
  $(".productCard_right-sticker").clone().addClass("productCard_right-sticker-mobile").insertBefore("#slider");


  //show all in brand page
  $('.brandPage-btn a').click(function(e){
  	e.preventDefault();
  	$(this).parent().toggleClass('active');
  	$('.brandPage .textBlock').toggleClass('showAll');
  });

  //show all in catalogPageCat page
  $('.catalogPageCat_text-btn a').click(function(e){
  	e.preventDefault();
  	$(this).parent().toggleClass('active');
  	$('.catalogPageCat_text .textBlock').toggleClass('showAll');
  });


	//mobile accordeon on product card page
	$(".productCardTabs-wrapper")
		.clone()
		.removeClass("productCardTabs-wrapper-desktop")
		.addClass("productCardTabs-wrapper-mobile")
		.insertAfter(".productCardTabs-wrapper-desktop");
	$(".productCardTabs-wrapper")
		.not(".productCardTabs-wrapper-desktop")
		.children(".productCardTabs")
		.removeClass("productCardTabs-desktop")
		.addClass("productCardTabs-mobile")
		.children()
		.removeClass("productCardTab-desktop")
		.addClass("productCardTab-mobile")
		.first()
		.addClass("active");
	$(".productCardTabs-wrapper")
		.not(".productCardTabs-wrapper-desktop")
		.children(".productCardTab_content")
		.removeClass("productCardTab_content-desktop")
		.addClass("productCardTab_content-mobile")
		.children()
		.removeClass("productCardTab_item-desktop")
		.addClass("productCardTab_item-mobile");
	$(".productCardTab_item-mobile:nth-child(1)").remove().insertAfter(".productCardTab-mobile:nth-child(1)");
	$(".productCardTab_item-mobile:nth-child(1)").remove().insertAfter(".productCardTab-mobile:nth-child(3)").slideUp();
	$(".productCardTab_item-mobile:nth-child(1)").remove().insertAfter(".productCardTab-mobile:nth-child(5)").slideUp();

	$(".productCardTab-mobile").click(function(){
		if($(this).hasClass("active")){
			$(".productCardTab-mobile").removeClass("active").next().slideUp();
		}else{
			$(".productCardTab-mobile").removeClass("active").next().slideUp();
			$(this).addClass("active").next().slideDown();
		}
	});


	//
	$("#jqslider_handle").parent().addClass("mobPadding");

	// tabs on product card page
	$(".productCardTab_item-desktop").not(":first").hide();
	$(".productCardTabs-wrapper-desktop .productCardTab-desktop").click(function(){
		if(!$(this).attr('href'))
		{
			$(".productCardTabs-wrapper-desktop .productCardTab-desktop").removeClass("active").eq($(this).index()).addClass("active");
			$(".productCardTab_item-desktop").hide().eq($(this).index()).fadeIn();
		}
	}).eq(0).addClass("active");



	//mobile accordeon on personal cabinet page
	$(".cabinetPageTabs-wrapper")
		.clone()
		.removeClass("cabinetPageTabs-wrapper-desktop")
		.addClass("cabinetPageTabs-wrapper-mobile")
		.insertAfter(".cabinetPageTabs-wrapper-desktop");
	$(".cabinetPageTabs-wrapper")
		.not(".cabinetPageTabs-wrapper-desktop")
		.children(".cabinetPageTabs")
		.removeClass("cabinetPageTabs-desktop")
		.addClass("cabinetPageTabs-mobile")
		.children()
		.removeClass("cabinetPageTab-desktop")
		.addClass("cabinetPageTab-mobile")
		.first()
		.addClass("active");
	$(".cabinetPageTabs-wrapper")
		.not(".cabinetPageTabs-wrapper-desktop")
		.children(".cabinetPageTab_content")
		.removeClass("cabinetPageTab_content-desktop")
		.addClass("cabinetPageTab_content-mobile")
		.children()
		.removeClass("cabinetPageTab_item-desktop")
		.addClass("cabinetPageTab_item-mobile");
	$(".cabinetPageTab_item-mobile:nth-child(1)").remove().insertAfter(".cabinetPageTab-mobile:nth-child(1)");
	$(".cabinetPageTab_item-mobile:nth-child(1)").remove().insertAfter(".cabinetPageTab-mobile:nth-child(3)").slideUp();

	$(".cabinetPageTab-mobile").click(function(){
		if($(this).hasClass("active")){
			$(".cabinetPageTab-mobile").removeClass("active").next().slideUp();
		}else{
			$(".cabinetPageTab-mobile").removeClass("active").next().slideUp();
			$(this).addClass("active").next().slideDown();
		}
	});

	// tabs on personal cabinet page
	$(".cabinetPageHistory-wrapper").addClass("afterLoad");
	$(".cabinetPageTab_item-desktop").not(":first").hide();
	$(".cabinetPageTabs-wrapper-desktop .cabinetPageTab-desktop").click(function(){
		$(".cabinetPageTabs-wrapper-desktop .cabinetPageTab-desktop").removeClass("active").eq($(this).index()).addClass("active");
		$(".cabinetPageTab_item-desktop").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	//show more order history items
	$('.cabinetPageTab_item-mobile .cabinetPageHistory-wrap').not('.cabinetPageTab_item-mobile .cabinetPageHistory-wrap:first-child').hide();
	$('.cabinetPageHistory-wrap-btn a').click(function(e){
		e.preventDefault();
		$('.cabinetPageTab_item-mobile .cabinetPageHistory-wrap').not('.cabinetPageTab_item-mobile .cabinetPageHistory-wrap:nth-child(1)').show();
		$(this).parent().hide();
	});



	//filters accordeon
	$('.catalogPage_sidebar_item-title').click(function(){
		$(this).toggleClass('active').next().slideToggle();
	});

	jQuery("#jqslider").slider({
		min: parseInt($('#minCost').attr('data-min'), 10),
		max: parseInt($('#maxCost').attr('data-max'), 10),
		values: [0,1000],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost").val(jQuery("#jqslider").slider("values",0));
			jQuery("input#maxCost").val(jQuery("#jqslider").slider("values",1));
	    },
	    slide: function(event, ui){
			jQuery("input#minCost").val(jQuery("#jqslider").slider("values",0));
			jQuery("input#maxCost").val(jQuery("#jqslider").slider("values",1));
	    }
	});
	jQuery("input#minCost").change(function(){
		var value1=jQuery("input#minCost").val();
		var value2=jQuery("input#maxCost").val();

	    if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost").val(value1);
		}
		jQuery("#jqslider").slider("values",0,value1);
	});


	jQuery("input#maxCost").change(function(){
		var value1=jQuery("input#minCost").val();
		var value2=jQuery("input#maxCost").val();

		// if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}
		if (value2 > 20000) { value2 = 20000; jQuery("input#maxCost").val(20000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost").val(value2);
		}
		jQuery("#jqslider").slider("values",1,value2);
	});

	chackNumberValue = function(el){
		var numberValue = el.text();
		var array = [];
		for(i=0;i<numberValue.length;i++){
			if(numberValue[i] !== " "){
				array.push(numberValue[i]);
			}
		}
		return array.join("");
	}

	var jqsliderHandleMin = parseInt( chackNumberValue( $(".jqslider_handle-min").children("span").first() ) );
	var jqsliderHandleMax = parseInt( chackNumberValue( $(".jqslider_handle-max").children("span").first() ) );

	var handle = $( "#custom-handle" ).children().children().first();
	var step=0;
	var result=0;
	jQuery("#jqslider_handle").slider({
		range: "min",
		value: jqsliderHandleMin,
		step: parseInt(jQuery("#jqslider_handle").attr('data-step')),
		min: jqsliderHandleMin,
		max: jqsliderHandleMax,
		create: function() {
			handle.text( $( this ).slider( "value" ) );
		},
		slide: function( event, ui ) {
			handle.text( ui.value );

			step = (ui.value-jqsliderHandleMin)/parseInt(jQuery("#jqslider_handle").attr('data-step'));
			if(ui.value>=parseInt(jQuery("#jqslider_handle").attr('data-lengthfullprice')))
			{
				result = parseFloat($('#jqslider_handle').attr('data-price'));
			}
			else
			{
				result = parseFloat($('#jqslider_handle').attr('data-minprice'))+(step*parseFloat($('#jqslider_handle').attr('data-stepprice')));
			}

			$('.productCard_right-price-txt').text(Math.floor(result * 100)/100+" грн.");
			$('#itemsize').val(step);
		}
	});



	//clone price filter on catalog page for mobile version
	$(".catalogPage .searchPageInner").clone().addClass("searchPageInner-mobile").insertBefore(".catalogPage_results");

	//show/hide filter sidebar on catalog page for mobile version
	$(".catalogPage_sidebar-toggle a").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active")){
			$(".catalogPage_sidebar-toggle a").removeClass("active").parent().next().slideUp();
		}else{
			$(".catalogPage_sidebar-toggle a").removeClass("active").parent().next().slideUp();
			$(this).addClass("active").addClass("active").parent().next().slideDown();
		}
	});

	//toggle menu on catalog categories page
	$(".hasSubMenu-arrow").click(function(){
		$(this).parent().toggleClass("active").children("ul").first().slideToggle();
	});

	//////////////////////////////////
	//start popups
	//////////////////////////////////
	$(".popup-wrapper").appendTo('body');
	var popup = {
		close: function(){
			$(".popup-wrapper").fadeOut();
			$("html").removeClass("fancybox-lock");
		},
		open: function(){
			$("html").addClass("fancybox-lock");
		}
	}
	$(".popup .close").on("click", function(){
		popup.close();
	});
	$(".popup-wrapper").on("click", function(event) {
		if ($(this).is(":visible")){
			if ($(event.target).closest(".popup").length) return;
			popup.close();
			event.stopPropagation();
		}
	});
	$(".mainHeader_top_enter-desktopFirst").on("click", function(e){
		e.preventDefault();
		popup.open();
		$("#popup_enter").fadeIn(400);
	});
	$(".popup_btn_reg a").on("click", function(e){
		e.preventDefault();
		popup.close();
		$("#popup_enter").fadeOut(400);
		popup.open();
		$("#popup-reg").fadeIn(400);
	});
	$(".popup_btn_fogetPass a").on("click", function(e){
		e.preventDefault();
		popup.close();
		$("#popup_enter").fadeOut(400);
		popup.open();
		$("#popup-fogetPass").fadeIn(400);
	});

	//////////////////////////////////
	//end popups
	//////////////////////////////////


	//animation
	$(".homeCategories_item").animated("bounceInUp");
	$(".homeCategories_slider, .homeProductCard_left").animated("fadeInLeft");
	$(".home_productCard_slider").animated("fadeInRight");

	//set sticker top position on product card page
	// var stickerTop = $(".productCard_left-title").outerHeight();
	// $(".productCard_left-sticker").css({"top": stickerTop});




	// scroll region
	$('.scroll').jScrollPane({
		showArrows: false,
		horizontalGutter: 10,
		einitialiseOnImageLoad: true,
		autoReinitialise :true
	});

  //styles for select
  $('.searchPage_right-select select, .orderPage_item-select select, .catalogPage_sidebar_item-select select, .catalogPage_sidebar_item-inputRadio, .catalogPage_sidebar_item-inputCheckbox').styler({
		selectSearch: false
	});


});





