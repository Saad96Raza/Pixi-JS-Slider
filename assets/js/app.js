import {TweenMax  } from 'gsap';

const  imagesLoaded = require('imagesloaded');
import distortImage from '../images/clouds.jpg'
import './demo';




class App{
constructor(){

this.time = 0

imagesLoaded(document.body, () => document.body.classList.remove('loading'));

var spriteImages = document.querySelectorAll( '.slide-item__image' );
this.spriteImagesSrc = [];


for ( var i = 0; i < spriteImages.length; i++ ) {
    var img = spriteImages[i];
    this.spriteImagesSrc.push( img.getAttribute('src' ) );
}

this.createWebGl()
this.addEventListener()

}



createWebGl(){

this.initCanvasSlideshow = new CanvasSlideshow({
sprites: this.spriteImagesSrc,
displacementImage: distortImage,
autoPlay: true,
autoPlaySpeed: [4, 3],
displaceScale: [200, 500],
interactive: true,
interactionEvent: 'click', // 'click', 'hover', 'both' 
dispatchPointerOver: true

});

TweenMax.fromTo(".title__1",2,{

clipPath:"inset(100%)",
x:-40,
ease:"Expo.easeOut"},
{
clipPath:"inset(0)",
x:0,
ease:"Expo.easeOut"
})


}



createMouseMove(e){

this.posX =  (e.clientX  - window.innerWidth / 2) ;
this.posY =  (e.clientY  - window.innerHeight / 2) ;
this.arrow =  document.querySelector('.arrow');
TweenMax.to(".arrow",0.6,{x:this.posX,y:this.posY,ease:"none"})


}

addEventListener(){

window.addEventListener('mousemove',this.createMouseMove.bind(this))

}





}

new App()