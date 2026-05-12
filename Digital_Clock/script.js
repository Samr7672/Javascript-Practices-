setInterval(()=>{
    const div=document.getElementById("time");
    const samay = new Date();
    div.textContent = samay.toLocaleTimeString();

}, 1000);