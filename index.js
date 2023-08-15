const mole = document.querySelectorAll(".mole");
const arrayMole=Array.from(mole);
const button = document.querySelector("button");
var score = document.querySelector("span");
var duration = 1000;
var duration2 = 1000;


function start(){
    active()

        
    function active(){

        let random = parseInt(Math.random()*mole.length);
        let index = arrayMole[random];
        

        index.classList.add("active")
        
        setTimeout(again,duration2)
    }; //active function
    
    

    

    function again(){
        arrayMole.map((item)=>{

           let state = item.className.includes("active");

           if(state){
            item.classList.remove("active")
           setTimeout(active,duration2);
           }
           
            
           
          
        }) // map function
    };// again function
    

    addEventListener("click", x=>{
        Element=x.target
        arrayMole.map(item=>{
            
            if(Element.className.includes("active") && Element==item){
                Element.classList.remove("active")
                score.innerHTML++;
                duration-=10;
                duration2-=15
                setTimeout(start,duration);
                console.log(duration , duration2)
            }
            // if(score.innerHTML>2 && Element==item){
            // }
            
        })//map function-2

    }); //Event
    
}; // start function
