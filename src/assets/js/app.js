// WINDOW WIDTH DETECT
let currentWidth = $(window).width();
$(window).on('resize', function () {
    currentWidth = $(window).width();
});

//App
const Application = {
    init: function() {
        this.events();
    },
    events: function() {
        !window.reinit && (window.reinit = {});

        //main events
        this.eventList.lazyImgs();
        this.eventList.svgPolifill();
        this.eventList.mask();
        this.eventList.modals();

        //app events
        //this.eventList.sliders();
    },
    eventList: {
        modals: function(){
           $('.js-close').on('click', function(){
            $('.modal').css('display','none');
        });
           
           $('.js-open').on('click', function(e){
               e.preventDefault();

               $('.modal').css('display','block');
           });

           $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $('.modal').css('display','none');
            }
          });
        },
        lazyImgs: function(){

            let callback_loaded = function(el) {
                const $img = $(el),
                      $img_wrap = $img.closest('.lazy-img-wrap');
                $img_wrap.addClass('loaded');
            };

            new LazyLoad({
                elements_selector: ".lazy-img",
                threshold: 0,
                callback_loaded: callback_loaded,
            });
        },
        svgPolifill: function () {
            // svg sprites
            svg4everybody && svg4everybody();
        },
        mask: function() {
            $("[type=tel]").inputmask({
                mask: '+7 (999) 999-99-99',
                "clearIncomplete": false,
                "showMaskOnHover": false,
                "showMaskOnFocus": true,
                "clearMaskOnLostFocus": true
            });
        },
    }
};
$(function () {
    'use strict';
    Application.init();
});
