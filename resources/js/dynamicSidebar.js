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

    const sidebar = document.querySelector('.w-sidebar')
    const content = document.querySelector('#nova .content')

    sidebar.style = 'height: 100%'
    content.className += ' lg:block lg:absolute left-0 bottom-0 lg:top-[56px] lg:bottom-auto';
    content.style.marginLeft = sidebar.offsetWidth + 'px'
    content.style.width = 'auto'
    content.style.maxWidth = '100%'
}
