document.addEventListener('DOMContentLoaded', function () {
    addAllEvents();

}, false);

function addAllEvents() {

    const userName = document.getElementById("username");
    const userPwd = document.getElementById("userpwd");

    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        if (/*...*/true) {
            e.preventDefault();
            // ...
        } else {
            form.submit();
        }
    });
}
