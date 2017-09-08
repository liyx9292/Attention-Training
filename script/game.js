function game(){
    var aTd=document.getElementsByTagName('td');
    var oBtn = document.getElementById('btn1');


    function randomNum(min,max){
        range = max - min;
        range1 = Math.random()*range+min;
        final = Math.round(range1);
        return final;
    };

    var num = [];

    function showNum(){
        if(num.length<25){
            charu = randomNum(1,25);
            
            if (num.indexOf(charu)== -1){
                num.push(charu);
                showNum();
            }else{
                showNum();
            }
        }else{
            for(var i=0;i<aTd.length; i++){
                aTd[i].innerHTML = num[i];
            }
            return;
        }
    }

    oBtn.onclick=function(){
        showNum();
        num =[];
        
    };

};

   