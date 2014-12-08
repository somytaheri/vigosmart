// application js

"use strict";
if (document.documentElement.clientWidth >768){

    jQuery(document).ready(function ($) {
        var options = {
            $AutoPlay: true,
            $AutoPlayInterval: 3000,
            $SlideDuration: 1000,
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    
    });
}