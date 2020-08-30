var x = 1;
var y = 0;
try{
    // 例外を発生させる
    if (y === 0){throw new Error('0で除算しようとしました。'); }
    var z = x / y;
} catch(e){
    console.log(e.message);
}