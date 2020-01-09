/**
 * Created by SZMT on 2018/1/9.
 */
function search(){
    var month=document.getElementsByName("month")[0].value;
    var day=document.getElementsByName("day")[0].value;
    if(day<1){alert("请输入日期");}
    else {
        switch (month){
            case '1':if(day<=20&&day>=1){alert("您是 摩羯座 哦！");window.location.href='page11.html';break;}
            else if(day<=31){alert("您是 水瓶座 哦！");window.location.href='page8.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '2':if(day<=19&&day>=1){alert("您是 水瓶座 哦！");window.location.href='page8.html';break}
            else if(day<=29) {alert("您是 双鱼座 哦！");window.location.href='page2.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '3':if(day<=20&&day>=1){alert("您是 双鱼座 哦！");window.location.href='page2.html';break}
            else if(day<=31) {alert("您是 白羊座 哦！");window.location.href='baiyangzuo.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '4':if(day<=20&&day>=1){alert("您是 白羊座 哦！");window.location.href='baiyangzuo.html';break;}
            else if(day<=30) {alert("您是 金牛座 哦！");window.location.href='page3.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '5':if(day<=21&&day>=1){alert("您是 金牛座 哦！");window.location.href='page3.html';break;}
            else if(day<=31){alert("您是 双子座 哦！");window.location.href='page12.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '6':if(day<=21&&day>=1){alert("您是 双子座 哦！");window.location.href='page12.html';break;}
            else if(day<=30) {alert("您是 巨蟹座 哦！");window.location.href='page10.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '7':if(day<=22&&day>=1){alert("您是 巨蟹座 哦！");window.location.href='page10.html';break;}
            else if(day<=31) {alert("您是 狮子座 哦！");window.location.href='page9.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '8':if(day<=23&&day>=1){alert("您是 狮子座 哦！");window.location.href='page9.html';break;}
            else if(day<=31) {alert("您是 处女座 哦！");window.location.href='page6.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '9':if(day<=23&&day>=1){alert("您是 处女座 哦！");window.location.href='page6.html';break;}
            else if(day<=30){alert("您是 天秤座 哦！");window.location.href='page7.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '10':if(day<=23&&day>=1){alert("您是 天秤座 哦！");window.location.href='page7.html';break;}
            else if(day<=31) {alert("您是 天蝎座 哦！");window.location.href='page4.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '11':if(day<=22&&day>=1){alert("您是 天蝎座 哦！");window.location.href='page4.html';break;}
            else if(day<=31) {alert("您是 射手座 哦！");window.location.href='page5.html';break;}
            else {alert("请输入正确的日期！");break;}
            case '12':if(day<=21&&day>=1){alert("您是 射手座 哦！");window.location.href='page5.html';break;}
            else if(day<=31){alert("您是 摩羯座 哦！");window.location.href='page11.html';break;}
            else {alert("请输入正确的日期！");break;}
            default:alert("请输入正确的月份");
        }
    }
}
function test(){
    document.getElementsByName("month")[0].value="";
    document.getElementsByName("day")[0].value="";
}