
var setTime = "";

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
       if(h == setTime){
        console.log("time is over");
       }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

     var time = h + " : " + m + " : " + s + " " + session;

     document.getElementById('myClock').innerHTML = time;

      for(var i = 0; i < 23; i++){
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
         document.getElementById('select').appendChild(option);
      };
      var selectTime = document.getElementById('select');
      selectTime.addEventListener("change", function(ev){
          
          setTime = ev.target.value;
         console.log(setTime);
    
      });

      document.getElementById('changeColor').addEventListener('click', function(){
        this.style.backgroundColor = "red";
       });     
 };
 showTime();
 setInterval(showTime, 1000);
