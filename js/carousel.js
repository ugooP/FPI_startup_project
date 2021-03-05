const carousel = document.querySelector('.carousel')
const slides = document.querySelectorAll('.carousel-item')
const dots = document.querySelectorAll('.dots-container a')
const nextSlideBtn = document.querySelector('.next-slide')
const prevSlideBtn = document.querySelector('.prev-slide')

// Each 5 seconds, go to the next slide
setInterval(() => {
    const slideWidth = carousel.getBoundingClientRect().width
    let index = getActiveSlide() + 1
 
    // If user are at the end of the carousel, return to the start
    if (index == slides.length) {
        index = 0

        carousel.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        updateActiveDot(index)
    } else {
        carousel.scroll({
            top: 0,
            left: slideWidth * index,
            behavior: 'smooth'
        })
        updateActiveDot(index)
    }
}, 5000)

// Go to the next slide
nextSlideBtn.addEventListener('click', () => {
    const slideWidth = carousel.getBoundingClientRect().width
    const index = getActiveSlide()
    const toScroll = (index + 1) * slideWidth

    if (index < slides.length - 1) {
        carousel.scroll({
            top: 0,
            left: toScroll,
            behavior: 'smooth'
        })
        updateActiveDot(index+1)
    } else {
        carousel.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        updateActiveDot(0)
    }
})

// Go to the previous slide
prevSlideBtn.addEventListener('click', () => {
    const slideWidth = carousel.getBoundingClientRect().width
    const index = getActiveSlide()
    const toScroll = (index - 1) * slideWidth

    // Check if the active slide is the last slide of the carousel
    if (index > 0) {
        carousel.scroll({
            top: 0,
            left: toScroll,
            behavior: 'smooth'
        })
        updateActiveDot(index-1)
    } else {
        carousel.scroll({
            top: 0,
            left: slides.length * slideWidth,
            behavior: 'smooth'
        })
        updateActiveDot(slides.length-1)
    }
})

function getActiveSlide() {
    // Return the number of the slide on which the user is
    for (let i = 0; i < slides.length; i++) {
        const bounds = slides[i].getBoundingClientRect();
        if (bounds.x < 1 && bounds.x > -1) {
            return i
        }
    }
}

function updateActiveDot(n) {
    // Remove the previous active dot
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('active')) {
            dots[i].classList.remove('active')
            break
        }
    }
    // Set the new active dot
    dots[n].classList.add('active')
}

function goToSlide(n) {
    const slideWidth = carousel.getBoundingClientRect().width

    carousel.scroll({
        top: 0,
        left: n * slideWidth,
        behavior: 'smooth'
    })
    updateActiveDot(n)
}