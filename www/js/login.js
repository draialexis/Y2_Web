document.addEventListener('DOMContentLoaded', function () {
    addAllEvents();

}, false);

function addAllEvents() {
    event.preventDefault();
    event.stopPropagation();
    //? ^
    const dobExp = new RegExp("^(\\d{2})\/(\\d{2})\/(\\d{4})$"); // jj/mm/aaaa
    const pwdExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"); // 8 chars, incl. 1 lower, 1 upper, 1 num
    const emailExp = new RegExp("^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"); // (alpha and . )@(alpha).(alpha)...

    const validClass = "js-valid";
    const invalidClass = "js-invalid";

    const lastName = document.getElementById("lastname");
    const firstName = document.getElementById("firstname");
    const birthDate = document.getElementById("birthdate");
    const userName = document.getElementById("username");
    const userPwd = document.getElementById("userpwd");
    const userEmail = document.getElementById("useremail");

    lastName.addEventListener('input', checkNoEmpty);
    firstName.addEventListener('input', checkNoEmpty);
    birthDate.addEventListener('input', checkDate);
    userName.addEventListener('input', checkUserName);
    userPwd.addEventListener('input', checkPwd);
    userEmail.addEventListener('input', checkEmail);

    function validate(elm) {
        elm.classList.remove(invalidClass);
        elm.classList.add(validClass);
    }

    function invalidate(elm) {
        elm.classList.remove(validClass);
        elm.classList.add(invalidClass);
    }

    function checkSize(elm, minSize) {
        if (elm.value.length >= minSize && elm.classList.contains(invalidClass)) {
            validate(elm);
        } else if (elm.value.length < minSize && !(elm.classList.contains(invalidClass))) {
            invalidate(elm);
        }
    }

    function checkFormat(elm, inFormat) {
        if (elm.value.match(inFormat) && elm.classList.contains(invalidClass)) {
            validate(elm);
        } else if (!(elm.value.match(inFormat)) && !(elm.classList.contains(invalidClass))) {
            invalidate(elm);
        }
    }

    function checkNoEmpty(e) {
        checkSize(e.target, 1);
    }

    function checkDate(e) {
        checkFormat(e.target, dobExp);
    }

    function checkUserName(e) {
        checkSize(e.target, 6);
    }

    function checkPwd(e) {
        checkFormat(e.target, pwdExp);
    }

    function checkEmail(e) {
        checkFormat(e.target, emailExp);
    }

    function checkAll(e) {

    }
}


