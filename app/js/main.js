'use strict';
(function () {


    var app = {

        initialize: function () {
            this.setUpListeners();
            this.parallax();


        },
        setUpListeners: function () {
            $(".menu a[href*='#'],.header__scroll,.up").mPageScroll2id();
            $(".popup_content").magnificPopup({
                type: 'inline',
                midClick: true,
                showCloseBtn: true
            });
            $('#about').waypoint(function (direction) {
                if(direction == 'up'){

                    $('.up').css({'opacity': '0'}).fadeOut('slow');
                }
                else{
                    $('.up').css({'opacity': '1'}).fadeIn('slow');
                }
            },{offset: '93%'});
            //animate

            $(".section_title").animated("fadeInUp", "fadeOutDown");

            $('#myTabs,#myTabs2 a').click(function (e) {
                e.preventDefault();
                $(this).tab('show')
            });
            $(".section_img").animated("fadeInUp", "fadeOutDown");

            $(".animation_1").animated("flipInY", "fadeOutDown");
            $(".animation_2").animated("fadeInLeft", "fadeOutDown");
            $(".animation_3").animated("fadeInRight", "fadeOutDown");

            $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
            $(".right .resume_item").animated("fadeInRight", "fadeOutDown");
        },

        preLoad: function () {
            $(window).load(function () {
                $("#loaderInner").fadeOut();
                $("#loader").delay(400).fadeOut("slow");
            });
        },
        windowHeight: function () {
            $(".main_head").css("height", $(window).height());
        },
        parallax: function () {

            var parallaxObj = $("#home");
            $(window).on('scroll', function () {
                var parallaxSpeead = parallaxObj.attr("data-speed"),
                    yPos = -( $(window).scrollTop() / parallaxSpeead),
                    coords = "50%" + yPos + "px";
                parallaxObj.css({
                    "background-position": coords
                });
            })
        },
        submitForm: function (e) {
            $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
            e.preventDefault();
            console.log($('.help-block li').length);
            if (!($('.help-block  li').length)) {

                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $(this).serialize()
                }).done(function () {
                    $(this).find("input").val("");
                    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                    $("#form").trigger("reset");
                });
            }


        }

    };
    app.initialize();


}());
