setTimeout(function(){
    window.scrollTo(0,0);
},100)

//全屏滚动
var flag = 1;
var number = 0;
var part;

function move(part) {
    console.log(part);
    if(part==0){
        document.getElementById("k").className="sec1-con3-div2";
    }
    if(part!=0){
        document.getElementById("k").className="";
        
    }
    if(part==1){
        document.getElementById("r1").className="round1";
        document.getElementById("r2").className="round2";
        document.getElementById("r3").className="round3";
        var starid=1;
        app();
    }
    if(part!=1){
        document.getElementById("r1").className="";
        document.getElementById("r2").className="";
        document.getElementById("r3").className="";
        
    }
    if(part==4){
        document.getElementById("wrapper").style.display="block";
    }
    if(part!=4){
        document.getElementById("wrapper").style.display="none";
    }
    var to = part * 795;
    var from = window.pageYOffset;
    var speed = (to - from) / 200;
    // console.log(from, to);
    var timer = setInterval(function () {
        window.scrollBy(0, speed);
        
        if (Math.abs(window.pageYOffset - to) <=Math.abs(speed)) {
            window.scrollTo(0, to);
            flag = 1;
            clearInterval(timer);
            
        }
    }, 1)
}

window.onmousewheel = function (e) {
    if (flag == 1) {
        if (e.wheelDelta > 0 && number > 0 ) {

            number--;
            move(number);
            flag = 0;
            // console.log('up');
            
            
        } else if(e.wheelDelta < 0 && number < 4 ){

            number++;
            // console.log(number);
            move(number);
            flag = 0;
            // console.log('down');
            
        }
    } else {}
}

//获取当前日期
function getNowDate() {
date = new Date();
sign1 = "-";

year = date.getFullYear() // 年
month = date.getMonth() + 1; // 月
day  = date.getDate(); // 日

// 给一位数数据前面加 “0”
if (month >= 1 && month <= 9) {
month = "0" + month;
}
if (day >= 0 && day <= 9) {
day = "0" + day;
}

currentdate = year + sign1 + month + sign1 + day;
return currentdate;
}



console.log(jsonp);

getNowDate();


//接口
function app(){
var script = document.createElement("script");

script.src = "http://api.jisuapi.com/astro/fortune?astroid="+starid+"&date="+currentdate+"&appkey=&appkey=69401a43637af8ef&callback=jsonp";
document.body.insertBefore(script, document.body.firstChild);
document.getElementById("mydiv").innerHTML=currentdate;

}


function jsonp(thing){
message=thing;
var astroname=document.getElementById("datedat");
astroname.innerHTML=message.result.astroname;
/*今日运势*/
var today=document.getElementById("today");
today.innerHTML=message.result.astroname+"&nbsp;&nbsp;&nbsp;&nbsp"
            +message.result.today.date+"</br>"+"</br>"
            +"综合运势："+"</br>"+message.result.today.presummary+"</br>"+"</br>"
            +"契合星座："+message.result.today.star+"</br>"+"</br>"
            +"幸运颜色："+message.result.today.color+"</br>"+"</br>"
            +"幸运数字："+message.result.today.number+"</br>"+"</br>"
            +"综合运势："+message.result.today.summary+"</br>"+"</br>"
            +"财运运势："+message.result.today.money+"</br>"+"</br>"
            +"工作运势："+message.result.today.career+"</br>"+"</br>"
            +"爱情运势："+message.result.today.love+"</br>"+"</br>"
            +"健康运势："+message.result.today.health+"</br>"
            ;

/*明日运势*/
var tomorrow=document.getElementById("tomorrow");
tomorrow.innerHTML=message.result.astroname+"&nbsp;&nbsp;&nbsp;&nbsp"
            +message.result.tomorrow.date+"</br>"+"</br>"
            +"综合运势："+"</br>"+message.result.tomorrow.presummary+"</br>"+"</br>"
            +"契合星座："+message.result.tomorrow.star+"</br>"+"</br>"
            +"幸运颜色："+message.result.tomorrow.color+"</br>"+"</br>"
            +"幸运数字："+message.result.tomorrow.number+"</br>"+"</br>"
            +"综合运势："+message.result.tomorrow.summary+"</br>"+"</br>"
            +"财运运势："+message.result.tomorrow.money+"</br>"+"</br>"
            +"工作运势："+message.result.tomorrow.career+"</br>"+"</br>"
            +"爱情运势："+message.result.tomorrow.love+"</br>"+"</br>"
            +"健康运势："+message.result.tomorrow.health+"</br>"
            ;
/*本周运势*/
var week=document.getElementById("week");
week.innerHTML=message.result.astroname+"&nbsp;&nbsp;&nbsp;&nbsp"
            +message.result.week.date+"</br>"+"</br>"
            +"财运运势："+message.result.week.money+"</br>"+"</br>"
            +"工作运势："+message.result.week.career+"</br>"+"</br>"
            +"爱情运势："+message.result.week.love+"</br>"+"</br>"
            +"健康运势："+message.result.week.health+"</br>"
            ;
/*本月运势*/
var month=document.getElementById("month");
month.innerHTML=message.result.astroname+"&nbsp;&nbsp;&nbsp;&nbsp"
            +message.result.month.date+"</br>"+"</br>"
            +"综合运势："+"</br>"+message.result.month.summary+"</br>"+"</br>"
            +"财运运势："+message.result.month.money+"</br>"+"</br>"
            +"工作运势："+message.result.month.career+"</br>"+"</br>"
            +"爱情运势："+message.result.month.love+"</br>"+"</br>"
            +"健康运势："+message.result.month.health+"</br>"
            ;
/*本年运势*/
var year=document.getElementById("year");
year.innerHTML=message.result.astroname+"&nbsp;&nbsp;&nbsp;&nbsp"
            +message.result.year.date+"</br>"+"</br>"
            +"综合运势："+"</br>"+message.result.year.summary+"</br>"+"</br>"
            +"财运运势："+"</br>"+message.result.year.money+"</br>"+"</br>"
            +"工作运势："+"</br>"+message.result.year.career+"</br>"+"</br>"
            +"爱情运势："+"</br>"+message.result.year.love+"</br>"
            ;

    
}






