const progressBar = document.querySelector('.progress-bar')

setInterval(() => {
    const bodyHeight = $('body').height() - $(window).height()
    const bodyPos = document.querySelector('body').getBoundingClientRect().top
    console.log(bodyPos);
    const diff = bodyHeight + bodyPos
    const progressPercentage = diff / bodyHeight * 100
    const progressBarWidth = Math.round(100 - progressPercentage)

    progressBar.style.width = `${progressBarWidth}%`
})