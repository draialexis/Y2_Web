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

    [checkNoEmpty, checkAll].forEach(fun =>
        lastName.addEventListener("input", fun, false)
    );
    [checkNoEmpty, checkAll].forEach(fun =>
        firstName.addEventListener("input", fun, false)
    );
    [checkDate, checkAll].forEach(fun =>
        birthDate.addEventListener("input", fun, false)
    );
    [checkUserName, checkAll].forEach(fun =>
        userName.addEventListener("input", fun, false)
    );
    [checkPwd, checkAll].forEach(fun =>
        userPwd.addEventListener("input", fun, false)
    );
    [checkEmail, checkAll].forEach(fun =>
        userEmail.addEventListener("input", fun, false)
    );

    function checkNoEmpty(e) {
        return check(e.target, 1, e.target.value.length >= 1);
    }

    function checkDate(e) {
        return check(e.target, dobExp, e.target.value.match(dobExp));
    }

    function checkUserName(e) {
        return check(e.target, 6, e.target.value.length >= 6);
    }

    function checkPwd(e) {
        return check(e.target, pwdExp, e.target.value.match(pwdExp));
    }

    function checkEmail(e) {
        return check(e.target, emailExp, e.target.value.match(emailExp));
    }

    function check(elm, inFormat, condition) {
        if (condition && elm.classList.contains(invalidClass)) {
            elm.classList.remove(invalidClass);
            elm.classList.add(validClass);
            return true;
        } else if (!condition && !(elm.classList.contains(invalidClass))) {
            elm.classList.remove(validClass);
            elm.classList.add(invalidClass);
            return false;
        }
    }

    function checkAll() {
        let button = document.getElementById("login-submit");
        if (
            lastName.value.length >= 1
            && firstName.value.length >= 1
            && birthDate.value.match(dobExp)
            && userName.value.length >= 6
            && userPwd.value.match(pwdExp)
            && userEmail.value.match(emailExp)
        ) {
            if (button.disabled === true) {
                button.disabled = false;
            }
        } else {
            if (button.disabled === false) {
                button.disabled = true;
            }
        }
    }
}
