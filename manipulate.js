//Document object Model 

// const head= window.document.queryselector("head");// one method for element selection 
// const head=document.getElementById("id");
// const head=document.getElementsByClassName("class");// it will make a node list and they will we like array 
// const head=document.getElementsByTagName("head");// it will make a html selector 

console.log("hello")

// const newElement=document.createElement("h1");
// newElement.textContent="Hello World";
// newElement.style.backgroundColor="white";

// const body=document.querySelector("body")

// body.append(newElement);

// body.before(newElement)
// body.after(newElement)




// const list= document.getElementById("listing")
 

// const list1=document.createElement("li");
// list1.textContent="maggi";

// const list2=document.createElement("li");
// list2.textContent="Rice";

// const list3=document.createElement("li");
// list3.textContent="Cookies";

// const list4=document.createElement("li");
// list4.textContent="Meat";

// const list5=document.createElement("li");
// list5.textContent="Ramen";

// list.append(list1,list2)
// list.prepend(list3);
// list.insertBefore(list4,list2);
// list.insertAdjacentElement("afterbegin",list5);


// function handle(){
//     const element=document.getElementById("hunt");
//     element.textContent="Hello man! Where Are You";
//     element.style.color="lightBlue";
// } by this method we can only add one event listner 


// const word=document.getElementById("hunt");

// word.addEventListener('click',()=>{
//     // const word2=document.createElement("h1")
//     word.textContent="hello Bsdk";
//     word.style.color="Orange"
    
// })// we can add many event listner ;

// // const word=document.getElementById("hunt");

// word.addEventListener('click',()=>{
//     // const word2=document.createElement("h1")
//     word.textContent="Hello My Man";
    
// })// we can add many event listner ;

// const text=document.getElementById("id2");

// text.addEventListener('click',()=>{

//     text.textContent="I Have To Click";
//     // text.style.display="none";
// })

const read=document.getElementById("parent");

// read.addEventListener('click',()=>{
//     for(let child of read.children){
//         child.textContent="I have To Click";
//     }
// })

// for(let child of read.children){
//     child.addEventListener('click', ()=>{
//         child.textContent="I have To Click";

//         })
//     } //   this can be very tedious so we can use 

function handleClick(e){
        e.target.textContent="i have clicked";
    parent.removeEventListener('click',(handleClick)=>{ // it will run one time  

})


}

parent.addEventListener('click',(handleClick)=>{

})// Here e is the object of the eventlistner 

// if you want to remove a eventlistner then u have to 

// parent.removeEventListener('click',(e)=>{ // this is not the right way because it will make a seperate Memory

// })

// parent.removeEventListener('click',(handleClick)=>{ // this is  the right way because it will not make a seperate Memory it will give refrence 

// })







