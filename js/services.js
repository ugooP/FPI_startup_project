const rollOut = document.querySelectorAll('.roll-out')
const services = document.querySelectorAll('.service')

// When user click on service card, change the roll out
for (let i = 0; i < services.length; i++) {
    services[i].addEventListener('click', () => {
        // If roll out content egual '-', set it to '+'
        if (rollOut[i].innerHTML == '-') {
            rollOut[i].innerHTML = '+'
        } else {
            rollOut[i].innerHTML = '-'
        }
    })
}