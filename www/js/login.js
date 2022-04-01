document.addEventListener('DOMContentLoaded', function () {
    addAllEvents();

}, false);

function addAllEvents() {

    const userName = document.getElementById("username");
    const userPwd = document.getElementById("userpwd");

    [userName, userPwd].forEach(input =>
        input.addEventListener("keyup", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("login-submit").click();
            }
        })
    );
}
