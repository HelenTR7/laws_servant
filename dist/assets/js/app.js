"use strict";

// WINDOW WIDTH DETECT
var currentWidth = $(window).width();
$(window).on('resize', function () {
  currentWidth = $(window).width();
}); //App

var Application = {
  init: function init() {
    this.events();
  },
  events: function events() {
    !window.reinit && (window.reinit = {}); //main events

    this.eventList.lazyImgs();
    this.eventList.svgPolifill();
    this.eventList.mask();
    this.eventList.modals(); //app events
    //this.eventList.sliders();
  },
  eventList: {
    modals: function modals() {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('.under').addClass('hidden');
          $('.top').removeClass('hidden');
        } else {
          $('.under').removeClass('hidden');
          $('.top').addClass('hidden');
        }
      });
      $('.js-close').on('click', function () {
        $('.modal').css('display', 'none');
      });
      $('.js-open').on('click', function (e) {
        e.preventDefault();
        $('.modal').css('display', 'flex');
      });
      $(document).on('keyup', function (e) {
        if (e.key == "Escape") {
          $('.modal').css('display', 'none');
        }
      });
    },
    lazyImgs: function lazyImgs() {
      var callback_loaded = function callback_loaded(el) {
        var $img = $(el),
            $img_wrap = $img.closest('.lazy-img-wrap');
        $img_wrap.addClass('loaded');
      };

      new LazyLoad({
        elements_selector: ".lazy-img",
        threshold: 0,
        callback_loaded: callback_loaded
      });
    },
    svgPolifill: function svgPolifill() {
      // svg sprites
      svg4everybody && svg4everybody();
    },
    mask: function mask() {
      $("[type=tel]").inputmask({
        mask: '+7 (999) 999-99-99',
        "clearIncomplete": false,
        "showMaskOnHover": false,
        "showMaskOnFocus": true,
        "clearMaskOnLostFocus": true
      });
    }
  }
};
$(function () {
  'use strict';

  Application.init();
});