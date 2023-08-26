const root = document.documentElement;
const head = document.head;
const body = document.body;

function page(){
    console.log(document.all);
    return `Collection of All Elements : ${document.all}\n`;
}
async function greet(){
    let p = await page();
    console.log("\t Hello All Users: ", document.querySelectorAll("*"));
}
document.addEventListener("DOMContentLoaded", async() =>{
    let first = await greet();

    const div = document.createElement("code");
    div.innerHTML = `<h2>I was created on runtime. <h2/>`;
    body.appendChild(div);
    console.log(`Greeting has been done!!`);
});