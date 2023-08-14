const mole = document.querySelectorAll(".mole");
const arrayMole=Array.from(mole);
const button = document.querySelector("button");
var score = document.querySelector("span");
var duration = 1000;
console.log(typeof(mole))

function start(){
    
    console.log(typeof(delay))
    let random = parseInt(Math.random()*mole.length);
    let index = arrayMole[random];
    index.classList.add("active");

    addEventListener("click", x=>{
        Element=x.target
        if(Element.className.includes("active")){
            Element.classList.remove("active")
            score.innerHTML++;
            setTimeout(start,duration);
        }
        if(score.innerHTML>1){
            duration-=10;
        }
        console.log(duration-100)
        

    }); //Event
    
}; // start function
