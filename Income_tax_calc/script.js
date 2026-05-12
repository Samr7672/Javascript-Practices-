const form=document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const result=document.querySelector("h2");
    const amount=document.getElementById("salary");

    const money=amount.value;
    

//     Up to ₹ 2.5 lakh	NIL
// ₹ 2,50,001 - ₹ 5 lakh	5% above ₹ 2,50,000
// ₹ 5,00,001 - ₹ 7.5 lakh	₹ 12,500 + 10% above ₹ 5 lakh
// ₹ 7,50,001 - ₹ 10 lakh	₹ 37,500 + 15% above ₹ 7.5 lakh
// ₹ 10,00,001 - ₹ 12.5 lakh	₹ 75,000 + 20% above ₹ 10 lakh
// ₹ 12,50,001 - ₹ 15 lakh	₹ 1,25,000 + 25% above ₹ 12.5 lakh
// Above 15 lakhs	₹ 1,87,500 + 30% above ₹ 15,00,000


if(money<=250000){
    result.textContent="NIL";
    
}else if(money>250000 && money<=500000){
    let tax=0.05*(money-250000);
    result.textContent=` Your Tax is:${tax}`;
}else if(money>500000 && money<=750000){
    let tax=12500+0.10*(money-500000);
    result.textContent=` Your Tax is:${tax}`;
}else if(money>750000 && money<=1000000){
    let tax=37500+0.15*(money-750000);
    result.textContent=` Your Tax is:${tax}`;
}else if(money>1000000 && money<=1250000){
    let tax=75000+0.20*(money-1000000);
    result.textContent=` Your Tax is:${tax}`;
}else if(money>1250000 && money<=1500000){
    let tax=125000+0.25*(money-1250000);
    result.textContent=` Your Tax is:${tax}`;
}else{
    let tax=187500+0.30*(money-1500000);
    result.textContent=` Your Tax is:${tax}`;
}

form.reset();

})



