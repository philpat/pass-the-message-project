const counter = document.querySelector("#counter")
const incrementbtn = document.querySelector("#increment")
const resetbtn = document.querySelector("#reset")
const decrementbtn = document.querySelector("#decrement")

let countervalue = 0;
incrementbtn.addEventListener("click" ,()=>{
  countervalue +=1;
    counter.innerHTML = countervalue
})
decrementbtn.addEventListener("click" ,()=>{
  countervalue -=1;
    counter.innerHTML = countervalue
})
resetbtn.addEventListener("click" ,()=>{
  countervalue =0;
    counter.innerHTML = countervalue
})