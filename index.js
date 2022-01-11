const grandparent= document.getElementById("grandparent");
const parent= document.getElementById("parent");
const child= document.getElementById("child");

const grandparent1= document.getElementById("grandparent1");
const parent1= document.getElementById("parent1");
const child1= document.getElementById("child1");

grandparent.addEventListener("click",(e)=>{
  console.log( "grandparent");
})

parent.addEventListener("click",(e)=>{
  console.log("parent");
})

child.addEventListener("click",(e)=>{
  console.log("child");
})



grandparent1.addEventListener("click",(e)=>{
  e.stopPropagation();
  console.log( "grandparent1");
})

parent1.addEventListener("click",(e)=>{
  e.stopPropagation();
  console.log("parent1");
})

child1.addEventListener("click",(e)=>{
  e.stopPropagation();
  console.log("child1");
})