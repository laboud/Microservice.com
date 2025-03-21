
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
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

    if (!isValid) return;
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (!response.ok) throw new Error("خطأ في الشبكة");
        return response.json();
    })
    function uploadFile() {
        let fileInput = document.getElementById("fileInput");
        let file = fileInput.files[0];
    
        if (!file) {
            alert("Please select a file!");
            return;
        }
    
        let formData = new FormData();
        formData.append("file", file);
    
        fetch("https://file.io/", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("downloadLink").innerHTML = `<a href="${data.link}" target="_blank">Download File</a>`;
            } else {
                alert("File upload failed!");
            }
        })
        .catch(error => console.error("Error:", error));
    }
    
    
})
