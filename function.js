/**
 * Created by FabriceBlancoeur on 2016-04-30.
 */
//function basique
function dire(phrase){
    //phrase= undefined; //methode pour destroy les variables
    console.log(phrase);
}

dire("Bonjour");
//definition d'une foncion anonyme
var crier = function (phrase) {
     console.log(phrase.toUpperCase());
}

crier("Ca va?");