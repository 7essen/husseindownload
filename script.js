var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // عرض شريحة واحدة فقط في كل مرة
    spaceBetween: 0, // لا يوجد تباعد بين الشرائح
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, // جعل النقاط أكثر ديناميكية
    },
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // عند تغيير الشريحة
    on: {
        slideChangeTransitionStart: function () {
            var slides = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide) => {
                slide.style.opacity = '0'; // إخفاء جميع الشرائح
                slide.style.visibility = 'hidden'; // إخفاء الشرائح بشكل كامل
            });
            slides[this.activeIndex].style.opacity = '1'; // إظهار الشريحة النشطة
            slides[this.activeIndex].style.visibility = 'visible'; // جعل الشريحة النشطة مرئية
        },
        init: function () {
            var slides = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide) => {
                slide.style.opacity = '0'; // إخفاء جميع الشرائح عند التحميل
                slide.style.visibility = 'hidden'; // إخفاء الشرائح بشكل كامل
            });
            slides[this.activeIndex].style.opacity = '1'; // إظهار الشريحة النشطة
            slides[this.activeIndex].style.visibility = 'visible'; // جعل الشريحة النشطة مرئية
        }
    }
});
