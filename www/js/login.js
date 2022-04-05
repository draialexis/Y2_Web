document.addEventListener('DOMContentLoaded', function () {
    addAllEvents();

}, false);

function addAllEvents() {

    const userName = document.getElementById("username");
    const userPwd = document.getElementById("userpwd");
    const form = document.getElementById("login-form");

    [userName, userPwd].forEach(input =>
        input.addEventListener("keyup", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("login-submit").click();
            }
        })
    );


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // could be made more dynamic, and less dependent on details in the html... maybe using FormData?
        // on the other hand, no time + login implementation details are fairly standard
        const params = "username=" + userName.value + "&userpwd=" + userPwd.value;
        const url = "htbin/login.py";

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);

        const target = document.getElementById("ajax-target");

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = xhr.responseText;
                if (response.startsWith("Bonjour")) {
                    target.style.color = "darkgreen";
                } else {
                    target.style.color = "darkred";
                }
                target.innerHTML = response;
                target.hidden = false;
            }
        }
    });
    //TODO reset should clear all borders and warnings
}
