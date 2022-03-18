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
    const lastName = document.getElementById("lastname");
    const firstName = document.getElementById("firstname");
    const birthDate = document.getElementById("birthdate");
    const userName = document.getElementById("username");
    const userPwd = document.getElementById("userpwd");
    const userEmail = document.getElementById("useremail");

    lastName.addEventListener('change', checkNoEmpty);
    firstName.addEventListener('change', checkNoEmpty);
    birthDate.addEventListener('change', checkDateFormat);
    userName.addEventListener('change', checkUsername);
    userPwd.addEventListener('change', checkPwd);
    userEmail.addEventListener('change', checkNoEmpty)

    function checkNoEmpty(e) {
        if (e.target.value.length < 1) {
            e.target.classList.add("js-invalid");
        }
    }

    function checkDateFormat(e) {

    }

    function checkUsername(e) {
        if (e.target.value.length < 6) {
            e.target.classList.add("js-invalid");
        }
    }

    function checkPwd(e) {
        const pwdExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        if (!(e.target.match(pwdExp))) {
            e.target.classList.add("js-invalid");
        }
    }



}

// js-valid avec 'input' au lieu de 'change'



