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
title.reveal('.carousel-item1 p', { delay: 600 })

/* PRESENTATION SECTION */
const presentation = ScrollReveal({
    distance: '40px',
    opacity: 0,
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

/* VALUES SECTION */
const values = ScrollReveal({
    opacity: 0,
    reset: true,
    origin: 'left'
})
const h3 = {
    duration: 800,
    distance: '40px'
}
const p = {
    delay: 300,
    duration: 1000,
    distance: '80px'
}

//values.reveal('.value-card h3', h3)
//values.reveal('.value-card p', p)

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