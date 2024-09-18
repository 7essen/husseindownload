// إعداد سلايدر لقطات الشاشة
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

// إعداد الرسم البياني باستخدام JSC
var chart,
options = { 
  debug: true, 
  type: 'column', 
  title_label_text: 'نسبة الجودة والثبات', 
  defaultPoint_label_visible: true,
  
  series: [{
      points: [
          { x: '7eSen TV', y: 90 },
          { x: 'yacine', y: 70 },
          { x: 'ostora', y: 60 },
          { x: 'drama live', y: 50 }
      ]
     }],
     
     axes: [
       { 
         primary: true, 
         title_label_text: 'التطبيقات' 
       }, 
       { 
         title_label_text: 'النسبة المئوية' 
       }
     ]
}; 

JSC.ready().then(function() { 
  chart = new JSC.Chart('chartDiv', options); 
});
