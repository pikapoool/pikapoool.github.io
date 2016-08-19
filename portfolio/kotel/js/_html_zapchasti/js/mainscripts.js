document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '');

$(window).load(function(){
    //equalHeight for carousels
    var ppihm = $('.pop_prod_item').height();
    var ppih = myFunc(ppihm, 92);
    function myFunc(a, b){
        return a + b;
    };
    $('.pop_prod_item').css("min-height", ppih);
});

$(document).ready(function() {

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
    $(".drop a").first().click(function(e){
        if($(this).parent().hasClass("drop_on")){
            $(".drop_menu").slideUp("slow");
            $(".drop_menu").children().children(".drop").children("a").removeClass("dm_act").next().fadeOut();
            $(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
            $(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
            $(this).parent().removeClass("drop_on");
        }else{
            // $(".drop_menu").slideDown(3000);
            setTimeout(function () { $(".drop_menu").slideDown("slow"); }, 180);
            $(this).parent().addClass("drop_on");
        }
        e.preventDefault();
    });

    //open sub_menu
    $(".drop_menu").children().children(".drop").children("a").click(function(e){
        if($(this).hasClass("dm_act")){
            $(this).removeClass("dm_act").next().fadeOut();
        }else{
            $(".drop_menu").children().children(".drop").children("a").removeClass("dm_act").next().fadeOut();
            $(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
            $(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
            $(this).addClass("dm_act").next().fadeIn();
        }
        e.preventDefault();
    });
    $(".drop_s").children().children(".drop").children("a").click(function(e){
        if($(this).hasClass("ds_act")){
            $(this).removeClass("ds_act").next().fadeOut();
            $(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
        }else{
            $(".drop_s").children().children(".drop").children("a").removeClass("ds_act").next().fadeOut();
            $(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
            $(this).addClass("ds_act").next().fadeIn();
        }
        e.preventDefault();
    });
    $(".drop_sub").children().children(".drop").children("a").click(function(e){
        if($(this).hasClass("dsub_act")){
            $(this).removeClass("dsub_act").next().fadeOut();
        }else{
            $(".drop_sub").children().children(".drop").children("a").removeClass("dsub_act").next().fadeOut();
            $(this).addClass("dsub_act").next().fadeIn();
        }
        e.preventDefault();
    });

    //width sub sub menu
    var wv = $(window).width();
    var wdss = wv - 500;
    var wddss = wv - 700;
    $(".drop_menu").css({"width" : wv});
    $(".main_mnu ul .drop ul .drop .drop_sub ul .drop .drop_sub_sub").css({"width" : wdss});
    $(".main_mnu ul .drop ul .drop .drop_s ul li .drop_sub ul .drop .drop_sub_sub").css({"width" : wddss});

    // Scroll
    $('.scroll').perfectScrollbar({
        wheelSpeed: 0.3,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
    $('select').styler({
        selectSearch: true
    });

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
        $(this).parent().prev().addClass("in").css("display", "block");
        $(this).parent().prev().prev().css("display", "none");
        $(this).parent().css("display", "none");
        e.preventDefault();
    });

    //show where used list
    $(".where_use a").click(function(e){
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass("active").next("div").slideUp();
        }else{
            $(".where_use a").parent().removeClass("active").next("div").slideUp();
            $(this).parent().addClass("active").next("div").slideDown();
        }
        e.preventDefault();
    });

    //show documents list
    $(".prod_docs a").click(function(e){
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass("active").next("div").slideUp();
        }else{
            $(".prod_docs a").parent().removeClass("active").next("div").slideUp();
            $(this).parent().addClass("active").next("div").slideDown();
        }
        e.preventDefault();
    });

    //show card2
    $(".pdr_top a").click(function(e){
        $(".prod_descr_change").fadeIn();
        e.preventDefault();
    });
    $(document).click(function(event) {
        if ($(".prod_descr_change").is(":visible") ){
                if ($(event.target).closest(".prod_descr_left, .prod_descr_right").length) return;
                $(".prod_descr_change").fadeOut();
                event.stopPropagation();
        }
    });
    //carousels start
    $('.pop_prod').owlCarousel({
        loop:false,
        mouseDrag:false,
        margin:0,
        nav:true,
        navText: [ '<span></span>', '<span></span>' ],
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });
    $('.manuf_slider').owlCarousel({
        loop:false,
        mouseDrag:false,
        margin:0,
        nav:true,
        navText: [ '<span></span>', '<span></span>' ],
        responsive:{
            0:{
                items:1
            },
            1000:{
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
        navText: [ '<span></span>', '<span></span>' ],
        items:1,
    });
    $('.cheaper_slider').owlCarousel({
        loop:false,
        mouseDrag:false,
        margin:0,
        dots:false,
        nav:true,
        navText: [ '<span></span>', '<span></span>' ],
        items:1,
    });
    $('.prod_early_slider').owlCarousel({
        loop:false,
        mouseDrag:false,
        margin:0,
        dots:false,
        nav:true,
        navText: [ '<span></span>', '<span></span>' ],
        items:3,
    });
    var sln = $(".pes_item").length;
    if(sln < 3){
        $(".prod_early_slider .owl-stage").css("margin-left", "auto").css("margin-right", "auto");
    }
    $('.cat_filt_slider').owlCarousel({
        loop:false,
        mouseDrag:false,
        margin:0,
        dots:false,
        nav:true,
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

    //popup callback
    $(".callbak").click(function(e){
        $(".popup-wrapper").fadeIn();
        e.preventDefault();
    });


    // $(".sheme_prod_right tbody tr").hover(function(){
    //     $(this).addClass("hover");
    // });


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

        responsive: [{
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1   }
        },
        {
          breakpoint: 750,
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

    $(".popup .close").on("click", function(){
        popup_hide();
    });

    $(".popup-wrapper").on("click", function(event) {
        if ($(this).is(":visible")){
            if ($(event.target).closest(".popup, .popup-scroll, .ps-scrollbar-y").length) return;
            popup_hide();
            event.stopPropagation();
        }
    });

    $(".banner-helper").on("click", function(e){
        $("#popup-helper").fadeIn(200, function(){
            $(this).find(".popup-scroll, .scroll").perfectScrollbar("update");
        });
        //$("body").css("overflow","hidden");

        e.preventDefault();
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

});
