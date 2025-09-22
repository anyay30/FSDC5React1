// const div=document.getElementsByTagName("div");
// div[0].innerText="hello world";
// div[0].style.color="white";
// div[0].style.backgroundColor="pink";
// console.log(div);

const container=document.getElementsByClassName("container");
console.dir(container);
container[0].innerHTML="<h2 style=color:red>Hello world</h2>";
console.dir(container);
const h2=document.createElement("h2");
h2.innerText="ABES ENGINEERING COLLEGE";
h2.style.color="white";
h2.style.backgroundColor="pink";
console.log(h2);
container[0].appendChild(h2);

// const img=document.createElement("img");
// img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Wqd55Xb_Oby81Q8nLDwnSoUV3UvZzzchbA&s";
// img.setAttribute("height","200px");
// img.setAttribute("width","200px")
// console.log(img);
// container[0].appendChild(img);

const button=document.getElementById("btn");
const text=document.getElementById("text");
console.log(button)


function msg(){
// document.getElementById("text").innerHTML="<h>loading img....</h>"
setTimeout(()=>{
    const img=document.createElement("img");
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Wqd55Xb_Oby81Q8nLDwnSoUV3UvZzzchbA&s";
img.setAttribute("height","200px");
img.setAttribute("width","200px")
console.log(img);
container[0].appendChild(img);
},100)
//  const img=document.createElement("img");
//  img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Wqd55Xb_Oby81Q8nLDwnSoUV3UvZzzchbA&s";
//  img.setAttribute("height","200px");
// img.setAttribute("width","200px")
// console.log(img);
// document.getElementsById("text").innerHTML="<h2>js</h2>"
// //  console.log("hello shinchan ");
// alert("you clicked this  ");
}
button.addEventListener("click",msg);
// button.addEventListener("click",function()
// {
//     text.innerText="welcome to abes";
//     text.style.backgroundColor="pink";
   
// })





