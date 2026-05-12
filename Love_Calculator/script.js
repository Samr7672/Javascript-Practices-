
const boy=document.querySelector("#boys")
const girl=document.querySelector("#girls")
const displayresult=document.querySelector("h2")

const form=document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const l1=boy.value.length
    const l2=girl.value.length

    const result=Math.pow((l1+l2),3)%101;

    displayresult.textContent=`Result: ${result}%`;
    form.reset();
})
