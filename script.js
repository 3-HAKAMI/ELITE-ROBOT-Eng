document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            if (content.classList.contains('show')) {
                // إغلاق العنصر
                content.classList.remove('show');
            } else {
                // إغلاق جميع العناصر الأخرى
                document.querySelectorAll('.content').forEach(div => {
                    div.classList.remove('show');
                });

                // فتح العنصر الحالي
                content.classList.add('show');
            }
        });
    });

    // السماح بالتمرير للأجهزة ذات العرض الكبير (مثل اللابتوب)
    const enableScroll = () => {
        if (window.innerWidth > 1024) {
            // السماح بالتمرير
            document.body.style.overflow = 'auto';
        } else {
            // منع التمرير
            document.body.style.overflow = 'hidden';
        }
    };

    // تنفيذ الخاصية عند تحميل الصفحة
    enableScroll();

    // تحديث الخاصية عند تغيير حجم الشاشة
    window.addEventListener('resize', enableScroll);
});
