const display = document.getElementById("display");

const buttons = document.getElementsByClassName("buttons")
const button = document.getElementsByClassName("button");

for(let btn of button){
   btn.addEventListener("click", function(e){
    switch(e.target.innerText){
        case "C":
            display.innerText = ""
        break;
        case "=":
            try{
                display.innerText = eval(display.innerText)
            }catch{
                display.innerText = "Error"
            }
        break;
        case "←":
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1)
            }
        break;
        
        default:
            display.innerText += e.target.innerText; 
        }
   })
}