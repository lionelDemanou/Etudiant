/**
 * Created by FabriceBlancoeur on 2016-04-30.
 */
for(var i=0;i<10;i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },1000);
    })(i);
}

console.log("fini");