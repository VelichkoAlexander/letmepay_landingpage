'use strict';
(function () {


    var app = {

        initialize: function () {
            this.setUpListeners();
            this.parallax();


        },
        setUpListeners: function () {

            $('.facilities_text li').on('click', function(){
                var $this=$(this);
                $('.facilities_text li').removeClass('active');
                $this.addClass('active');
            });
            $(".logo a[href*='#']").mPageScroll2id();
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > 62) {
                    $('nav').addClass('navbar-fixed-top');
                    $('#header .section_title').css("margin-top","161px");
                } else {
                    $('nav').removeClass('navbar-fixed-top');
                }
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

            $(".facilities .section_title,.header .section_title").animated("fadeInUp", "fadeOutDown");

            $('#myTabs,#myTabs2 a,#myTabs3 a').click(function (e) {
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
        }


    };
    app.initialize();


}());
