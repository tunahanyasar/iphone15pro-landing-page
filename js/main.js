// Tüm dinamik yapıların çalışması için kendi kendini çağıran fonksiyon
(function () {
    'use strict';
    

    AOS.init({
        startEvent: 'load',
        offset: 20,
        once: true,
    });

    // camera slider
    var camera = new Swiper('#camera .swiper', {
        speed: 600,
        spaceBetween: 12,
        navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // photos galeri
    var photos = GLightbox({
        selector: '#photos a.photo',
        
    });

    // commentcs için slider
    var comment = new Swiper('#comments .swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        }
    });

    var glightbox = GLightbox({
        selector: '.glightbox',
    })

    // Header scroll yapısı
    var header = document.getElementById('header');
    var headerScrolled = function (event) {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled')
        } else {
            header.classList.remove('header-scrolled')
        }
    }
    window.addEventListener('load',headerScrolled)
    document.addEventListener('scroll',headerScrolled)

    // Sayfa içi yönlendirmeler
    var links = document.getElementsByClassName('scrollto')

    var focusSectionLink = function (event) {
        for (const link of links) {
            var id = link.hash.slice(1);
            var section = document.getElementById(id);
            var position = window.scrollY + (window.innerHeight / 2);

            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                link.ariaCurrent = 'page';
                link.classList.add('active')
            } else {
                link.ariaCurrent = null;
                link.classList.remove('active')
            }
        }
    }
    var focusSection = function (event) {
        event.preventDefault();
        var id = event.target.hash.slice(1);
        var section = document.getElementById(id)

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: 'smooth',
            })
        }
    }

    window.addEventListener('scroll',focusSectionLink)

    for (const link of links) {
        link.addEventListener('click',focusSection)
    }
})();