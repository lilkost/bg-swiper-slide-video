const video = document.querySelector('.video-bg');

const swiperText = new Swiper('.swiper', {
    speed: 1600,
    mousewheel: {},
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
});

swiperText.on('slideChange', ()=> {
    gsap.to(video, 1.6, {
        currentTime: (video.duration / (swiperText.slides.length - 1)) * swiperText.realIndex,
        ease: Power2.easeOut
    });
});


swiperText.on('slideChangeTransitionStart', ()=> {
    video.classList.add('change');
}).on('slideChangeTransitionEnd', ()=> {
    video.classList.remove('change');
});