
$(function() {

	$(".fancybox").fancybox({
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});

	$(".fancybox-media").fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

});


