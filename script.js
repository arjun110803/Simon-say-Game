let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game is started");
    started=true;

    levelUp();
    }
});

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);  
}

function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if (userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        } 
    } else {
            h2.innerHTML=`Game Over! Your score was <b>${level}</b>Press any key to restart`;
            document.querySelector("body").style.backgroundcolor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundcolor = "white";
            }, 150)
            reset();
        }
}

function btnPress() {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];   
    userSeq = [];
    level = 0;
}