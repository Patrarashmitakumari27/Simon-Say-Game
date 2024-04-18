let gameSequences = [];
let userSequences = [];
let gameStarted = false;
let level = 0;
let count = 0;
let hightestScore = 0;
let btns = ["pink","yellow","green","blue"];
let h3 = document.querySelector("h3");
let p = document.createElement("p");
p.innerHTML = " ";
let body = document.querySelector("body");
body.appendChild(p);
let startBtn = document.querySelector("button");
let colorBtn = document.querySelectorAll(".btn");
console.dir(startBtn);
startBtn.addEventListener("click",function(){
    if(gameStarted == false){
        gameStarted = true;
        levelUp();
        console.log("Game Started")
    }
});
function levelUp(){
    userSequences=[];
    level++;
    h3.innerText =`Level ${level}`;
    let randomIndx = Math.floor(Math.random()*3);
    let randomClr = btns[randomIndx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    console.log(randomIndx);
    console.log(randomClr);
    console.log(randomBtn);
    gameSequences.push(randomClr);
    console.log(gameSequences);
    btnflash(randomBtn);
};
function btnflash(btn){
    btn.classList.add("flash")
    setTimeout (()=>{
           btn.classList.remove("flash")
    },250);
};
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout (()=>{
           btn.classList.remove("userflash")
    },250);
};
function checkAns(idx){
    //console.log("current level : ",level );
    // let idx = level - 1;
    
    if (userSequences[idx] === gameSequences[idx]){
        if (userSequences.length == gameSequences.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game Over! Your score was <b>${level} </b> <br> Press Button to restart.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },150);
        countCycle();
    }
};
function btnPress(){
    let btn = this;
    console.log(this);
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userSequences.push(userColor);
    console.log(userSequences);
    checkAns(userSequences.length-1);
};
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
};
function countCycle(){
    let currentLevel = `${level}`;
    console.log(currentLevel);
    if(hightestScore <= currentLevel){
        hightestScore = currentLevel;
        console.log(hightestScore);
        p.innerHTML = `Your Hightest Score is <b> ${hightestScore} </b>.`;
    }else{
        console.log(hightestScore);
    }
    reset();
}
function reset(){
    gameSequences = [];
    userSequences = [];
    gameStarted = false;
    level = 0;
    count++;
    console.log(count);
};
