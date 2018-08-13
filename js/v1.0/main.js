var accordionItems = document.getElementsByClassName('demo-accordion__item');
var accordionHeadings = document.getElementsByClassName('demo-accordion__item__header')

for (i = 0; i < accordionHeadings.length; i++) {
    accordionHeadings[i].addEventListener('click', openToggle, false);
}

function openToggle(e) {
    var thisItemContentClass = this.parentNode.className;
    for (i = 0; i < accordionItems.length; i++) {
        accordionItems[i].className = 'demo-accordion__item closed';
    }
    if (thisItemContentClass = 'demo-accordion__item closed') {
        this.parentNode.className = 'demo-accordion__item open';
    }
    e.preventDefault();
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                margin: 0
            },
            600: {
                items: 2,
                nav: false,
                dots: true,
                margin: 10
            },
            768: {
                items: 3,
                nav: true,
                dots: true,
                margin: 20
            }
        }
    });
});