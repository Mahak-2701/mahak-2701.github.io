const root = document.documentElement;
const head = document.head;
const body = document.body;

async function page(){
    console.log(document.all);
    return `Collection of All Elements: ${document.all}\n`;
}
function greet(){
    console.log("\t Hello All Users: ", document.querySelectorAll("*"));
}
document.addEventListener("DOMContentLoaded", () =>{

});