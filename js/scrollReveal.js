/* TITLES SECTION */
const title = ScrollReveal({
    distance: '40px',
    opacity: 0,
    reset: true,
    delay: 50,
    duration: 800
})

title.reveal('.title-container h2')
title.reveal('.title-container p', { delay: 400 })

/* CAROUSEL SECTION */
title.reveal('.carousel-item1 h1')
title.reveal('.carousel-item1 p', { delay: 400 })

/* PRESENTATION SECTION */
const presentation = ScrollReveal({
    distance: '40px',
    opacity: null,
    duration: 1000,
    reset: true
})
const slideRight = {
    origin: 'right'
}
const slideLeft = {
    origin: 'left'
}

presentation.reveal('#Lorem1', slideRight)
presentation.reveal('#Lorem2', slideLeft)
presentation.reveal('#Lorem3', slideRight)

/* PRESTATIONS SECTION */
const prestation = ScrollReveal({
    distance: '100px',
    origin: 'left',
    opacity: 0,
    reset: true,
})

prestation.reveal('.service1', { delay: 100 })
prestation.reveal('.service2', { delay: 200 })
prestation.reveal('.service3', { delay: 300 })