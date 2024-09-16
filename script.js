var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, // جعل النقاط أكثر ديناميكية
    },
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    on: {
        init: function () {
            var slides = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide) => {
                slide.style.opacity = '0'; // إخفاء جميع الشرائح عند التحميل
            });
            slides[this.activeIndex].style.opacity = '1'; // إظهار الشريحة النشطة
        },
        slideChangeTransitionStart: function () {
            var slides = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide) => {
                slide.style.opacity = '0'; // إخفاء جميع الشرائح
            });
            slides[this.activeIndex].style.opacity = '1'; // إظهار الشريحة النشطة
        }
    }
});
