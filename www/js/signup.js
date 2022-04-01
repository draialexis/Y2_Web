document.addEventListener('DOMContentLoaded', function () {
    addAllEvents();

}, false);

function addAllEvents() {
    const pwdExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"); // 8 chars, incl. 1 lower, 1 upper, 1 num
    const emailExp = new RegExp("^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"); // (alpha and . )@(alpha)[.(alpha)... OPTIONNAL]

    const validClass = "js-valid";
    const invalidClass = "js-invalid";

    const lastName = document.getElementById("lastname");
    const firstName = document.getElementById("firstname");
    const birthDate = document.getElementById("birthdate");
    const userName = document.getElementById("username");
    const userPwd = document.getElementById("userpwd");
    const userEmail = document.getElementById("useremail");

    [checkNoEmpty, checkAll].forEach(fun =>
        lastName.addEventListener("input", fun)
    );
    [checkNoEmpty, checkAll].forEach(fun =>
        firstName.addEventListener("input", fun)
    );
    [checkDate, checkAll].forEach(fun =>
        birthDate.addEventListener("input", fun)
    );
    [checkUserName, checkAll].forEach(fun =>
        userName.addEventListener("input", fun)
    );
    [checkPwd, checkAll].forEach(fun =>
        userPwd.addEventListener("input", fun)
    );
    [checkEmail, checkAll].forEach(fun =>
        userEmail.addEventListener("input", fun)
    );

    function checkNoEmpty(e) {
        return check(e.target, e.target.value.length >= 1);
    }

    function parseMyDate(elm) {
        const now = new Date();
        let date;
        const arr = elm.split("/");
        const day = arr[0];
        const month = arr[1] - 1;
        const year = arr[2]
        const condition =
            day >= 1 && day <= 31
            && month >= 0 && month <= 11
            && year <= now.getFullYear() && year > 1900;

        if (condition) {
            date = new Date(year, month, day);
            return true;
        }
        return false;

    }

    function checkDate(e) {
        return check(e.target, parseMyDate(e.target.value) || e.target.value === "" || e.target.value === null);
    }

    function checkUserName(e) {
        return check(e.target, e.target.value.length >= 6);
    }

    function checkPwd(e) {
        return check(e.target, e.target.value.match(pwdExp));
    }

    function checkEmail(e) {
        return check(e.target, e.target.value.match(emailExp));
    }

    function check(elm, condition) {
        if (condition) {
            if (elm.classList.contains(invalidClass)) {
                elm.classList.remove(invalidClass);
            }
            elm.classList.add(validClass);
            elm.nextElementSibling.hidden = true;
            return true;
        } else if (!condition) {
            if (elm.classList.contains(invalidClass)) {
                elm.classList.remove(validClass);
            }
            elm.classList.add(invalidClass);
            elm.nextElementSibling.hidden = false;
            return false;
        }
    }

    function checkAll() {
        let button = document.getElementById("signup-submit");
        if (
            lastName.value.length >= 1
            && firstName.value.length >= 1
            && (birthDate.value === "" || birthDate.value === null || parseMyDate(birthDate.value))
            && userName.value.length >= 6
            && userPwd.value.match(pwdExp)
            && userEmail.value.match(emailExp)
        ) {
            if (button.disabled === true) { // all good + disabled => enable
                button.disabled = false;
            }
            return true;
        } else { // not all good + enabled => disable
            if (button.disabled === false) {
                button.disabled = true;
            }
            return false;
        }
    }

    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        if (!checkAll()) {
            e.preventDefault();
            alert("Le formulaire présente un ou plusieurs problèmes");
        } else {
            form.submit();
        }
    });
}
