let slideIndex = 1;

// Function to move to the next or previous slide
const plusSlides = (n) => {
  showSlides(slideIndex + n);
};

// Function to jump to a specific slide
const currentSlide = (n) => {
  showSlides(n);
};

// Function to show slides
const showSlides = (n) => {
  let newIndex = n;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (newIndex > slides.length) {
    newIndex = 1;
  }
  if (newIndex < 1) {
    newIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[newIndex - 1].style.display = "block";
  dots[newIndex - 1].classList.add("active");

  slideIndex = newIndex;
};

// Automatic slideshow
const interval = setInterval(() => {
  plusSlides(1);
}, 10000); // Change slides every 10 seconds

// Event listeners for next and previous buttons
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Event listeners for dots
const dotList = document.querySelectorAll('.dot');
dotList.forEach((dot, index) => {
  dot.addEventListener('click', () => currentSlide(index + 1));
});
