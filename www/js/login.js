/*
utilisateur sort d'un champ requis & invalide
	vide
	mauvais format
-> bordure rouge (+ message?)

utilisateur sort d'un champ & valide
-> verifier si tous les champs sont remplis adequatement
	-> rendre le bouton disabled="false"
	
utilisateur sort d'un champ
-> validation
	pas vide
	pas vide
	vide ou : format
	au moins 6 chars
	au moins 8 char font min, maj, chiffre
	regExp \+@+.+\ ???
	
	dicter la destination des données
	dicter le comptmnt de Submit??
	
Le formulaire devra être soumis à une page dynamique
(fournie, il s'agît du script register.py dans le répertoire www/htbin.
Ce script écrira les données reçues dans le fichiers data/user.dat). 

???? fournir les données à register.py?


terminer l'etape 3 
inserer du contenu dans les pages existantes

*/

document.addEventListener('DOMContentLoaded', function () {
    addAllEvents();

}, false);

function addAllEvents() {
    event.preventDefault();
    event.stopPropagation();
    //? ^
    const dobExp = new RegExp("^(\\d{2})/(\\d{2})/(\\d{4})$"); // jj/mm/aaaa
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

    lastName.addEventListener('input', valNoEmpty);
    firstName.addEventListener('input', valNoEmpty);
    birthDate.addEventListener('input', valDate);
    userName.addEventListener('input', valUsername);
    userPwd.addEventListener('input', valPwd);
    userEmail.addEventListener('input', valEmail);

    function validate(elm) {
        elm.classList.remove(invalidClass);
        elm.classList.add(validClass);
    }

    function invalidate(elm) {
        elm.classList.remove(validClass);
        elm.classList.add(invalidClass);
    }

    function checkSize(elm, minSize) {
        if (elm.value.length >= minSize && elm.classList.contains(invalidClass)) {
            validate(elm);
        } else if (elm.value.length < minSize) {
            invalidate(elm);
        }
    }

    function checkFormat(elm, inFormat) {
        if (elm.value.match(inFormat) && elm.classList.contains(invalidClass)) {
            validate(elm);
        } else if (!(elm.value.match(inFormat))) {
            invalidate(elm);
        }
    }

    function valNoEmpty(e) {
        checkSize(e.target, 1);
    }

    function valDate(e) {
        checkFormat(e.target, dobExp);
    }

    function valUsername(e) {
        checkSize(e.target, 6);
    }

    function valPwd(e) {
        checkFormat(e.target, pwdExp);
    }

    function valEmail(e) {
        checkFormat(e.target, emailExp);
    }

}

// js-valid avec 'input' au lieu de 'change'



