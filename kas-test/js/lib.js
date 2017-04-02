$(document).ready(function(e) {	
	//Переключение чекбоксов свайпом временно отключено, т.к. вызывает проблемы на 8 шаге калькулятора
	/*$(".switch_wrap").on("swipeleft", function(e){
		$(this).find("input[type=checkbox]").prop("checked", false);
	});
	$(".switch_wrap").on("swiperight", function(e){
		$(this).find("input[type=checkbox]").prop("checked", true);
	});*/
	
	$('.calc_text_btn').click(function () { // открыть/закрыть доп. текст на странице калькулятора /**new**/
            if (!$('.calc_text_wrap').hasClass('active')){
                $('.calc_text').show(0);
                $('.with_img').show(0);
                $('.partners_calc_text').show(0);
                $('.calc_text_wrap').addClass('active');
            } else {
                $('.calc_text').hide(0);
                $('.with_img').hide(0);
                $('.partners_calc_text').hide(0);
                $('.calc_text_wrap').removeClass('active');
            }
            
        })
	check_no_limit(); // проверяем, поставлено ли "без ограничений"
	
	$(".partners_index_block .partners_list li").click(function(e) {
        show_company_info(($(this).attr('company_id')));
	});
	
	$("#confidential_popup_show").click(function(e) {
		$("#confidential_popup.popup_wrap").fadeIn(150).css("display","flex");
	});
	
	$(".popup_wrap .close_btn").click(function(){
		$(".popup_wrap").hide();
	});
	
	//Прячем боковое меню при клике на тело сайта
	$(".site_content, .site_footer").click(function(e){
		$(".popup_menu").removeClass("showed");
	});

	if($("html").hasClass("desktop")){
		$(".popup_menu").addClass("desktop_menu");
	}

	$('.styled_select').selectmenu({
		width: "auto",
	});
	
	$(".menu_sandwich_icon").click(function(e) {
		$(".popup_menu").addClass("showed");
	});
	
	$(".popup_menu .back_arrow").click(function(e) {
		$(".popup_menu").removeClass("showed");
	});
	
	$(".mobile_select_wrap .select_imitation").click(function(e) {
       open_select($(".mobile_select_wrap .original_select"));
    });
	
	$(".mobile_select_wrap .original_select").change(function(e) {
		$(".mobile_select_wrap .select_imitation").text($(this).find(":selected").text());
    });
	
	$(".tablet, .mobile").on("swipeleft", function(e){
		if(($(window).width() - e.swipestart.coords[0]) < 30){
			$(".popup_menu").addClass("showed");
		}
	});
	
	$(".tablet .popup_menu, .mobile .popup_menu").on("swiperight", function(e){
		$(".popup_menu").removeClass("showed");
	});
	
	$(window).scroll(function(e) {
		//if($(".menu_sandwich_icon").is(":animated")) return;
		
        if($(window).scrollTop() >= 200){
			$(".menu_sandwich_icon.undock").addClass("visible");
			/*if($(".menu_sandwich_icon").hasClass("undock")) return;
			$(".menu_sandwich_icon").stop().addClass("undock").animate({"top":"0"}, 150);*/
		}
		else{
			$(".menu_sandwich_icon.undock").removeClass("visible");
			/*if(!$(".menu_sandwich_icon").hasClass("undock")) return;
			$(".menu_sandwich_icon").stop().animate({"top":"-70px"}, 150, function(){$(this).removeClass("undock");});*/
		}
    });
	
	if($(window).width() >= $(".scrollyeah__shaft").width()){
		$(".slider_wrap .slider_blocks").addClass("no_sides_margin_fix");
		$(".horisontal_scroll_for_slider").hide();
	}
	
	$("#sldr_hrzntl_scrll").rangeslider({
        polyfill: false,
		onInit: function() {},
		onSlide: function(position, value) {$(".scrollyeah__shaft").css("left",value);},
		onSlideEnd: function(position, value) {}
    });
	
	$(window).resize(function(){
		if($(window).width() >= $(".scrollyeah__shaft").width()){
			$(".slider_wrap .slider_blocks").addClass("no_sides_margin_fix");
			$(".horisontal_scroll_for_slider").hide();
		}
		else{
			$("#sldr_hrzntl_scrll").rangeslider({polyfill: false});
			$(".slider_wrap .slider_blocks").removeClass("no_sides_margin_fix");
			$(".horisontal_scroll_for_slider").show();
		}
		
		//Фикс для хлебных крошек в калькуляторе
		if($(window).width() > 650){
			$(".calc_breadcrumbs").show();
		}
	});
	
	
	//Работа аккордеона
	$(".accordeon li").click(function(){
		$(this).siblings().removeClass("active").find(".txt").slideUp(150);
		$(this).toggleClass("active").find(".txt").slideToggle(150);
		
		if($(this).closest(".accordeon").hasClass("news_accordeon")){
			if($(this).index() != 0){
				$("body").animate({scrollTop : $(this).prev("li").offset().top}, 150);
			}
		}
	});	
	
	//Открытие хлебных крошек калькулятора на мобиле
	$(".mobile_group_crumbs").click(function(){
		$(this).next(".calc_breadcrumbs").slideToggle(150);
	});	
	
	//Показать больше годов в калькуляторе
	$(".calc_body .calc_inline_list .item.years_older.desktop a").click(function(e) {
            years_older_click($(this));
	});
	
	$(".calc_body .calc_inline_list .item.years_older.mobile a").click(function(e) {
            years_older_mobile_click();
        });
	//Показать все марки в калькуляторе
	$(".show_all_button_wrap .show_all_button").click(function(e) {
                show_all_button();
        });
	$(".calc_tabs_top li").click(function(e) {
            calc_tabs_top_li_click($(this));
        });
	//Обработчик клика по псевдо-радио-кнопке
	$(".calc_body .calc_inline_list .item.radio").click(function(e) {
            calc_inline_list_radio_click($(this));
        });
	//rangeslider в калькуляторе
	$(".clc_price_input").change(function(e) {
            $(".clc_hrzntl_scrll").val($(this).val()).change();
        });
	
	$(".clc_hrzntl_scrll").rangeslider({
                    polyfill: false,
                    onInit: function() {},
                    onSlide: function(position, value) {$(".clc_price_input").val(value);},
                    onSlideEnd: function(position, value) {}
        });
	
	//Телефонные селекты в калькуляторе
	$("body").delegate('.calc_mobile_styled_select', 'click', function(e) {
            open_select($(this).find("select"));
        });
	
	$("body").delegate('.calc_mobile_styled_select select', 'change', function(e) {
                var selected_text = $(this).find(":selected").text();
                var selected_val = $(this).find(":selected").val();
                if(selected_val == ""){
                        $(this).closest(".calc_mobile_styled_select").removeClass("active");
                        $(this).siblings(".select_value").text("");
                }
                else{
                        $(this).closest(".calc_mobile_styled_select").addClass("active");
                        $(this).siblings(".select_value").text(selected_text);
                }
        });
	
	//Обработчики для списка водителей
	$("body").delegate(".drivers_block .radio_block li", "click", function(e) {
		if($(this).hasClass("active")) return;
		$(this).siblings().removeClass("active");
                $(this).addClass("active");
                $(this).find("input[type=radio]").prop('checked', true);
        });
	
	$("body").delegate(".drivers_block.delete_button", "click", function(e) {
                delete_button_click($(this));
        });
	
	$("body").delegate(".drivers_block .add_driver_button", "click", function(e) {
                add_driver_button_click();
        });
	
	$("body").delegate("#no_limit_insurance", "change", function(){
		if($(this).prop("checked")){
			$(".drivers_block").slideUp(150);
			$(".calc_drivers_form input[type=submit]").attr("disabled", false);
		}
		else{
			$(".drivers_block").slideDown(150);
			check_first_driver_full();
		}
                recalc_drivers()
	});
	
	$("body").delegate(".drivers_block .driver:eq(0) input[type=number]", "keyup", function(e) {
		check_first_driver_full();
        });
	$("body").delegate(".calc_drivers_form", "submit", function(e) {
        $('.calc_breadcrumbs.editable_crumbs .crumb:eq(1)').removeClass('active');
        $(".preloader_wrap").fadeIn(150).css("display","flex");
        var postData = {};
        if ($('#no_limit_insurance').is(':checked')) {
            postData.no_limits = 1;
            postData.drivers = [];
        } else {
            postData.no_limits = 0;
            var formData = $('form.calc_drivers_form').serializeArray();
            for(i in formData) {
                postData[formData[i].name] = formData[i].value;
            }
        }
        $.ajax({
            type: "POST",
            url: "",
            data: postData,
            dataType: "json",
            success: function(response) {
                console.log(response);
                if(response.status == 'error') {
//                    window.location = '/calculator/';
                } else {
                    window.location = '/calculator/offers/';
                }
            }, error: function(){
//                window.location = '/calculator/';
            }
        });

        return false;
    });
	
	$("body").delegate(".drivers_block .driver:eq(0) .radio_block li", "click", function(e) {
		setTimeout(check_first_driver_full, 1);
        });
	
	$("body").delegate(".drivers_block input[type=number]", "keyup", function(e) {
		check_driver_full($(this).closest(".driver"));
        });
	
	$("body").delegate(".drivers_block .radio_block li", "click", function(e) {
                check_driver_full($(this).closest(".driver"));
        });
	function check_first_driver_full(){
		var button_unactive = false;
		$(".drivers_block .driver:eq(0) input[type=number]").each(function(index, element) {
			if($(this).val() == "") button_unactive = true;
		});
		if(!$(".drivers_block .driver:eq(0) input[type=radio]:checked").length) button_unactive = true;
		
		$(".calc_drivers_form input[type=submit]").attr("disabled", button_unactive);
	}
	
	function check_driver_full(driver){
		var unactive = false;
		driver.find("input[type=number]").each(function(index, element) {
			if($(this).val() == "") unactive = true;
		});
		if(!driver.find("input[type=radio]:checked").length) unactive = true;
		if(unactive){
			driver.removeClass("full");
		}
		else{
			driver.addClass("full");
		}
	}
	
	//Работа progressbar
	animate_progressbar($(".progressbar .progress"));
	function animate_progressbar(progress_element){
		progress_element.css({"width":"0"});
		progress_element.animate({"width":"100%"}, 5000, function(){
			var next_li = $(".dynamic_text li.active").next("li");
			if(!next_li.length){
				next_li = $(".dynamic_text li").eq(0);
			}
			$(".dynamic_text li.active").removeClass("active");
			next_li.addClass("active");
			animate_progressbar(progress_element);
		});
	}
	
	/*Инициализация карты*/
	if($("#map_canvas").length){
		initialize();
	}


	
	//Работа выпадалки в списке подобранных
	$("body").delegate(".services_dropdown_head", "click", function(e) {
		$(this).toggleClass("active");
		$(this).next(".services_dropdown_list").fadeToggle(150);
	});
	
	$("body").click(function(e) {
		if(!$(e.target).closest(".services_dropdown_head, .services_dropdown_list").length){
			$(".services_dropdown_head").removeClass("active");
			$(".services_dropdown_list").fadeOut(150);
		}
        });
	
	//Проверка формы оформления заказа
	$("body").delegate(".order_form input", 'keyup', function(e) {
		if($(this).closest("form").hasClass("no_check")){
			return;
		}
		
		var button_is_disabled = false;
		$(".order_form input").each(function(index, element) {
                        if (!$(this).closest('#order_to_mail_form').length) {
                            if($(this).attr("type") == "email"){
                                    var patt = /^.+@/;
                                    if(!patt.test($(this).val())){
                                            $(this).addClass("invalid");
                                            $(this).next(".error_txt").addClass("showed");
                                            button_is_disabled = true;
                                    }
                                    else{
                                            $(this).removeClass("invalid");
                                            $(this).next(".error_txt").removeClass("showed");
                                    }
                            }
                            else{
                                    if($(this).val() == ""){
                                            $(this).addClass("invalid");
                                            $(this).next(".error_txt").addClass("showed");
                                            button_is_disabled = true;
                                    }
                                    else{
                                            $(this).removeClass("invalid");
                                            $(this).next(".error_txt").removeClass("showed");
                                    }
                            }
                        }
		});
		$(".order_form input[type=submit]").attr("disabled", button_is_disabled);
		if(button_is_disabled){
			$(".order_form .submit").addClass("disabled");
		}
		else{
			$(".order_form .submit").removeClass("disabled");
		}
	});
	$("body").delegate(".order_form input", "change", function(e) {
		if($(this).closest("form").hasClass("no_check")){
			return;
		}
		
		var button_is_disabled = false;
		$(".order_form input").each(function(index, element) {
			if (!$(this).closest('#order_to_mail_form').length) {
				if($(this).attr("type") == "email"){
					var patt = /^.+@/;
					if(!patt.test($(this).val())){
						$(this).addClass("invalid");
						$(this).next(".error_txt").addClass("showed");
						button_is_disabled = true;
					}
					else{
						$(this).removeClass("invalid");
						$(this).next(".error_txt").removeClass("showed");
					}
				}
				else{
					if($(this).val() == ""){
						$(this).addClass("invalid");
						$(this).next(".error_txt").addClass("showed");
						button_is_disabled = true;
					}
					else{
						$(this).removeClass("invalid");
						$(this).next(".error_txt").removeClass("showed");
					}
				}
			}
		});
		$(".order_form input[type=submit]").attr("disabled", button_is_disabled);
		if(button_is_disabled){
			$(".order_form .submit").addClass("disabled");
		}
		else{
			$(".order_form .submit").removeClass("disabled");
		}
                
	});
	
	$("body").delegate("#order_to_mail_form .submit", "click", function(e) {
            $('#order_to_mail_form').submit();
        })
	$("body").delegate("#order_to_mail_form", "submit", function(e) {
                var form_data = 'new=Y&email='+$('#order_to_mail_form input[name=email]').val()+'&'+$('#order_to_mail_form input[name=params]').val();
                $.ajax({
                        url: "ajax/sendmail.php",
                        type: 'POST',
                        data: form_data,
                        success: function(data){
                            if (data.indexOf('sucess') != '-1') {
                                $('#order_to_mail_popup').fadeOut(150, function () {
                                    alert('На указанную почту отправлена ссылка на предложение')
                                })
                            }
                        }
                });
                return false;
        })
	$("body").delegate(".order_form .submit", "click", function(e) {
		if ($(this).closest('#order_to_mail_form').length)
			return false;
		if($(this).hasClass("disabled")){
			$(".order_form input").each(function(index, element) {
                            if (!$(this).closest('#order_to_mail_form').length) {
				if($(this).attr("type") == "email"){
					var patt = /^.+@/;
					if(!patt.test($(this).val())){
						$(this).addClass("invalid");
						$(this).next(".error_txt").addClass("showed");
					}
					else{
						$(this).removeClass("invalid");
						$(this).next(".error_txt").removeClass("showed");
					}
				}
				else{
					if($(this).val() == ""){
						$(this).addClass("invalid");
						$(this).next(".error_txt").addClass("showed");
					}
					else{
						$(this).removeClass("invalid");
						$(this).next(".error_txt").removeClass("showed");
					}
				}
                            }
			});
		}
		else{
                    if (!$(this).closest('#reg_form').length && !$(this).closest('#change_pass').length && !$(this).closest('#login_form').length &&  !$(this).closest('#edit_user').length) {
                        // код для ajax отправки формы
                        if ($('#order_form').length)
                            var form_data_order = $('#order_form').serialize()
                        var form_data_offer = $('.calc_offers_list li form').serialize()
                        var form_data_osn = $('#calc_id').serialize()
                        var form_data = form_data_order+'&'+form_data_offer+'&'+form_data_osn
                        $.ajax({
                                url: "/order/",
                                type: 'POST',
                                data: form_data,
                                success: function(response){
                                    if(response.status == 'ok') {
                                        $('.order_number').html(response.orderId)
                                        $('#success_offer').fadeIn(300).css("display","flex");
                                    } else {
                                        window.location = '/';
                                    }
                                }
                        });

                        return false;
                    } else {
                        $(this).closest("form").submit();
                    }
                    //$(this).closest("form").submit();
		}
	});
        
        $('.link.sendmail').click(function (){
            var item = $(this).closest('li').data('id')
            var ths = $(this);
            $.ajax({
                    url: "ajax/sendmail.php",
                    type: 'POST',
                    data: {id: item},
                    success: function(data){
                            if(data == "sucess"){
                                alert('На почту отправлено письмо, содержащее ссылку на данный расчёт!');
                            } 
                    }
            });
            return false;
        })
        $('.delete_btn').click(function (){
            var item = $(this).closest('li').data('id')

            if (confirm('Удалить?')) {
                var ths = $(this);
                $.ajax({
                        url: "ajax/delete_my_calc.php",
                        type: 'POST',
                        data: {id: item},
                        success: function(data){
                                if(data == "success"){
                                        ths.closest('ul').prev().remove();
                                        ths.closest('ul').remove();
                                        if (!$('.calc_body ul').length) {
                                            $('.calc_body').after('<div class="nothing_here with_padding_2col">Сохраненных параметров нет</div>').remove();
                                        }
                                }
                        }
                });

            }
            return false;
        })
		
		$(".callback_form").submit(function(e) {
			var ths = $(this);
			if (!ths.find('.submit').hasClass('send')) {
				var name = ths.find('input[name=name]').val();
				var phone = ths.find('input[name=phone]').val();
				var email = ths.find('input[name=email]').val();
				var msg = ths.find('textarea[name=msg]').val();
				var form_name = ths.find('input[name=form_name]').val();
				
				$.ajax({
					type: "POST",
					url: "ajax/index.php",
					data: { 'name': name, 'phone': phone, 'email': email, 'msg': msg, 'form_name': form_name }
				})
				.done(function( data ) {
					if (data) {
						ths.find('.submit').html('Отправлено').addClass('send');
						ths.find('input[type=submit]').val('Отправлено').addClass('send');
					}
				});
			}
			e.preventDefault();
		});
});

// проверяем, поставлено ли "без ограничений"
function check_no_limit() {
	if ($('#no_limit_insurance').is(':checked')) {
		$('.drivers_block').hide()
	}
}

//Функция дисстанционного открытия select
function open_select(elem) {
    if (document.createEvent) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        elem[0].dispatchEvent(e);
    } else if (element.fireEvent) {
        elem[0].fireEvent("onmousedown");
    }
}


/*Инициализация карты*/
/* перенёс в contacts/index.php */


// перенос кликов на функции 
function years_older_click(ths) {
    ths.toggleClass("active");
    $(".columns_list.other_years").slideToggle(150);
}
function years_older_mobile_click() {
    open_select($("#other_years_hidden_select"));
}

function show_all_button_click() {
        var newActive = $(".calc_tabs_wrap .tab:not(.active)");
        $(".calc_tabs_wrap .tab.active").removeClass("active").fadeOut(300, function(){
                newActive.addClass("active").fadeIn(300);
                $(".show_all_button_wrap").hide();
        });
}
function calc_tabs_top_li_click(ths) {
        if(ths.hasClass("active")) return;
        $(".calc_tabs_top li").removeClass("active");
        ths.addClass("active");
        var newActive = $(".calc_tabs_wrap .tab:not(.active)");
        $(".calc_tabs_wrap .tab.active").removeClass("active").fadeOut(300, function(){
                newActive.addClass("active").fadeIn(300);
                $(".show_all_button_wrap").hide();
        });
}
function calc_inline_list_radio_click(ths) {
    if(ths.hasClass("active")) return;
    ths.siblings().removeClass("active");
    ths.addClass("active");
    ths.find("input[type=radio]").prop('checked', true);
}
function add_driver_button_click() {
        $('.add_driver_button').show();
        var next_number = $(".drivers_block .driver").length + 1;
		
		data = $('.driver_body').html();
		$(".drivers_block .drivers_list").append(data);
		recalc_drivers();
		if ($(".drivers_block .driver").length == 10) {
			$('.add_driver_button').hide();
		}
		/*
        $.ajax({
                url: "ajax/driver.php?number="+next_number,
                success: function(data){
                        $(".drivers_block .drivers_list").append(data);
                        recalc_drivers();
                        if ($(".drivers_block .driver").length == 10) {
                            $('.add_driver_button').hide();
                        }
                }
        });
		*/
}
function delete_button(ths) {
        $('.add_driver_button').show();
        ths.closest(".driver").remove();
        recalc_drivers();
}
function recalc_drivers() {
        var i = 0;
        if ($('.calc_drivers_form').length) {
            $('.drivers_list .driver').each(function () {
                $(this).find('.age_radio').attr('name', 'drivers['+i+'][age]')
                $(this).find('.exp_radio').attr('name', 'drivers['+i+'][exp]')
                $(this).find('.gender_radio').attr('name', 'drivers['+i+'][sex]')
                i++;
            })
            if ($('#no_limit_insurance').is(':checked'))
                $('.calc_breadcrumbs.editable_crumbs .crumb:eq(1) span').html('0')
            else
                $('.calc_breadcrumbs.editable_crumbs .crumb:eq(1) span').html(i)
        }
}

function to_fav(ths) {
    if (ths.html() != 'Добавлено') {
        var form_data_order = ths.closest('li').find('form').serialize()
        var form_data_osn = $('#calc_id').serialize()
        var form_data = form_data_order.concat(form_data_osn);

        $.ajax({
                url: "ajax/to_favorite.php",
                type: 'POST',
                data: form_data,
                success: function(data){
                    if (data == 'success') {
                        ths.html('Добавлено')
                    }
                }
        });
    }
}
function to_post(ths) {
    $('#order_to_mail_popup').fadeIn(150).css("display","flex");
    
    var form_data_order = ths.closest('li').find('form').serialize()
    var form_data_osn = $('#calc_id').serialize()
    var form_data_mail = $('#mail_form').serialize()
    var form_data = form_data_order+'&'+form_data_osn+'&'+form_data_mail;
    $('#order_to_mail_form').find('input[name=params]').val(form_data)
    //открываем всплывалку
}
function sendmail_new(ths) {
    var form_data_order = ths.closest('li').find('form').serialize()
    var form_data_osn = $('#calc_id').serialize()
    var form_data_mail = $('#mail_form').serialize()
    var form_data = form_data_order+'&'+form_data_osn+'&'+form_data_mail;

    $.ajax({
            url: "ajax/sendmail.php",
            type: 'POST',
            data: form_data,
            success: function(data){
                if (data == 'success') {
                    ths.html('Добавлено')
                }
            }
    });
}


function set_val(type, val, html, next) {
/*
    $('input[name='+type+']').val(val);
    $('.calc_breadcrumbs_wrap .crumb.'+type).find('.txt').html(html).closest('.crumb').removeClass('active').next('.crumb').removeClass('unactive').addClass('active');
    to_step(next);
	*/
}

// функция перехода к следующему шагу
function to_step (next, offer) {
    if (offer && next < 6) {
        if (offer.hasClass('unactive')) {
            return false;
        }
    }
    if (next < 9 && next > 0) {
        $('.calc_breadcrumbs .crumb').removeClass('active')
        $('.calc_breadcrumbs .crumb:eq(' + (next-1) + ')').addClass('active')
        $('.prog_1').css({width: (next-1)*13+"%"})
        
        if (offer) {
            for (var i=next;i<6;i++) {
                $('.calc_breadcrumbs .crumb:eq(' + i + ')').addClass('unactive')
                $('.calc_breadcrumbs .crumb:eq(' + i + ')').find('.txt').html($('.calc_breadcrumbs .crumb:eq(' + i + ')').find('.txt').data('default'))
            }
        }
    }
    if (next > 8) { // на страницу с "рассчитать страховку"
        $('.prog_1').css({width: "100%"})
        $('.num_2').addClass('active')
    } else {
        $('.num_2').removeClass('active')
    }
    if (next > 9) { // на страницу со списком предложений
        $('.prog_2').css({width: "100%"})
        $('.num_3').addClass('active')
    } else {
        $('.prog_2').css({width: "0%"})
        $('.num_3').removeClass('active')
    }

    if (next == 10) { // на страницу оформления
        var form_data = $('#offer_' + offer + ' form').serialize();
		window.location.href = "calculator_9.html";// только для html
		return false;// только для html
    } else {
        var form_data = $('form#calc_id').serialize();
    }
    if ((next == 8 || next == 9) && $('#no_limit_insurance').length) { // на страницу с "рассчитать страховку"
        if ($('#no_limit_insurance').is(':checked')) {
            $('input[name=cnt_driver]').val('0');
            $('input[name=age_driver]').val('0');
            $('input[name=exp_driver]').val('0');
            $('input[name=gen_driver]').val('0');
            $('input[name=no_limit]').val('1');
        } else {
            $('input[name=no_limit]').val('');
            var count = $('.driver').length;
            var age, exp, gen;
            for (var i=0;i<count;i++) {
                if (!age)
                    age = $('input[name="age[' + i + ']"]').val()
                else
                    age = age + ',' + $('input[name="age[' + i + ']"]').val()
                if (!exp)
                    exp = $('input[name="exp[' + i + ']"]').val()
                else
                    exp = exp + ',' + $('input[name="exp[' + i + ']"]').val()
                if (!gen) {
                    gen = $('input[name="gender[' + i + ']"]:checked').val()
                } else {
                    gen = gen + ',' + $('input[name="gender[' + i + ']"]:checked').val()
                }
            }
            $('input[name=cnt_driver]').val(count);
            $('input[name=age_driver]').val(age);
            $('input[name=exp_driver]').val(exp);
            $('input[name=gen_driver]').val(gen);
        }
    }
    $(".calc_body").html('<div class="ajax_load_block"></div>');
    if (next == 9) { // на страницу со списком предложений
            $(".preloader_wrap").fadeIn(150).css("display","flex");
			setTimeout(function () { // только для html
				window.location.href = "calculator_8.html"
			}, 3000) // длительность загрузки здесь, установить 0, если задержка ставится в php-файле
			return false;// только для html
    } 
    if (next == 6) { // на страницу с параметрами авто
            $('.calc_breadcrumbs.editable_crumbs .crumb:eq(0)').addClass('active');
            $('.calc_breadcrumbs.editable_crumbs .crumb:eq(1)').removeClass('active');
    } 
    if (next == 7) { // на страницу с водителями
            $('.calc_breadcrumbs.editable_crumbs .crumb:eq(0)').removeClass('active');
            $('.calc_breadcrumbs.editable_crumbs .crumb:eq(1)').addClass('active');
    } 
    if (next == 8) { 
            $('.calc_breadcrumbs.editable_crumbs .crumb:eq(0)').removeClass('active');
            $('.calc_breadcrumbs.editable_crumbs .crumb:eq(1)').removeClass('active');
    } 
    $("html,body").animate({scrollTop: $('.calc_head_block').offset().top}, 300);
    $.ajax({
            url: "/calculator/?step="+next,
            type: 'POST',
            data: form_data,
            success: function(data){
                if (next == 9) { // на страницу со списком предложений
                    setTimeout(function () {
                        $(".preloader_wrap").fadeOut(150)
                        $(".calc_body").html(data);
                    }, 1000) // длительность загрузки здесь, установить 0, если задержка ставится в php-файле
                } else {
                    $(".calc_body").append('<div class="remove"></div>');
                    $(".calc_body").html(data);
                }
                $('.mobile_group_crumbs span').html(next-1)
                if (next == 4) { // на страницу с моделями
                    var name = $('input[name=mark]').val()
                    $.ajax({
                            url: "ajax/calc/model_list.php?mark="+name,
                            success: function(data){
                                $(".model_list").html(data);
                            }
                    });
                }
                if (next == 5) { // на страницу с модификациями
                    var name = $('input[name=model]').val()
                    $.ajax({
                            url: "ajax/calc/modif_list.php?model="+name,
                            success: function(data){
                                $(".modif_list").html(data);
                            }
                    });
                }
                if (next == 7 || next == 8 && $('#no_limit_insurance').length) { // на страницу с водителями
                    $('.calc_breadcrumbs_wrap').hide();
                    $('.calc_breadcrumbs_wrap.editable_crumbs').show();
                    $('.calc_breadcrumbs.editable_crumbs .crumb:eq(1)').addClass('active');
                    $('.calc_breadcrumbs.editable_crumbs .crumb:eq(0) .txt span').html($('#calc_id input[name=mark]').val() + ' ' + $('#calc_id input[name=model]').val());
                }
            }
    });
}

function show_company_info(companyId)
{
    if(!companyInfo.hasOwnProperty(companyId)) {
        return false;
    }
    $("div#partner_popup div.partner_logo img").attr('src', '/img/partners_logos/' + companyId + '.jpg');
    $("div#partner_popup div.partner_name").text(companyInfo[companyId].name);
    $("div#partner_popup div.partner_descr").text(companyInfo[companyId].description);
    $("div#partner_popup ul#affiliated").empty();
    $("div#partner_popup ul#rules").empty();
    $("div#partner_popup ul#management").empty();
    for(i in companyInfo[companyId].files.affiliated) {
        var file = companyInfo[companyId].files.affiliated[i];
        $("div#partner_popup ul#affiliated").append('<li><a href="/docs/' + companyId + '/' + file.name + '">' + file.title + '</a></li>');
    }

    for(i in companyInfo[companyId].files.rules) {
        var file = companyInfo[companyId].files.rules[i];
        $("div#partner_popup ul#rules").append('<li><a href="/docs/' + companyId + '/' + file.name + '">' + file.title + '</a></li>');
    }
    
    for(i in companyInfo[companyId].files.management) {
        var file = companyInfo[companyId].files.management[i];
        $("div#partner_popup ul#management").append('<li><a href="/docs/' + companyId + '/' + file.name + '">' + file.title + '</a></li>');
    }
    
    $("div#partner_popup").fadeIn(150)
}