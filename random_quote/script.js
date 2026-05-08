const quotes = [
    "Java is to JavaScript what car is to Carpet. — Chris Heilmann",
    "JavaScript’s global scope is like a public toilet. You don't want to go in there, but sometimes you have to. — Anonymous",
    "The strength of JavaScript is that you can do anything. The weakness is that you will. — Reg Braithwaite",
    "JavaScript is the only language that people feel they can write before they learn it. — Douglas Crockford",
    "If you think it's simple, then you're misinformed. If you think it's complex, then you're right. — Anonymous",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. — John Woods",
    "Callback hell is the place where good intentions go to die. — Anonymous",
    "In JavaScript, everything is an object, except when it isn't. — Anonymous",
    "Fix the cause, not the symptom. — Steve Maguire",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
    "Experience is the name everyone gives to their mistakes. — Oscar Wilde",
    "The best way to get a project done faster is to start sooner. — Jim Highsmith",
    "Code is like humor. When you have to explain it, it’s bad. — Cory House",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "Before software can be reusable it first has to be usable. — Ralph Johnson",
    "Make it work, make it right, make it fast. — Kent Beck",
    "Testing leads to failure, and failure leads to understanding. — Burt Rutan",
    "The most disastrous thing that you can ever learn is your first programming language. — Alan Kay",
    "Software is a gas; it expands to fill its container. — Nathan Myhrvold",
    "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. — Dan Salomon",
    "Programming isn't about what you know; it's about what you can figure out. — Chris Pine",
    "Don't write better error messages, write code that doesn't need them. — Jason C. McDonald",
    "Optimism is an occupational hazard of programming: feedback is the treatment. — Kent Beck",
    "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
    "A language that doesn't affect the way you think about programming is not worth knowing. — Alan Perlis",
    "Walking on water and developing software from a specification are easy if both are frozen. — Edward V. Berard",
    "Computers are good at following instructions, but not at reading your mind. — Donald Knuth",
    "Debugging is twice as hard as writing the code in the first place. — Brian Kernighan",
    "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "The best error message is the one that never shows up. — Anonymous",
    "Deleted code is debugged code. — Jeff Sickel",
    "It’s not a bug – it’s an undocumented feature. — Anonymous",
    "One man’s constant is another man’s variable. — Alan Perlis",
    "Hardware is the part of a computer that you can kick. — Jeff Pesis",
    "There is no substitute for hard work. — Thomas Edison",
    "A primary cause of complexity is that software vendors are willing to confabulate. — Niklaus Wirth",
    "Most good programmers do programming not because they expect to get paid, but because it is fun. — Linus Torvalds",
    "Code never lies, comments sometimes do. — Ron Jeffries",
    "The most important property of a program is whether it accomplishes the intention of its user. — C.A.R. Hoare",
    "Software undergoes beta testing shortly before it’s released. Beta is Latin for 'still doesn't work'. — Anonymous",
    "To err is human, but to really foul things up you need a computer. — Paul R. Ehrlich",
    "System programmers are the high priests of a low cult. — Robert S. Barton",
    "The proper use of comments is to compensate for our failure to express ourself in code. — Robert C. Martin",
    "Reality is just a crutch for people who can't handle science fiction. — Anonymous",
    "The user's going to pick it up, it's going to prevent them from doing their job, and they're going to hate you. — Anonymous",
    "Truth can only be found in one place: the code. — Robert C. Martin",
    "Programming is the art of telling another human being what one wants the computer to do. — Donald Knuth",
    "Your mind is for having ideas, not holding them. — David Allen"
];
const colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod"
];



const quote=document.querySelector("h1")

const button=document.querySelector("button");

button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*50);
    quote.textContent=quotes[index];
})

button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*50);
    quote.style.color=colors[index];
})








    
