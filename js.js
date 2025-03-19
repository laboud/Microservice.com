function login() {
    let a = document.getElementById("username").value;
    let b = document.getElementById("password").value;

    if (a.trim() !== ""&& typeof a==="string") {
        alert("اختر اسم مستخدم");
        return false;
    }

    if (b.trim()!== "") {
        alert("أدخل كلمة المرور");
        return false;
    }

    
}
