console.log("hello")

setInterval(()=>{
    const result=document.querySelector(".result");

const current_time=new Date();
const olympic_time= new Date(28,6,14);

let timer=olympic_time-current_time;

const days = Math.floor(timer / (1000 * 60 * 60 * 24));
timer %= 1000 * 60 * 60 * 24;

const hour = Math.floor(timer / (1000 * 60 * 60));
timer %= 1000 * 60 * 60;

const minute = Math.floor(timer / (1000 * 60));
timer %= 1000 * 60;

const second = Math.floor(timer / 1000);

result.textContent=` remaining time:${days}days :${hour} hours :${minute}minutes :${second}second`

},1000)
