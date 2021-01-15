// const { UI } = require("./ui");
import {UI} from "./ui"
const menu=document.getElementById("menu");
const contact=document.getElementById("contact");
const home=document.getElementById("home");

document.addEventListener("DOMContentLoaded",loadFirstPage);
home.addEventListener("click",loadFirstPage);
menu.addEventListener("click",LoadMenu);
contact.addEventListener("click",loadContactPage);

const ui=new UI();

function loadFirstPage(e){
    
 ui.loadFirstPage()
 
e.preventDefault();
}
function LoadMenu(){
    ui.loadSecondPage();
    e.preventDefault();
}
function loadContactPage(e){
    ui.loadThirdPage();
    e.preventDefault();
}