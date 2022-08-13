
/*let mysubmit=document.querySelector(".sub_btn")
let myfeedback=document.querySelector(".feedback")
let one=document.querySelector(".one_star")
    let two=document.querySelector(".two_star")
    let three=document.querySelector(".three_star")
    let four=document.querySelector(".four_star")
    let five=document.querySelector(".five_star")
   let result_text=document.querySelector(".feedback_result")

mysubmit.addEventListener("click",show)
myfeedback.addEventListener("click",close)




function show(){
   let one=document.querySelector(".one_star")
   one.onclick=function(){
      let result_text=document.querySelector(".feedback_result")
      result_text.textContent="You"
      console.log("one")
   } 
   
    myfeedback.style.display="block"
}

function close(){
   myfeedback.style.display="none"

}*/

let myfeedback=document.querySelector(".feedback")
let myone=document.querySelector(".one_star")
let mytwo=document.querySelector(".two_star")
let mythree=document.querySelector(".three_star")
let myfour=document.querySelector(".four_star")
let myfive=document.querySelector(".five_star")

myone.addEventListener("click",()=>{
   let mysubmit=document.querySelector(".sub_btn")
    mysubmit.onclick=function(){
      myfeedback.style.display="block"
      let result_text=document.querySelector(".feedback_result")
      result_text.textContent="You selected 1 out of 5"
      console.log("Hello")
    }
    myone.style.color="hsl(0, 0%, 100%)"
    myone.style.backgroundColor="grey"
    myone.style.border="5px solid grey"
    myone.style.outiLne="none"
   myone.style.opacity="1"

})
mytwo.addEventListener("click",()=>{
   let mysubmit=document.querySelector(".sub_btn")
    mysubmit.onclick=function(){
      this.style.outline="none"
      myfeedback.style.display="block"
      let result_text=document.querySelector(".feedback_result")
      result_text.textContent="You selected 2 out of 5"
      console.log("Hello")
    }
    mytwo.style.color="hsl(0, 0%, 100%)"
    mytwo.style.backgroundColor="grey"
    mytwo.style.border="5px solid grey"
    mytwo.style.outline="none"
    mytwo.style.opacity="1"
})
mythree.addEventListener("click",()=>{
   let mysubmit=document.querySelector(".sub_btn")
    mysubmit.onclick=function(){
      myfeedback.style.display="block"
      let result_text=document.querySelector(".feedback_result")
      result_text.textContent="You selected 3 out of 5"
      console.log("Hello")
    }
    mythree.style.color="hsl(0, 0%, 100%)"
    mythree.style.backgroundColor="grey"
    mythree.style.border="5px solid grey"
    mythree.style.outline="none"
    mythree.style.opacity="1"
})
myfour.addEventListener("click",()=>{
   let mysubmit=document.querySelector(".sub_btn")
    mysubmit.onclick=function(){
      myfeedback.style.display="block"
      let result_text=document.querySelector(".feedback_result")
      result_text.textContent="You selected 4 out of 5"
      console.log("Hello")
    }
    myfour.style.backgroundColor="grey"
    myfour.style.color="hsl(0, 0%, 100%)"
    myfour.style.border="5px solid grey"
    myfour.style.outline="none"
    myfour.style.opacity="1"
})
myfive.addEventListener("click",()=>{
   let mysubmit=document.querySelector(".sub_btn")
    mysubmit.onclick=function(){
      myfeedback.style.display="block"
      let result_text=document.querySelector(".feedback_result")
      result_text.textContent="You selected 5 out of 5"
    }
    myfive.style.color="hsl(0, 0%, 100%)"
    myfive.style.backgroundColor="grey"
    myfive.style.border="5px solid grey"
    myfive.style.outline="none"
    myfive.style.opacity="1"
})
myfeedback.addEventListener("click",close)
function close(){
   myfeedback.style.display="none"
   
}









