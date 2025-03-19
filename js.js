document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        const username = document.getElementById("a");
        if (username.value.trim() === "") {
            alert("يرجى إدخال اسم المستخدم!");
            isValid = false;
        }
        const email = document.getElementById("g");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(email.value)) {
            alert("يرجى إدخال بريد إلكتروني صحيح بصيغة @gmail.com!");
            isValid = false;
        }

        const price = document.getElementById("j");
        if (price.value <= 0 || price.value === "") {
            alert("يرجى إدخال سعر صالح!");
            isValid = false;
        }
        const fileInput = document.getElementById("c");
        if (fileInput.files.length === 0) {
            alert("يرجى رفع ملف المشروع!");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
