function displayDateTime() {
    var session = "";
    var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "december"];
    var dayList = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];

    var today=new Date();
    
    if(today.getHours()>=12){
        session="PM";
    }else{
        session="AM";
    }

    var time=today.getHours()+":"+today.getMinutes()+" "+session;
    var date=dayList[today.getDay()]+", "+monthList[today.getMonth()]+" "+today.getDate()+", "+today.getFullYear();

    document.getElementById("t1").innerHTML=time;
    document.getElementById("d1").innerHTML=date;
}
setInterval(displayDateTime,1000);