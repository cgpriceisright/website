const carouselSlide = document.querySelector('.carousel-Slide');
const carouselImages = document.querySelectorAll('.carousel-Slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px';

carouselSlide.style.transform='translateX(' +(-size*counter) +'px)';

nextBtn.addEventlistener('click',()=>{
  if (counter >=carouselImages.length-1)return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px';

});

prevBtn.addEventlistener('click',()=>{
  if (counter <=0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px';

});

carouselSlide.addEventlistener('transitionend',)()=>{
if (carouselImages[counter].id==='lastClone')
    carousel.Slide.style.transition='none';
    counter = carouselImages.length -2;
    carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';
}

carouselSlide.addEventlistener('transitionend',)()=>{
if (carouselImages[counter].id==='firstClone')
    carousel.Slide.style.transition='none';
    counter = carouselImages.length -counter;
    carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel-slide");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel-slide");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}