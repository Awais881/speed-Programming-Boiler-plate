

const slides = document.querySelectorAll('.slide');
const slideControls = document.querySelectorAll('.slide-control');

let activeSlide = 0;

const setActiveSlide = (slideIndex) => {
  slides[activeSlide].classList.remove('active-slide');
  slideControls[activeSlide].classList.remove('active-slide-control');
  activeSlide = slideIndex;
  slides[activeSlide].classList.add('active-slide');
  slideControls[activeSlide].classList.add('active-slide-control');
};

slideControls.forEach((control, index) => {
  control.addEventListener('click', () => {
    setActiveSlide(index);
  });
});

setInterval(() => {
  let nextSlideIndex = activeSlide + 1;
  if (nextSlideIndex === slides.length) {
    nextSlideIndex = 0;
  }
  setActiveSlide(nextSlideIndex);
}, 5000);
