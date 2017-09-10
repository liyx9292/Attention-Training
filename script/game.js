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
            for(let i=0;i<aTd.length; i++){
                aTd[i].innerHTML = num[i];
            }
            return;
        }
    }

    oBtn.onclick=function(){
        showNum();
        num =[];
        

        
        for(let i = 0; i<aTd.length ; i++){
            aTd[i].addEventListener('click',function(){
                numBijiao = parseInt(this.innerText);
                console.log(numBijiao);
                var j=aBijiao.length - 1;
               
                if( aBijiao.length<1){

                    if(numBijiao=== 1){
                        aBijiao.push(numBijiao);
                     }else{
                        return;
                     }
                }else if(aBijiao.length<24){
                    if(numBijiao - aBijiao[j] == 1){
                        aBijiao.push(numBijiao);
                    }else{
                        return;
                    }
                }else{  
                    //在点击最后一个数字时同时跳出完成界面
                    if(numBijiao - aBijiao[j] == 1){
                        aBijiao.push(numBijiao);
                        alert('恭喜完成');
                    }else{
                        return;
                    }
                };
            },false)
        }
    };


    
};

   