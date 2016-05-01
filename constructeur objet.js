/**
 * Created by FabriceBlancoeur on 2016-04-30.
 */
var animal=function(race){

    this.noise = function(){
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
