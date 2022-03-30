   
(function($){
	$(function(){
// Phone nav click function
        $('.humberger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn()
        });
        
		if($('.shop-drink-info').length){
            $('.shop-drink-info').slick({
                dots: false,
                arrows:false,
                speed: 1000,
                infinite: false,
                navigation:false,
                slidesToShow:1,
                slidesToScroll: 1,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            infinite: true,
                        }
                    },

                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                           
                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.shop-drink-info').slick('resize');

            });
        }  
        
        if($('.info-product-inner').length){
            $('.info-product-inner').slick({
                dots: false,
                arrows:false,
                speed: 1000,
                infinite: true,
                navigation:false,
                slidesToShow:1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,

                        }
                    },
                    {
                        breakpoint: 481,
                        settings: "unslick"
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.info-product-inner').slick('resize');

            });
        } 
		
        
        
        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);
        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('is-inview');
                }
                /* else {
                                    if(!$element.hasClass('anim-once')) {
                                        $element.removeClass('in-view');
                                    }
                                }*/
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');
        

        /*Header on scroll*/
        var header = new Headroom(document.querySelector(".main-header-section"), {
            tolerance: 5,
            offset: 205,
            classes: {
                initial: "headroom",
                pinned: "header-fixed",
                unpinned: "header-static"
            }
        });

        header.init();
        
        
       if($(".single-product").length){	
            $("body").addClass('single-product-page');	
        }  
        
        
		
		    
        $("#modal-trigger").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("body").addClass('modalOpen');
                $(".modal-open-bg").fadeIn();
                myScroll.stop();
            })
        })
		
		
		 $(".newsletter-modal-close").click(function (e) {
            e.preventDefault();
            $("body").removeClass('modalOpen')
            $(".modal-open-bg").fadeOut();
            myScroll.start();
            
        })
        $(".newsletter-modal-innar").click(function (e) {
            e.stopPropagation();
        })
        

    })

    
})(jQuery)

