function game(){
    var aTd=document.getElementsByTagName('td');
    var oBtn = document.getElementById('btn1');
    var timer = null;  
    var realTime = minute = second = 0;

    function randomNum(min,max){
        //计算随机数函数
        range = max - min;
        range1 = Math.random()*range+min;
        final = Math.round(range1);
        return final;
    };

    var num = [];

    function showNum(){
        if(num.length<25){
            //当length小于25时，随机生成一个数字
            charu = randomNum(1,25);
            
            if (num.indexOf(charu)== -1){
                //当num中不存在这个数字的时候，将数字插入进num
                num.push(charu);
                showNum();
            }else{
                //如果有重复数字则再一次执行
                showNum();
            }
        }else{
            //当length到25时，将数组中的数字依次放入td标签中
            for(var i=0;i<aTd.length; i++){
                aTd[i].innerHTML = num[i];
            }
            return;
        }
    }
    
    function miaoBiao(){
        //计时器函数，每0.1秒执行一次
        timer = setInterval(function(){
            realTime += 100; //每次+100
            if(realTime >950){
                //执行已经到达1秒时
                second += 1;
                realTime =0;
            }
    },100)}


    function clearTimer(){
        //关闭计时器
        realSecond = second + realTime/1000; //如果直接在alter中加的话，会有字符串相加
        
        alert ("时间是" + realSecond + "秒");
        clearInterval(timer);
        realTime =0;
        second = 0
    };


    oBtn.onclick=function(){
        showNum();
        num =[];
        miaoBiao();
        
        for(let i = 0; i<aTd.length ; i++){
            //在每个td标签中添加点击事件
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
                        clearTimer();
                    }else{
                        return;
                    }
                };
            },false)
        }
    };

};

   