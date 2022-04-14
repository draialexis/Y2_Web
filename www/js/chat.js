/* By Matrod C. & Drai A., 2021-22 */

$(document).ready(function () {

    const form = $("#chat-form");

    $("#chat-input").keyup(function (evt) {
        if (evt.which === 13) {
            evt.preventDefault();
            $("#chat-form").submit();
        }
    });

    $("#chat-toggle").click(function () {
        $(this).toggleClass("untoggled");
        if (form.attr("hidden")) {
            form.removeAttr("hidden");
        } else {
            form.attr("hidden", true);
        }
    });
});
