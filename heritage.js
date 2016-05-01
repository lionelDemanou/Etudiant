/**
 * Created by FabriceBlancoeur on 2016-04-30.
 */
//les prototypes contiens tous les fonctions qui peuvent etre acder a pertir d'un objet

var cat = function(){};
console.log(cat.prototype); // retourne un objet vide
cat.prototype.talk= function(){console.log("meow");}

var felix= new cat();
var lili = new cat();
felix.talk();
lili.talk(); //meow meow

cat.prototype.talk= function(){console.log("graow");}
felix.talk();
lili.talk(); //meow meow

felix.prototype.talk= function(){console.log("twit");}
felix.talk();
lili.talk(); //meow meow

felix.constructor.prototype.talk();

felix instanceof cat ; // va resortir true. Donc felixe est tjr une instace de cat

