// التأكد من أن DOM كامل تم تحميله قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', () => {

    // جلب المودال وزر الإغلاق
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".close-btn");

    // جلب جميع البطاقات
    const cards = document.querySelectorAll(".card");

    // جلب العناصر داخل المودال لتحديث محتواها
    const modalImg = document.getElementById("modalImg");        // صورة المنتج
    const modalTitle = document.getElementById("modalTitle");    // اسم المنتج
    const modalPrice = document.getElementById("modalPrice");    // السعر
    const modalDesc = document.querySelector(".modal-info .description"); // وصف المنتج

    // إضافة حدث الضغط لكل بطاقة
    cards.forEach(card => {
        card.addEventListener('click', (e) => {

            // تجاهل الضغط على أيقونات مثل القلب أو السهم (لا يفتح المودال)
            if(e.target.closest('.icons')) return;

            // جلب صورة واسم البطاقة
            const imgSrc = card.querySelector('img').src;
            const title = card.querySelector('h3').innerText;

            // جلب السعر الحالي فقط (تجاهل السعر القديم داخل span)
            const priceContainer = card.querySelector('.price').childNodes[0].textContent.trim();

            // جلب الوصف من خاصية data-description، مع وضع نص افتراضي إذا لم يوجد
            const desc = card.getAttribute('data-description') || "لا يوجد وصف متوفر حالياً."; 

            // تحديث محتويات المودال
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = priceContainer; // السعر الحالي فقط
            modalDesc.innerText = desc; 

            // عرض المودال
            modal.style.display = "flex";
        });
    });

    // إغلاق المودال عند الضغط على زر الإغلاق
    closeBtn.onclick = () => modal.style.display = "none";

    // إغلاق المودال عند الضغط خارج محتوى المودال
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }
});


