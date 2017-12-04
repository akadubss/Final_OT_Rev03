$(document).ready(function () {

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // parallax scene Training
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.aaron-port',
            triggerHook: 1,
            duration: '100%'
        })
        .setTween(TweenMax.from('.aaron_img', 1, {
            y: '-45%',
            ease: Power0.easeNone
        }))
        .addTo(controller);

    // parallax scene Training
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.equipment-parallax',
            triggerHook: 1,
            duration: '200%'
        })
        .setTween(TweenMax.from('.equipment', 1, {
            y: '-45%',
            ease: Power0.easeNone
        }))
        .addTo(controller);

});
