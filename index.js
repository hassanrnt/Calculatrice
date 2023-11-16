const screen = document.querySelector(".item1");
const D = document.querySelector(".item3");
const clear = document.querySelector(".item2");

const btns = document.querySelectorAll("div[type]");

const operations = document.querySelectorAll("div[value]")

const equal = document.querySelector('.item18')

let valeur1 =''

let selectedOp = ''





for(let btn of btns){
    // event
   btn.addEventListener("click",function(){
       let num = btn.innerText
           console.log(num)
           // append
           screen.append(num)
   })
}
    
for(let operation of operations){
    operation.addEventListener('click',function(){
     valeur1 = screen.innerText
     screen.innerText=""
     console.log("valeur1 ===>", valeur1)
     selectedOp = operation.innerText
     screen.innerText =""
     console.log("selectedOp ==>",selectedOp)

    })
}
clear.addEventListener("click",function(){
    screen.innerText = "";
    
} )
D.addEventListener('click',function (){
    screen.innerText=screen.innerText.slice(0,-1);
});

function calculate (x,op,y){
    if( op === "÷"){
        return x / y
    } else if(op === "+"){
     return x + y
    } else if(op === "×"){
     return x * y
    }else if(op === "−"){
     return x - y
    }  
 }

 equal.addEventListener('click',function(){
     let valeur2= screen.innerText
     let result =''
     screen.innerText =''
     result = calculate(valeur1,selectedOp,valeur2)
        screen.append(result)
    //   console.log(screen.append(result))    
     });