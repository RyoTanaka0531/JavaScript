var i = 1;
try{
    // 例外が発生するかもしれない命令(群)
    i = i*j;
} catch(e){
    // 例外が発生した時に実行される命令(群)
    console.log(e.message);
} finally{
    //  例外の有無にかかわらず、最終的に実行される命令(群)
    console.log('処理は完了しました。');
}