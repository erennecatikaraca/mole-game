const moles = document.querySelectorAll(".mole");
const arrayMoles=Array.from(moles);
const button = document.querySelector("button");
const live = document.querySelector(".live")
const score = document.querySelector("span");

var duration = 1000;
var duration2 = 1000;
var flag = true;


function start(){
    

    
    if(live.innerHTML==0 || flag==false){
        location.reload()
        return;
    }
    up()

        
    function up(){

        let random = parseInt(Math.random()*moles.length);
        let index = arrayMoles[random];
        index.classList.add("active")
        setTimeout(down,duration2)
        if(live.innerHTML==0){
            return;
           }
           
    }; //up function
    
    

    

    function down(){
        arrayMoles.map((item)=>{

           let state = item.className.includes("active");

           if(state){
            item.classList.remove("active")
            live.innerHTML-=1;
            setTimeout(up,duration2);
            }
            
            else if(live.innerHTML==0){
                alert("game over. Your score:"+"  "+JSON.stringify(score.innerHTML))
                start()
                return;
                
            }
           
            
           
          
        }) // map function
    };// down function
    

    addEventListener("click", x=>{
        Element=x.target
        arrayMoles.map(item=>{
            
            if(Element.className.includes("active") && Element==item){

                Element.classList.remove("active")
                score.innerHTML++;
                duration-=10;
                duration2-=15
                setTimeout(up,duration);
            }
            
            
        })//map function-2

    }); //Event

   
   flag = false;
   
}; // start function
