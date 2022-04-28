console.log('Hello World!');
AOS.init();
var options = {
  strings: [`I'm <span id='animation'>a Developer</span>`, `I'm <span id='animation'>a photographer</span>`,`I'm <span id='animation'>a graphic designerr</span>`],
  typeSpeed: 40,
  smartBackspace:true,
  startDelay:500,
  backDelay:500,
  backSpeed:50
};

var typed = new Typed('#animatedText', options);
