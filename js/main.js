$(document).ready(function () {
   var controller = new ScrollMagic.Controller();
   var ourScene = new ScrollMagic.Scene({
      triggerElement: '#project01',
      duration: '100%',
      triggerHook: 0.6
   })
      .setClassToggle('#project01', 'fade-in')
      .addIndicators({
         name: 'fade scene',
         colorTrigger: 'black',
         colorStart: '#75C695',
         colorEnd: 'pink'
      })
      .addTo(controller);
});