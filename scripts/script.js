// JavaScript Document
console.log("hi");

hamburgerMenu = document.querySelector(".menuIngeklapt");
hamburgerKnop = document.querySelector(".hamburgerKnop")

hamburgerKnop.onclick = menuUitklappen;

function menuUitklappen(){
    hamburgerMenu.classList.toggle("menuUitgeklapt");
}