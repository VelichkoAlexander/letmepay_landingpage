'use strict';
(function () {


    var app = {

        initialize: function () {
            this.setUpListeners();
            this.niceScrolle();
            this.SkroLl();
        },
        setUpListeners: function () {


            $('.facilities_text li').on('click', function () {
                var $this = $(this);
                $('.facilities_text li').removeClass('active');
                $this.addClass('active');
            });
            $(".logoplace a[href*='#']").mPageScroll2id();
            //fix top menu
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > 62) {
                    $('nav').addClass('navbar-fixed-top');
                    //$('#header .section_title').css("margin-top", "62px");
                } else {
                    $('nav').removeClass('navbar-fixed-top');
                }
            });

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

            $('#stiky_el').waypoint(function (direction) {
                if(direction == 'down'){

                    $('#skrol_image').addClass('fix')
                }
                else{
                    $('#skrol_image').removeClass('fix')
                }
            },{offset: '102px'});
            //animate




        },
        SkroLl: function () {
            //if($(window).width() >= 761) {
            //    console.log($(window).width());
                //var s = skrollr.init({
                //    forceHeight: false
                //});
            //}
            // disable skrollr if the window is resized below 960px wide
            $(window).on('load resize', function () {
                console.log($(window).width());
                //if ($(window).width() <= 760) {
                //    var s = skrollr.init().destroy(); // skrollr.init() returns the singleton created above
                //}
                //if ($(window).width() > 1090) {
                //    var s = skrollr.init().destroy(); // skrollr.init() returns the singleton created above
                //}
                if ($(window).width() < 760) {
                    $('.how_connect .nav-tabs ').css('display', 'none');
                    $('.how_connect .tab-pane ').removeClass('tab-pane fade');
                }
                if ($(window).width() > 768) {
                    $('.how_connect .nav-tabs ').css('display', 'block');
                    $('.how_connect .tab-pane ').addClass('tab-pane fade');
                }


            });
        },
        niceScrolle: function () {
            $("body").niceScroll({
                horizrailenabled: false
            })
        },
        tempLate:function(){

    }

    };
    app.initialize();


}());
