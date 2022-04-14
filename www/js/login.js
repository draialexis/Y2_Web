/* By Matrod C. & Drai A., 2021-22 */

document.addEventListener('DOMContentLoaded', function () {
    addAllEvents();

}, false);

function addAllEvents() {

    const userName = document.getElementById("username");
    const userPwd = document.getElementById("userpwd");
    const loginForm = document.getElementById("login-form");
    const ajaxTarget = document.getElementById("ajax-target");

    [userName, userPwd].forEach(input =>
        input.addEventListener("keyup", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("login-submit").click();
            }
            if (e.key === "Escape") {
                e.preventDefault();
                ajaxTarget.innerHTML = "";
            }
        })
    );


    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        userName.value = userName.value.normalize("NFD").replace(/\p{Diacritic}/gu, "");
        // could be made more dynamic, and less dependent on details in the html... maybe using FormData?
        // on the other hand, no time + login implementation details are fairly standard
        const params = "username=" + userName.value + "&userpwd=" + userPwd.value;
        const xhr = createXHR();
        xhr.open("POST", "htbin/login.py", true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = xhr.responseText;
                if (response.startsWith("Bonjour")) {
                    ajaxTarget.style.color = "darkgreen";
                } else {
                    ajaxTarget.style.color = "darkred";
                }
                ajaxTarget.innerHTML = response;
                ajaxTarget.hidden = false;
            }
        }
    });

    loginForm.addEventListener("reset", () => {
        ajaxTarget.hidden = true;
    });
}
