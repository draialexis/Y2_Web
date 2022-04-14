/* By Matrod C. & Drai A., 2021-22 */
function createXHR() {
    let request;
    try {
        request = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e1) {
        try {
            request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e2) {
            try {
                request = new XMLHttpRequest();
            } catch (e3) {
                request = false;
            }
        }
    }
    return request;
}
