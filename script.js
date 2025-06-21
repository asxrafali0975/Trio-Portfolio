
let tl = gsap.timeline();


tl.from("#page1",{
   scale:0,
   delay:0.7,
   duration:1,
   opacity:0

})



tl.from("nav",{
   scale:0,
   delay:0.5,
   duration:1,
   opacity:0,
   y:-300,

})


tl.from(["#left"," #right","#textcontent"],{
   scale:0,
   delay:0.5,
   duration:1.4,
   opacity:0,

})



tl.from(["#imagediv","#name"],{
     scale:0,
  //  delay:1.2,
   duration:1.4,
   opacity:0


})

tl.to("#imagediv",{
  x:15,
  delay:1,
  yoyo:true,
  repeat:Infinity,


})


tl.to("#imagediv",{
  y:-15,
  yoyo:true,
    repeat:Infinity,
  


})


tl.to("#imagedv",{
  x:-15,
  yoyo:true,
    repeat:Infinity,
  


})

tl.to("#imagediv",{
  y:15,
  yoyo:true,
    repeat:Infinity,
  


})


const options = {
    strings: ["GRAPHICS DESIGNING^800", "FRONT-END SKILLS ^800", "3D-WEBSITES^800","ANIMATED-WEBSITES^800"],
    typeSpeed: 36,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,
    showCursor: false,
};

var typed = new Typed("#typed-output", options);
