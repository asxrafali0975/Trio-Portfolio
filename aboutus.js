const options = {
    strings: ["TEAM LEADER^800", "FRONT-END DEVELOPER^800", "JAVASCRIPT DEVELOPER^800"],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,
    showCursor: false,
};

var typed = new Typed("#typed-output", options);


const options2= {
    strings: ["CREATIVE THINKER ^800", "UI-UX DESIGNER^800", "FIGMA SPECIALIST^800"],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,
    showCursor: false,
};

var typed2 = new Typed("#typed-output2", options2);




const options3= {
    strings: ["BACKEND DEVELOPER^800", "REACT-DEVELOPER^800", "PROBLEM SOLVER^800"],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,
    showCursor: false,
};

var typed3 = new Typed("#typed-output3", options3);



let tl = gsap.timeline();


tl.to("#imagediv",{
  x:8,
  delay:1,
  yoyo:true,
  repeat:Infinity,


})


tl.to("#imagediv",{
  y:-8,
  yoyo:true,
    repeat:Infinity,
  


})


tl.to("#imagedv",{
  x:-8,
  yoyo:true,
    repeat:Infinity,
  


})

tl.to("#imagediv",{
  y:8,
  yoyo:true,
    repeat:Infinity,
  


})


