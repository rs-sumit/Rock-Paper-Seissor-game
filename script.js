

//******rock paper and seissor******
let uscore = 0;
let cscore = 0;

let u_choise;
let msg = document.querySelector(".msg");
let msgb = document.querySelector(".msgbox");
let rock = document.querySelector(".first");
let paper = document.querySelector(".second");
let seissor = document.querySelector(".third");
let ccount = document.querySelector(".cscr");
let ucount = document.querySelector(".uscr");
let c_show = document.querySelector(".c_show");

function showwin() {
    msg.innerText = "You won the Match!";
    msgb.style.backgroundColor = "green";
    uscore++;
    ccount.innerText = cscore;
    ucount.innerText = uscore;
}
function showlose() {
    msg.innerText = "You lost the Match!";
    msgb.style.backgroundColor = "red";
    cscore++;
    ccount.innerText = cscore;
    ucount.innerText = uscore;
}
function showdraw() {
    msg.innerText = "Match Draw!";
    msgb.style.backgroundColor = "yellow";
    ccount.innerText = cscore;
    ucount.innerText = uscore;
}

function c_choise() {
    let arr = ["rock", "paper", "seissor"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
}
function cshow(input){
    if(input=="rock"){
        c_show.style.backgroundImage="url('rock.png')";
     }
    else if (input == "paper") {
       c_show.style.backgroundImage = "url('paper.png')";
     }
    else{
       c_show.style.backgroundImage = "url('seissor.png')";
     }
}


rock.addEventListener("click", () => {
    u_choise = "rock";
    showmsg();
});
paper.addEventListener("click", () => {
    u_choise = "paper";
    showmsg();
});
seissor.addEventListener("click", () => {
    u_choise = "seissor";
    showmsg();
});

function showmsg() {
    let c = c_choise();
    cshow(c);
    if (u_choise == c) {
        showdraw();
    } else if (u_choise == "rock") {
        if (c == "seissor") {
            showwin();
        } else {
            showlose();
        }
    } else if (u_choise == "paper") {
        if (c== "rock") {
            showwin();
        } else {
            showlose();
        }
    } else if (u_choise === "seissor") {
        if (c == "paper") {
            showwin();
        } else {
            showlose();
        }
    }
}
