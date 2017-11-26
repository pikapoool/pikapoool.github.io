
document.getElementById("headerMenu").addEventListener("click", function(){
	var ths = document.getElementById("headerMenu");
	if(ths.className === "headerMenu headerMenu-afterLoad active"){
		ths.className = "headerMenu headerMenu-afterLoad";
	}else{
		ths.className += " active";
	}
});


$(function() {

	$(".headerMenu-dropdown a").click(function(e){
		e.preventDefault();
		var targetId = $(this).attr("href");
		var sectionTop = $(targetId).offset().top;
		$('html, body').animate({ scrollTop: sectionTop}, 1500);
	});

	//add parallax
	$.stellar();

	$(".header-title").addClass("header-title-afterLoad");
	setTimeout(function () { $(".header-title").removeClass("header-title-afterLoad").addClass("active"); }, 3000);
	$(".headerMenu").addClass("headerMenu-afterLoad");


	//animation
	// $(".lectureWrap_item:nth-child(2n+1) .lectureWrap_item-img").animated("fadeInRight");
	$(".team_item .team_item-img").animated("fadeInUp");
	$(".team_item:nth-child(1) .team_item_txt, .team_item:nth-child(3) .team_item_txt").animated("fadeInLeft");
	$(".team_item:nth-child(2) .team_item_txt, .team_item:nth-child(4) .team_item_txt").animated("fadeInRight");
	$(".mission .section-title").animated("fadeInLeft");
	$(".mission-descr").animated("fadeInRight");
	$(".projects .section-title").animated("fadeInRight");
	$(".projects_item-img").animated("zoomInUp");
	$(".event .section-title").animated("fadeInUp");


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});




