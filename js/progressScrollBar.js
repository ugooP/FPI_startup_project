const progressBar = document.querySelector('.progress-bar')
const bodyHeight = $('body').height() - $(window).height()

setInterval(() => {
    const bodyPos = document.querySelector('body').getBoundingClientRect().top
    const diff = bodyHeight + bodyPos
    const progressPercentage = diff / bodyHeight * 100
    const progressBarWidth = Math.round(100 - progressPercentage)

    progressBar.style.width = `${progressBarWidth}%`
})