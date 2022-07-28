const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 let num = "";
 let num2=''
 const btn = document.querySelector(".btn");
const spancolor = document.querySelector(".color");
function randomNumber() {
 
num=''
  for (let i = 0; i < 6; i++) {
    const rand = Math.floor(Math.random() * colors.length);
    //   console.log(rand);
   num += colors[rand];
    
  }
  
  
}

btn.addEventListener("click", function () {
   randomNumber()
   
   
  document.body.style.backgroundColor ="#"+num;
  spancolor.textContent = "#"+num;
  spancolor.style.color ="#"+num ;
  
});
