/**
 * Created by FabriceBlancoeur on 2016-04-30.
 */
/**var anom=function(){
    console.log("Bonjour");
}
 anom();*/

var test1=function(){
    var x=1;
    var test2=function(){
        var x=2;
        var test3=function(){
             x=3;
            console.log("test3",x);
        }();
        console.log("test2",x)
    }();
    console.log("test1",x);
}();


