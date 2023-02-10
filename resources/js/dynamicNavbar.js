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

    let sidebar = document.querySelector('.w-sidebar')
    let content = document.querySelector('#nova .content')
    let contentHeader = document.querySelector('#nova .h-header')
    let allNovaDivs = document.querySelectorAll('#nova > div');
    if(allNovaDivs.length > 0){
        if(contentHeader == null && allNovaDivs[0] != undefined){
            allNovaDivs[0].className += ' h-header';
            contentHeader = document.querySelector('#nova .h-header')
        }
        if(allNovaDivs[1] != undefined){
            if(sidebar == null){
                let sidebarChildren = allNovaDivs[1].children;
                if(sidebarChildren != undefined && sidebarChildren.length > 0){
                    sidebarChildren[0].className += ' w-sidebar ';
                }
            }
            if(content == null){
                let contentChildren = allNovaDivs[1].children;
                if(contentChildren != undefined && contentChildren.length > 0){
                    contentChildren[1].className += ' content ';
                }
            }
        }
    }

    contentHeader.style.width = '100%'
}
