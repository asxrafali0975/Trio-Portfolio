
let tl = gsap.timeline();




tl.from(["#left"," #right"],{
   scale:0,
//    delay:0.4,
   duration:0.5,
   opacity:0,

})



tl.from(["#imagediv","#textcontent"],{
     scale:0,
//    delay:1.2,
   duration:0.8,
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

