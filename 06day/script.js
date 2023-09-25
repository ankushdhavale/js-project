let gameSeq = [];
let userSeq = [];


let btns = [ "antiquewhite" ,  "aquamarine", "blueviolet" , "hotpink"]
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("click", function(){
    if( started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( () => {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( () => {
        btn.classList.remove("userflash");
    }, 250)
}


const levelUp = ( ) => {
    level++;
    h2.innerText = `Level ${level}`;
    

    let rendIdx = Math.floor(Math.random() * 3 );
    let randColor = btns[rendIdx];
    let renBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(renBtn);
    console.log(gameSeq);
    btnFlash(renBtn);

}


const btnPress = () =>{
   let btn = event.target;
   userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click", btnPress)
}


