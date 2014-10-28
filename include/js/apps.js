"use strict";
if (document.documentElement.clientWidth >768){


    jQuery(document).ready(function ($) {
    	
        //Define an array of slideshow transition code
        // var _SlideshowTransitions = [
        // {$Duration:1200,x:1,$Easing:{$Left:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}

            // {$Duration: 900, $Clip: 3, $Easing: $JssorEasing$.$EaseInOutCubic }
            //CLIP|TB
            // {$Duration: 900, $Clip: 12, $Easing: $JssorEasing$.$EaseInOutCubic },

            //ZMF|10
            // {$Duration: 600, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
        // ];
        var options = {
            $AutoPlay: true,
            $AutoPlayInterval: 3000,
            $SlideDuration: 1000,
            // $SlideshowOptions: {
            //         $Class: $JssorSlideshowRunner$,
            //         $Transitions: _SlideshowTransitions,
            //         $TransitionsOrder: 1,
            //         $ShowLink: true
            //     }
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    
    });
}