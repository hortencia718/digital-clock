// create an event listner to load the calculated time function
window.addEventListener('load', calculateTime);

function calculateTime(){
// create varibales for date, minute days
    let date = new Date();
    let dayNumber = date.getDay();
    let hour =date.getHours();
    let minute = date.getMinutes();
    // if am/pm is greater than or equal to 12? then am/pm
    let ampm =hour >=12 ? 'PM' : 'AM';
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

     hour = hour % 12;
     hour = hour ? hour : '12';

     hour = hour < 10 ? '0' + hour : hour;
     minute = minute < 10 ? '0'+ mintue : minute;
    // get element by id the function currentTime 
     document.getElementById('currentTime').innerHTML = dayNames[dayNumber] + " | " + hour +" | " + minute + " | " + ampm;
    setTimeout(calculateTime, 500);
}