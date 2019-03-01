
 function showTime(){
     var date = new Date();
     var h = date.getHours();
     var m = date.getMinutes();
     var s = date.getSeconds();
     var session = "AM!";

      if(h == 12){
          h = 12;
      }
       if(h > 12){
           h = h -12;
           session = "PM!";
       }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

     var time = h + " : " + m + " : " + s + " " + session;

     document.getElementById('myClock').innerHTML = time;

       var myTime1 = 10 + " : " + 0 + " : " + 0 + " " + "PM";
       var myTime2 = 10 + " : " + 30 + " : " + 0 + " " + "PM";
     if(time < myTime2 && time > myTime1){
        console.log('saba');
     };
     
 };
 showTime();
 setInterval(showTime, 1000);
