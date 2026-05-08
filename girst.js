// // console.log("heelo world")

// let a;
// let b=null;
// c=(a==b);
// const d=2343434543656;
// let num={
//     first :" 10",
//     second:"2"
// };
// console.log(typeof b);
// console.log(typeof a);
// console.log(typeof d);

// console.log(num);

// 3rd lecture 
// let result=5+10;
// console.log(result)
// let score=10;
// console.log(10%3);
//     let age = 20;
// let message = (age >= 18) ? "You can vote." : "You cannot vote yet.";
// console.log(message ); // "You can vote."
// console.log(`your age is ${age}`)
//5th lecture 
// let billion = 1e9;  // 1 followed by 9 zeros -> 1000000000
// let tiny = 5e-6;    // 5 / 10^6 -> 0.000005
// // console.log(Number.epilson);
// // console.log(billion,tiny);
// // console.log(0.1 + 0.2); // Outputs: 0.30000000000000004
// // console.log(0.1 + 0.2 === 0.3); // false
// let num=100.200;
// console.log(num.toString(10));
// console.log(num.toPrecision(2));
// console.log(num.toFixed(1));
// console.log( Math.floor(Math.random()))

// /**
//  * Generates a random integer between a minimum and maximum value (inclusive).
//  * @param {number} min The minimum possible value.
//  * @param {number} max The maximum possible value.
//  * @returns {number} A random integer within the range.
//  */
// function getRandomInt(min, max) {
//   // 1. Calculate the number of possible outcomes (the size of our range).
//   const range = max - min + 1;

//   // 2. Scale up Math.random() to create a float in the range [0, range).
//   const scaled = Math.random() * range;

//   // 3. Round down to get an integer in the range [0, range-1].
//   const floored = Math.floor(scaled);

//   // 4. Shift the range up to [min, max] by adding the minimum value.
//   const result = floored + min;

//   return result;
// }

// // Example usage:
// console.log("Random number between 1 and 10:", getRandomInt(1, 10));
// console.log("Random number between 50 and 100:", getRandomInt(50, 100));
// console.log("Random dice roll (1 to 6):", getRandomInt(1, 6));

// Lecture 6

//  let greeting=`hello`;
//  console.log(greeting.length);
//  console.log(greeting[greeting.length-1])
//  console.log(greeting.indexOf(`el`))
//   console.log(greeting.lastIndexOf(`el`))
//    console.log(greeting.includes(`el`))

// let sentence = "The quick brown fox jumps over the lazy fox.";
// console.log(sentence.slice(5,10));
// console.log(sentence.slice(-1,-10));
// console.log(sentence.substring(5,10));
// console.log(sentence.substring(-10));

// let greeting = "hello world, hello there";

// // Replaces only the first "hello"
// let newGreeting = greeting.replace("hello", "hi");
// console.log(newGreeting); // "hi world, hello there"

// // Replaces all "hello"s
// let allNewGreeting = greeting.replaceAll("hello", "hi");
// console.log(allNewGreeting); // "hi world, hi there"
// console.log(allNewGreeting.trim())
// console.log(allNewGreeting.split(" "))

// const currentTimestamp = Date.now(); 
// console.log(currentTimestamp);
// const time= new Date();
// console.log(time);

// const now = new Date(); 

// console.log(now.getFullYear()); 
// console.log(now.getMonth());    
// console.log(now.getDate());     
// console.log(now.getDay());      
// console.log(now.getHours());    
// console.log(now.getMinutes()); 

// console.log(now.toString());

// Lecture 7

// let arr=[1,2,3,4];

// arr.unshift(5);
// console.log(arr)

// arr.shift();
// console.log(arr);

// let scores = [98, 85, 100];
// let total = 0;

// // The loop runs as long as `i` is less than the array's length.
// for (let i = 0; i < scores.length; i++) {
//   console.log(`Processing score at index ${i}: ${scores[i]}`);
//   total = total + scores[i];
// }

// console.log(`The total score is: ${total}`); // 283

// let names=[`ram`, `shyam`,`ramesh`];

// for(const name of names){
//     console.log(`my name is ${name}`);
// }

// let months=[`JAN`,`feb`];

// months.splice(1,1,"march");
// console.log(months);
// let jan=months.slice(1,2)
// console.log(jan)

// const names = ["alice", "Bob", "Charlie"];
// //  names[2] ="mukesh"
// // console.log(names)
// let ames=[`ram`, `shyam`,`ramesh`];
// // names.push(ames);
// // console.log(names)
// // names2=names.concat(ames);
// // console.log(names2)
// const names2=[...names,...ames]
// console.log(names2)

// console.log(names2.toString())
// names.sort();
// names.reverse()
// console.log(names)

// const num=[12,3,4,5,34,56,78];
// num.sort((a,b)=>b-a);
// console.log(num)

// Lecture 8

// const user={
//     name:"ram",
//     age:29,
//     account:1234,
//     "home address":"bihar"
//create
// user.aadhar=2304;//read
// user.account=2345;//update
// delete user.aadhar;//delete  // crud operation in javascript 
// console.log(user["home address"])
// console.log(Object.keys(user));
// console.log(Object.values(user))
// console.log(Object.entries(user))

// const user={
//     name:"ram",
//     age:29,
//     account:1234,
//     "home address":"bihar",
//     greeting:function(){
//         console.log(`hello hi bye beye ${this.name}`)
//         return 20;
//     }
// }
// const user2={
//     name:`shyam`,
//     age:`20`
// }
// user2.greeting=user.greeting;
// user2.greeting()

// // const {name:userName,age}=user;// destructuring 

// // console.log(userName,age)
// // // for of loop array pe hi laga sakte hain 

// // for(let [keys,values] of Object.entries(user)){
// //     console.log(keys,values)
// // }
// user.greeting()
// const va=user.greeting();
// console.log(va)

// const user={
//     name:"ram",
//     age:29,
//     account:1234,
//     "home address":"bihar",
//     user3 :{
//     name:"ram",
//     age:29,    account:1234,
//     "home address":"bihar"}
// }

// const user2={...user};
// user2.name="ra,";
// console.log(user);

// lecture 9

// function addNumber(num1,num2,num3){
//     let sum=num1+num2+num3;
//     console.log(sum);
// }
// function addNumber2(...num){
//     let sum=0;

//     for(n in num){
//         sum+=n;
//     }
//     console.log(sum);

// }
// addNumber(8,10,12)
// addNumber2(10,20,30,40,30,45,4567);

// const addNumber3=function(a,b){
//     console.log(a+b);
// }
// addNumber3(3,5)
// //Arrow function
// const addNumber5=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addNumber5(5,7))

// const addNumber6=(num1,num2)=> num1+num2;// this can be written as this
// console.log(addNumber6(10,20))

// const squareNumber=num=> num*num;// for single parameter we do not require the ()
// console.log(squareNumber(102));

// const user=()=>{
//     let user={
//         name:"mukesh",
//         age:25
//     }
//     return user;
// }
//now we have to shorten it 

// const user=()=>({name:"mukesh",age:25 })// for object we add another () so it can take {} value
// console.log(user());
// // now IIFE

// ( function greeting(){
//     console.log("hello world")
// })();
// (()=>{
//     console.log("hello");
// })()

// CallBack

// lecture 11 

// function create(){
//     let count=0;
//     function increment(){
//         count++;
//         console.log("i have to increaswe")
//         return count;
//     }
//     return increment
// }
// const count=create()
// // const counter=count()// console.log(count)
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())// they are called closure they are use to private the variable we dont want other to see 

// // shorthand 

// function createGrid(value){
    
//     return function makegrid(size){
//         console.log("grid are made ")
//         return value*size;
//     }

// }


// const grid=createGrid(4)
// grid()
// console.log(grid(5))

// Callback function 

// hum tab lagate hai jab humko pta nhi rahta hai ki kab kis function ka use kartehai to hum ek refrencre de dete hai phir us reference ko hum pass karte hai 

// Lecture 12;

// set, map  

let arr=[10,20,30,40,40,50];

// arr.forEach((number,index,arr)=> console.log(number,index,arr))

//filter 
const newArr=arr.filter((number)=> number>25)
console.log(arr);
console.log(newArr)
// you can make youe own method 

arr.filtering=function(compare){ // compare is callback function
    let ans=[];
    for(let num of this){//in will print only index and off will print value 
    if(compare(num)){
        ans.push(num)
    }
  
}
  return ans;
}

const arr2=arr.filtering((number)=> number>25)// custom method 
console.log(arr2)



    









