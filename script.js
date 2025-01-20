document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                // إخفاء باقي المحتويات
                const allContents = document.querySelectorAll('.content');
                allContents.forEach(content => content.style.display = "none");
                
                // عرض المحتوى الخاص بالقائمة التي تم الضغط عليها
                content.style.display = "block";
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    console.log("Enjoy exploring the ocean life!");
});
