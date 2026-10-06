let name = prompt("نام خود را وارد کنید:");
    let age = prompt("سن خود را وارد کنید:");
    let telnumber =prompt("تلفن همراه خود را وارد کنید")
    let email =prompt("ایمیل خود را وارد کنید")

    let confirmInfo = confirm("آیا اطلاعات وارد شده درست است؟");

    if (confirmInfo) {
        alert("ثبت نام با موفقیت انجام شد 🌷");

        console.log("نام: " + name);
        console.log("سن: " + age);
    } else {
        alert("ثبت نام لغو شد!");
    }
