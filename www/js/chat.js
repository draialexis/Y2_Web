/* By Matrod C. & Drai A., 2021-22 */
$(document).ready(function () {
    const $form = $("#chat-form");
    const $box = $("#comments-section");
    refresh();

    $("#chat-toggle").click(function () {
        $(this).toggleClass("toggled");
        if ($form.attr("hidden")) {
            $form.removeAttr("hidden");
        } else {
            $form.attr("hidden", true);
        }
    });

    $("#chat-submit").click(function (evt) {
        evt.preventDefault();
        $.ajax({
            type: "POST",
            url: "htbin/chatsend.py",
            data: {msg: $("#msg").val()},
            error: function (e) {
                $("#error-zone").html(e);
            },
            success: function () {
                $("#error-zone").empty();
            }
        });
        refresh();
    });

    function refresh() {
        $box.empty();
        $.get("htbin/chatget.py", function (data) {
            data.forEach(datum => {
                $box.append(datum.date + ", " + datum.time + " (" + datum.user + ") : " + datum.msg + "<br/>");
            })
        });
    }
});
