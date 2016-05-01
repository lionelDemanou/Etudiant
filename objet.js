/**
 * Created by FabriceBlancoeur on 2016-04-30.
 */
//les bojets natifs
var object1={};
var object2={"cat":{},"dog":"wouf"};
var object3={cat:{},dog:{}};
var object4={cat:{number:3,totalweight:21},dog:{number:5,totalweight:104}};

console.log(object4.cat.totalweight); //C'est un objet natif. Facon d'acceder aux objets

var object5= {cat:{noise:function(){console.log("meow")}}
                ,dog:{noise:function(){console.log("wouf")}}
}
object5.cat.noise();

var object6 = {cat:"chat",dog:"chien",fish:"poisson"};

for(var animal in object6){
    console.log(animal);
    console.log(object6[animal]);
}