/* 
Activité : gestion des Contacts
*/

var contacts = [];

class Contact {
    constructor(name, firstName) {
        this.name = name;
        this.firstName = firstName;
        
    }

    get print() {
	
        return `Nom : ${this.name} Prénom : ${this.firstName}`;
    
    }

}

var contact1 = new Contact("Lévisse","Carole");
var contact2 = new Contact("Nelsonne", "Mélodie");

contacts.push(contact1);
contacts.push(contact2);

console.log ("Bienvenu dans le gestionnaire de Contacts");


var proposition =99;

while (proposition !== 0) {

	console.log("1 : Lister les Contacts");
    console.log("2 : Ajouter un Contact");
	console.log("0 : Quitter");
	
	var proposition = Number(prompt("Choisissez une option :"));
	
	switch (proposition) {

		case 1:
			for (var i = 0; i < contacts.length; i++) {
				console.log(contacts[i].print);
			}
			break;
		case 2:
			var nom = prompt("Entrer le nom de la personne");
			var prenom = prompt("Entrer le prénom de la personne");
            var nomContact = new Contact(nom, prenom);

			contacts.push(nomContact);

			console.log("Le Contact a bien été ajouté");
			break;
		case 0:
			console.log("au revoir !");
			break;
		default:
			

				console.log("Veuillez saisir la bonne option SVP !!!");
				
			break;
		}
		console.log();
}
