/* By Matrod C. & Drai A., 2021-22 */

$(document).ready(function () {
    const $form = $("#chat-form");
    const $box = $("#comments-section");
    const postUrl = "htbin/chatsend.py";
    const getUrl = "htbin/chatget.py";
    const data = $form.serialize();
    refresh();

    $("#chat-toggle").click(function () {
        $(this).toggleClass("untoggled");
        if ($form.attr("hidden")) {
            $form.removeAttr("hidden");
        } else {
            $form.attr("hidden", true);
        }
    });

    $("#chat-submit").click(function (evt) {
        evt.preventDefault();
        $.post(postUrl, data)
            .done(function (data, status) {
                console.log("Data: " + data + "\nStatus: " + status)
            });
        refresh();
    });

    function refresh() {
        $box.empty();
        $.get(getUrl, function (data) {
            data.forEach(datum => {
                $box.append(datum.date + ", " + datum.time + " (" + datum.user + ") : " + datum.msg + "<br/>");
            })
        });
    }
});
