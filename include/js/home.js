// jQuery(document).ready(function ($) {

//             var _SlideshowTransitions = [{$Duration:700,$Opacity:2,$Brother:{$Duration:1000,$Opacity:2}}];
//             var _CaptionTransitions = [];
//              _CaptionTransitions["R"] = {$Duration:900,x:-0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutSine},$Opacity:2};

//             var options = {
//                 $FillMode: 2,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
//                 $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
//                 $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
//                 $PauseOnHover: 0,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

//                 $ArrowKeyNavigation: true,                    //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
//                 $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
//                 $SlideDuration: 800,                               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
//                 $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
//                 //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
//                 //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
//                 $SlideSpacing: 0,                           //[Optional] Space between each slide in pixels, default value is 0
//                 $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
//                 $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
//                 $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
//                 $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
//                 $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

 
//                 $SlideshowOptions: {
//                     $Class: $JssorSlideshowRunner$,
//                     $Transitions: _SlideshowTransitions,
//                     $TransitionsOrder: 1,
//                     $ShowLink: true
//                 },

//                 $CaptionSliderOptions: {
//                     $Class: $JssorCaptionSlider$,
//                     $CaptionTransitions: _CaptionTransitions,
//                     $PlayInMode: 1,
//                     $PlayOutMode: 3
//                 },

//                 $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
//                     $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
//                     $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
//                     $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
//                     $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
//                 }
//             };

//             var jssor_slider1 = new $JssorSlider$("slider1_container", options);

//             //responsive code begin
//             function ScaleSlider() {
//                 var bodyWidth = document.body.clientWidth;
//                 if (bodyWidth)
//                     jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
//                 else
//                     window.setTimeout(ScaleSlider, 30);
//             }

//             ScaleSlider();

//             if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
//                 $(window).bind('resize', ScaleSlider);
//             }

//             //responsive code end
//         });


//       $(function() {
//         $('a[href*=#]:not([href=#])').click(function() {
//           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//             if (target.length) {
//               $('html,body').animate({
//                 scrollTop: target.offset().top
//               }, 1000);
//               return false;
//             }
//           }
//         });
//       }());