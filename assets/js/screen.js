window.addEventListener('resize', function (e) {
    document.body.style.height = window.innerHeight + 'px'
    document.body.style.width = window.innerWidth + 'px'
})
window.dispatchEvent(new Event('resize'))