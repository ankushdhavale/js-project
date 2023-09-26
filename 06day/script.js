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
    userSeq = [];2
    level++;
    h2.innerText = `Level ${level}`;
    
    let rendIdx = Math.floor(Math.random() * 3 );
    let randColor = btns[rendIdx];
    let ranBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(ranBtn);

}

    function checkAns(idx) {
        if(userSeq[idx] === gameSeq[idx]){
            if(userSeq.length === gameSeq.length){
                setTimeout(levelUp() , 1000);
            }
        }else{
            h2.innerHTML = `Game is over ! Your Score was <b> ${level} </b> <br> press any key to start`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            },150);
        }
    }


const btnPress = () =>{
   let btn = event.target;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click", btnPress)
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}