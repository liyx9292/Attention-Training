function addLoadEvent(func){
    var oldonLoad = window.onload;
    if(typeof window.onload!='function'){
        window.onload = func;
    }else{
        widow.onload=function(){
            oldonload();
            func();
        }
    }
}