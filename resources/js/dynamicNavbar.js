window.addEventListener('DOMContentLoaded', function() {
    calibrateWidths()
})

window.addEventListener('load', function() {
    calibrateWidths()
})

window.addEventListener('resize', function() {
    calibrateWidths()
})

function calibrateWidths() {
    document
        .querySelector('meta[name=viewport]')
        .setAttribute(
            'content',
            'width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0'
        )

    let contentHeader = document.querySelector('#nova .h-header')
    contentHeader.style.width = '100%'
}
