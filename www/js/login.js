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

document.addEventListener('DOMContentLoaded', function() {
	addAllEvents();
	
}, false);

function addAllEvents(){
	event.preventDefault();
	event.stopPropagation();
	//? ^
	const lastName = document.getElementById("lastname");
	const firstName = document.getElementById("firstname");
	const birthDate = document.getElementById("birthdate");
	const userName = document.getElementById("username");
	const userPwd = document.getElementById("userpwd");
	const userEmail = document.getElementById("useremail");
	
	lastName.addEventListener('change', noEmpty);
	firstName.addEventListener('change', noEmpty);

	function noEmpty(e){
		if(e.target.value.length === 0){
			e.target.classList.add("js-invalid");
		}
	}
}

// js-valid avec 'input' au lieu de 'change'



