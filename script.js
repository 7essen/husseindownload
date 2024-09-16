* {
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4; /* لون خلفية الصفحة */
    overflow-x: hidden; /* إخفاء التمرير الأفقي */
}

header {
    background: linear-gradient(to right, #007bff, #6610f2); /* خلفية متدرجة */
    color: #ffffff;
    padding: 20px;
    text-align: center; /* محاذاة النص إلى المنتصف */
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
}

section {
    padding: 40px; /* زيادة التباعد */
    margin: 20px auto;
    max-width: 800px; /* عرض أقصى للجزء */
    background-color: #ffffff; /* لون خلفية القسم */
    border-radius: 8px; /* زوايا دائرية */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* ظل خفيف */
}

h2 {
    text-align: center; /* محاذاة العنوان في المنتصف */
}

/* سلايدر لقطات الشاشة */
.swiper-container {
   width: 100%;
   height: 400px; /* تحديد ارتفاع ثابت للسلايدر */
   position: relative; /* لجعل النقاط تحت الصورة */
}

.swiper-slide img {
   width: 100%; /* عرض الصورة بالكامل */
   height: auto; /* جعل الصورة تأخذ كامل ارتفاع السلايدر */
   object-fit: cover; /* الحفاظ على نسبة العرض إلى الارتفاع */
   border-radius: 8px; /* زوايا دائرية للصورة */
}

/* تنسيق النموذج */
form {
   display: flex;
   flex-direction: column;
}

form label {
   margin-top: 10px;
}

form input, form textarea {
   padding: 10px;
   border-radius: 5px; /* زوايا دائرية */
   border: 1px solid #ccc; /* لون الحدود */
}

/* زر إرسال */
form button {
   margin-top: 10px;
   padding: 10px;
   border-radius: 5px; /* زوايا دائرية للزر */
   border: none; /* إزالة الحدود */
   background-color: #007bff; /* لون خلفية الزر */
   color: white; /* لون النص */
   transition: background-color 0.3s ease; /* تأثير سلس عند التمرير */
}

form button:hover {
   background-color: #0056b3; /* لون الزر عند التمرير */
}

/* زر تنزيل */
.button-container {
   text-align: center; /* محاذاة الزر في المنتصف */
   margin-top: 20px; /* تباعد أعلى الزر */
}

.download-button {
   padding: 15px; /* تباعد داخلي للزر */
   border-radius: 5px; /* زوايا دائرية للزر */
   border: none; /* إزالة الحدود */
   background-color: #28a745; /* لون أخضر */
   color: white; /* لون النص */
   font-size: large; /* حجم خط أكبر */
   cursor: pointer; /* تغيير المؤشر عند التمرير فوق الزر */
   transition: all 0.3s ease; /* تأثير سلس عند التمرير */
}

.download-button:hover {
   background-color: #218838; /* لون أخضر داكن عند التمرير */
}

/* تنسيق الفوتر */
footer {
   background-color: #343a40; 
   color: #ffffff; 
   text-align: center; 
   padding: 10px 0;
}
