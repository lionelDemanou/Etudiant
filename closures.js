var nom = "king kong";
function majuscule(){
    console.log(nom);
    nom="Gorilla";
    console.log(nom);
    return nom.toUpperCase();

}

var retour = majuscule();
console.log(retour);
console.log(nom);