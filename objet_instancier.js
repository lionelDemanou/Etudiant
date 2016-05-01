/**
 * Created by FabriceBlancoeur on 2016-04-30.
 */
var animal=function(){
    var race;
    this.setRace = function(lRace){
        race = lRace;
    };

    this.noise = function(m){
        var noise;
        if(race ='cat'){
            noise='meow';
        }else if(race=='dog'){
            noise ='wouf';
        }else{
            noise='Error:Race need to be set';
        }
        console.log(noise);
    };
};

var animal = new animal();
animal.setRace("cat");
animal.noise();

animal.tear=2;
console.log("tear",animal.tear);
delete animal.tear;

//animal= undefined; // permet de detruire d'objet
//le delete sert a supprimer les attributs ou les methodes
