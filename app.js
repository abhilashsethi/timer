let hr= 0;
let min= 0;
let sec= 0;
let msec= 0;

let timer = false;

startbutton = document.getElementById("start");
stopbutton = document.getElementById("stop");
resetbutton = document.getElementById("reset");

startbutton.addEventListener("click", start);
stopbutton.addEventListener("click", Stop);
resetbutton.addEventListener("click", reset);

function stopwatch(){
    if(timer == true){
        msec = msec + 1;
        if(msec >= 100){
            sec = sec + 1;
            msec = 0;
        }
        if(sec >= 60){
            min = min + 1;
            sec = 0;
        }
        if(min >= 60){

        }
        document.getElementById("mili").innerHTML = msec;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("min").innerHTML = min;
        document.getElementById("hr").innerHTML = hr;
        setTimeout(stopwatch, 10);
      
    }
}

function start(){
    timer = true
    stopwatch();
}

function Stop(){
   timer = false; 
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("mili").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";

}