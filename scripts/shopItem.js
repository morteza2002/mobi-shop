class Slider2 {
    constructor(containerSelector, slideSelector, prevButtonSelector, nextButtonSelector) {
        this.slideIndex = 0;
        this.slidesToShow = 3;
        this.slides = document.querySelectorAll(slideSelector);
        this.totalSlides = this.slides.length;

        document.querySelector(prevButtonSelector).addEventListener('click', () => this.moveSlider(-1));
        document.querySelector(nextButtonSelector).addEventListener('click', () => this.moveSlider(1));

        this.showSlides();
    }

    showSlides() {
        for (let i = 0; i < this.totalSlides; i++) {
            this.slides[i].style.display = 'none';
        }

        for (let i = this.slideIndex; i < this.slideIndex + this.slidesToShow; i++) {
            if (this.slides[i]) {
                this.slides[i].style.display = 'block';
            }
        }
    }

    moveSlider(n) {
        this.slideIndex += n;
        if (this.slideIndex >= this.totalSlides) {
            this.slideIndex = 0;
        } else if (this.slideIndex < 0) {
            this.slideIndex = this.totalSlides - this.slidesToShow;
        }
        this.showSlides();
    }
}

// نمونه ایجاد اسلایدر
const mySlider = new Slider2('.slider-container', '.slide2', '.prev2', '.next2');
