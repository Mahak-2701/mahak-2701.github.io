const root = document.documentElement;
const head = document.head;
const body = document.body;

// async function page(){
//     console.log(document.all);
//     return `Collection of All Elements : ${document.all}\n`;
// }
// async function greet(){
//     let p = await page();
//     setTimeout(() => {
//         console.log("\t Hello All Users: ", document.querySelectorAll("*"));
//     }, 2000);
// }
// document.addEventListener("DOMContentLoaded", async() =>{
//     let first = await greet();
//     let body = document.body;
//     const div = document.createElement("code");
//     div.innerHTML = `<h2>I was created on runtime. <h2/>`;
//     body.appendChild(div);
//     console.log(`Greeting has been done!!`);
// });
const log = console.log

// const nav = document.querySelector("nav");
// nav.addEventListener("onmouseover", () =>{
//     log("Nav Loaded");
//     nav.style.visibility = "hidden";
//     nav.style.display = none;
// })
function hide(){
    const nav = document.querySelector("nav");
    nav.style.display = "none";
    log("Loaded")
}