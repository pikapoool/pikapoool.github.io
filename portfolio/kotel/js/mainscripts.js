document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '');

$(window).load(function(){
	//equalHeight for carousels
	var ww = $(window).width();
	if(ww > 999){
		var ppihm = $('.pop_prod .owl-item.active').height();
		var ppih = ppihm - 60;
		$('.pop_prod_item').css("min-height", ppih);
	}

});

$(document).ready(function() {

	//select styler
	$('.sel_item select').styler({
		selectSearch: true
	});

	//change search value
	$(".search_block a").click(function(e){
		var sval = $(this).text();
		$(".search_block input:first").val(sval);
		e.preventDefault();
	});


	//open menu
	$(".main_mnu").children().children().children().hover(function(){
		$(this).parent().toggleClass("libd");
	});

	var ww = $(window).width();
	var wds;
	var wdss = ww - 314;
	var wddss = ww - 700;
	var wl1 = $(".main_mnu .drop1:nth-child(1)").outerWidth();
	var wl2 = $(".main_mnu .drop1:nth-child(2)").outerWidth();
	var wl3 = wl1 + wl2;
	$(".drop_menu").css({"width" : ww});
	$(".main_mnu ul .drop ul .drop .drop_sub ul .drop .drop_sub_sub").css({"width" : wdss});
	$(".main_mnu ul .drop ul .drop .drop_s ul li .drop_sub ul .drop .drop_sub_sub").css({"width" : wddss});
	$(".main_mnu .drop1:nth-child(2)").children("div").css({"left" : -wl1});
	$(".main_mnu .drop1:nth-child(3)").children("div").css({"left" : -wl3});
	$(".drop_menu").children().children(".drop").children("a").hover(function(e){
		if($(this).parent().children("div").hasClass("drop_s")){
			wds = ww - 400;
			$(".main_mnu ul .drop ul .drop .drop_sub").css({"width" : wds});
			$(".main_mnu ul .drop ul .drop .drop_sub").children("ul").css({"width" : wds});
		}else{
			wds = ww - 200;
			$(".main_mnu ul .drop ul .drop .drop_sub").css({"width" : wds});
			$(".main_mnu ul .drop ul .drop .drop_sub").children("ul").css({"width" : wds});
		}
		e.preventDefault();
	});

	$(document).click(function(event) {
		if ($(".drop_menu").is(":visible") ){
			if ($(event.target).closest(".main_mnu ul,.drop_menu ul, .drop_s, .drop_sub").length) return;
			$(".drop_menu").slideUp("slow");
			$(".drop_menu").children().children(".drop").children("a").removeClass("dm_act").next().fadeOut(); $(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
			$(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
			$(".main_mnu .drop1").removeClass("drop_on");
			event.stopPropagation();
		}
	});
	$(".main_mnu .drop1").children("a").click(function(e){
		if($(this).parent().hasClass("drop_on")){
			$(".drop_menu").slideUp("slow");
			$(".drop_menu").children().children(".drop").children("a").removeClass("dm_act").next().fadeOut();
			$(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
			$(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
			$(".main_mnu .drop1").removeClass("drop_on");
		}else{
			$(".drop_menu").slideUp("slow");
			$(".drop_menu").children().children(".drop").children("a").removeClass("dm_act").next().fadeOut();
			$(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
			$(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
			$(".main_mnu .drop1").removeClass("drop_on");
			$(this).parent().addClass("drop_on");
			var ths = $(this).next();
			setTimeout(function () { ths.slideDown("slow"); }, 180);
		}
		e.preventDefault();
	});


	//open sub_menu
	// $(".drop_menu").children().children(".drop").children("a").click(function(e){
	// 	if($(this).hasClass("dm_act")){
	// 		$(this).removeClass("dm_act").next().fadeOut();
	// 	}else{
	// 		$(".drop_menu").children().children(".drop").children("a").removeClass("dm_act").next().fadeOut();
	// 		$(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
	// 		$(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
	// 		$(this).addClass("dm_act").next().fadeIn();
	// 	}
	// 	e.preventDefault();
	// });
	// $(".drop_s").children().children(".drop").children("a").click(function(e){
	// 	if($(this).hasClass("ds_act")){
	// 		$(this).removeClass("ds_act").next().fadeOut();
	// 		$(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
	// 	}else{
	// 		$(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
	// 		$(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
	// 		$(this).addClass("ds_act").next().fadeIn();
	// 	}
	// 	e.preventDefault();
	// });
	// $(".drop_sub").children().children(".drop").children("a").click(function(e){
	// 	if($(this).hasClass("dsub_act")){
	// 		$(this).removeClass("dsub_act").next().fadeOut();
	// 	}else{
	// 		$(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
	// 		$(this).addClass("dsub_act").next().fadeIn();
	// 	}
	// 	e.preventDefault();
	// });

	//mobile menu start
	$("#my-menu").mmenu({
		navbar:{
			extensions : ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
			title : "Меню"
		}
	});
	$(".toggle_mnu").parent().click(function(e){
		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		$(".toggle_mnu").toggleClass("active");
		e.preventDefault();
	});

	$(".tab_search").parent().click(function(e){
		$(this).parent().toggleClass("active");
		$(".mmenu_tabs .search_block").slideToggle();
		$(".mmenu_tabs .search_block").toggleClass("tis");
		e.preventDefault();
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".tab_drop_s, .search_block form").length) return;
		$(".mmenu_tabs .search_block").slideUp();
		$(".tab_search").parent().parent().removeClass("active");
		event.stopPropagation();
	});
	$(".tab_call").parent().click(function(e){
		$(this).parent().toggleClass("active");
		$(".mmenu_tabs .btn_tel").slideToggle();
		e.preventDefault();
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".tab_drop_c, .btn_tel").length) return;
		$(".mmenu_tabs .btn_tel").slideUp();
		$(".tab_call").parent().parent().removeClass("active");
		event.stopPropagation();
	});
	$(".tab_lock").parent().click(function(e){
		$(this).parent().toggleClass("active");
		$(".mmenu_tabs .auth").slideToggle();
		e.preventDefault();
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".tab_drop_l, .auth").length) return;
		$(".mmenu_tabs .auth").slideUp();
		$(".tab_lock").parent().parent().removeClass("active");
		event.stopPropagation();
	});

	//mobile menu end


	//show selects start
	//in first column
	$("#sel1-styler ul").children().click(function(){
		if($("#sel1-styler ul").children().first().hasClass("selected")){
			$(this).parent().parent().parent().next().removeClass("stylerin");
		}else{
			$(this).parent().parent().parent().next().addClass("stylerin");
		};
	});
	$("#sel2-styler ul").children().click(function(){
		if($("#sel2-styler ul").children().first().hasClass("selected")){
			$(this).parent().parent().parent().next().removeClass("stylerin");
		}else{
			$(this).parent().parent().parent().next().addClass("stylerin");
		};
	});
	$("#sel3-styler ul").children().click(function(){
		if($("#sel3-styler ul").children().first().hasClass("selected")){
			$(this).parent().parent().parent().next().css("display", "none");
		}else{
			$(this).parent().parent().parent().next().css("display", "block");
		};
	});
	//in second column
	$("#sel21-styler ul").children().click(function(){
		if($("#sel21-styler ul").children().first().hasClass("selected")){
			$(this).parent().parent().parent().next().removeClass("stylerin");
		}else{
			$(this).parent().parent().parent().next().addClass("stylerin");
		};
	});
	$("#sel22-styler ul").children().click(function(){
		if($("#sel22-styler ul").children().first().hasClass("selected")){
			$(this).parent().parent().parent().next().css("display", "none");
		}else{
			$(this).parent().parent().parent().next().css("display", "block");
		};
	});
	//in third column
	$("#sel31").keyup(function(){
		if($(this).val() == ""){
			$(this).next().css("display", "none");
		}else{
			$(this).next().css("display", "block");
		};
	});
	//show selects end




	//destroy manuf_slider
	$(".btn_all a").click(function(e){
		$(this).parent().prev().show();
		$(this).parent().prev().prev().hide();
		$(this).parent().hide();
		e.preventDefault();
	});

	//show where used list
	$(".where_use a").click(function(e){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).next("div").slideUp();
		}else{
			$(".where_use a").parent().removeClass("active");
			$(".where_use a").next("div").slideUp();
			$(this).parent().addClass("active");
			$(this).next("div").slideDown();
		}
		e.preventDefault();
	});
	$(document).click(function(event) {
		if ($(".where_use_list").is(":visible")){
			if ($(event.target).closest(".where_use").length) return;
			$(".where_use a").parent().removeClass("active");
			$(".where_use_list").slideUp();
			event.stopPropagation();
		}
	});

	//show documents list
	$(".prod_docs a").click(function(e){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).next("div").slideUp();
		}else{
			$(".prod_docs a").parent().removeClass("active");
			$(".prod_docs a").next("div").slideUp();
			$(this).parent().addClass("active");
			$(this).next("div").slideDown();
		}
		e.preventDefault();
	});
	$(document).click(function(event) {
		if ($(".prod_docs_list").is(":visible")){
			if ($(event.target).closest(".prod_docs").length) return;
			$(".prod_docs a").parent().removeClass("active");
			$(".prod_docs_list").slideUp();
			event.stopPropagation();
		}
	});

	//show card2
	$(".pdr_top a").click(function(e){
		$(".prod_descr_change").fadeIn();
		e.preventDefault();
	});
	$(document).click(function(event) {
		if ($(".prod_descr_change").is(":visible") ){
			if ($(event.target).closest(".prod_descr_change .prod_descr_left, .prod_descr_change .prod_descr_right, .pdr_top").length) return;
			$(".prod_descr_change").fadeOut();
			event.stopPropagation();
		}
	});

	//show mobile tabs
	$(".tab_title").click(function(e){
		if($(this).hasClass("active")){
			$(this).removeClass("active").next("div").slideUp();
		}else{
			$(".tab_title").removeClass("active").next("div").slideUp();
			$(this).addClass("active").next("div").slideDown();
		}
		e.preventDefault();
	});

	//show mobile filters
	$(".cat_filt_mob p").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active").next().slideUp();
		}else{
			$(".cat_filt_mob p").removeClass("active").next().slideUp();
			$(this).addClass("active").next().slideDown();
		}
	});
	$(document).click(function(event) {
		if ($(".cat_filt_mob form").is(":visible") ){
			if ($(event.target).closest(".cat_filt_mob").length) return;
			$(".cat_filt_mob form").slideUp();
			$(".cat_filt_mob p").removeClass("active")
			event.stopPropagation();
		}
	});

	//change z in sheme item
	$(".sheme_prod_right li").mouseover(function(){;
		$(".sheme_prod_right").css("z-index","3");
		$(".sheme_prod_left").css("z-index","1");
	});
	$(".sheme_prod_right li").mouseout(function(){;
		$(".sheme_prod_right").css("z-index","1");
		$(".sheme_prod_left").css("z-index","3");
	});

	// Scroll
	$('.scroll').perfectScrollbar({
		wheelSpeed: 0.3,
		wheelPropagation: true,
		minScrollbarLength: 2
	});
	//sheme list scroll
	var ulh = $(".sheme_prod_right ul").height();
	var wv = $(window).width();
	if(ulh < 590){
		$(".list_wrap").removeClass("scroll").removeClass("ps-container").removeClass("ps-active-y").removeClass("ps-active-x");
		$(".sheme_prod_right ul li:last-child .sized").css("top", "50%");
	}


	//footer menu
	$(".mob_fuser p, .mob_fprod p, .mob_fmanuf p").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active").next().slideUp();
		}else{
			$(".fuser p, .fprod p, .fmanuf p").removeClass("active").next().slideUp();
			$(this).addClass("active").next().slideDown();
		}
	});


	//carousels start
	$('.pop_prod').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin:0,
		nav:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [ '<span></span>', '<span></span>' ],
		responsive:{
			0:{
				items:1,
				autoHeight:true,
			},
			1001:{
				items:4
			}
		}
	});
	$('.manuf_slider').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin:0,
		nav:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [ '<span></span>', '<span></span>' ],
		responsive:{
			0:{
				items:1
			},
			1001:{
				items:4
			}
		}
	});
	$('.prod_descr_left').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin:0,
		dots:true,
		// dotsEach: 2,
		nav:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [ '<span></span>', '<span></span>' ],
		items:1,
	});
	$('.cheaper_slider').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin:0,
		dots:true,
		nav:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [ '<span></span>', '<span></span>' ],
		items:1,
	});

	//если ранее просмотренных заказов меньше 3х то центрируем карусель
	var sln = $(".pes_item").length;
	if(sln < 3){
		$(".prod_early_slider .owl-stage").css("margin-left", "auto").css("margin-right", "auto");
	}
	$('.prod_early_slider').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin:0,
		dots:false,
		nav:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [ '<span></span>', '<span></span>' ],
		responsive:{
			0:{
				items:1
			},
			1001:{
				items:3
			}
		}
	});

	$('.cat_filt_slider').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin:0,
		dots:false,
		nav:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [ '<span></span>', '<span></span>' ],
		items:7,
	});
	//carousels end

	//zoom img
	var $easyzoom = $('.easyzoom').easyZoom();


	//choose filter
	$(".owl-item").click(function(){
		$(this).toggleClass("filt_choose");
	});



	// Categories Nav
	$(".categorie-prod .categorie-item .prod-name").on("click", function(e){
		$(this)
		.parent()
		.find(".categorie-menu")
		.toggle()
		.end()
		.toggleClass("act");

		e.preventDefault();
	});

	$(".btn-show-cat").on("click", function(e){
		$(".cat-nav-wrap").show();
		$(this).hide();
		$(".btn-hide-cat").css("display","block");

		e.preventDefault();
	});

	$(".btn-hide-cat").on("click", function(e){
		$(".cat-nav-wrap").hide();
		$(this).hide();
		$(".btn-show-cat").show();

		e.preventDefault();
	});

	// Disconunt Clone
	$(".discount-tube-drop .discount-tube-cont").clone(true).appendTo(".discount-tube-mob");


	$(".rec-car-cat .categorie-item").hover(function(){
		$(this).parents(".rec-car-socket").css("z-index", "101");
	}, function(){
		$(this).parents(".rec-car-socket").css("z-index", "100");
	});

	$('.rec-car-cat').slick({
		swipe:false,
		infinite: true,
		speed: 150,
		arrows: true,
		slidesToScroll: 1,
		slidesToShow: 4,
		dots: false,
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				swipe:true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1 }
			}]
		});




	// Images
	$('.image-column .image').on("click", function(e){
		var url = $(this).find('img').attr('rel');

		$('.main-img img').attr('src', url).parent().attr('href', url);
		$(".image-column .image").removeClass("act");
		$(this).toggleClass("act");

		e.preventDefault();
	});

	// Pretty Photo
	if($(".main-img").length){
		$('.main-img a').magnificPopup({type:'image', modal:false});
	}



	$(".prod-card-slider-mob").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.prod-card-nav'
	});

	$('.prod-card-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.prod-card-slider-mob',
		dots: false,
		arrows: false,
		centerMode: false,
		centerPadding: "9px",
		focusOnSelect: true
	});

	// Rec Carousel


	// Popup
	function popup_hide(){
		$(".popup-wrapper").fadeOut();
		//$("body").css({"overflow-y":"auto", "overflow-x":"auto"});
	}

	//popup callback
	$(".callbak").click(function(e){
		$(".popup-wrapper").fadeIn();
		$("body").toggleClass("noscroll");
		e.preventDefault();
	});

	$(".popup .close").on("click", function(){
		$("body").removeClass("noscroll");
		popup_hide();
	});

	$(".popup-wrapper").on("click", function(event) {
		if ($(this).is(":visible")){
			if ($(event.target).closest(".popup, .popup-scroll, .ps-scrollbar-y").length) return;
			popup_hide();
			$("body").removeClass("noscroll");
			event.stopPropagation();
		}
	});


	// Scroll Hold
	$(".s").height($(document).height()).find("body").css({"position":"fixed"});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$(".sheme_prod_filter.mob .active a").click(function(e){
		$(".sheme_prod_filter.mob li").show();
		e.preventDefault();
	});
	$(document).click(function(event) {
		if ($(".sheme_prod_filter.mob li").is(":visible") ){
			if ($(event.target).closest(".sheme_prod_filter.mob").length) return;
			$(".sheme_prod_filter.mob li").hide();
			event.stopPropagation();
		}
	});

});
