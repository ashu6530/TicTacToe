let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let rBtn=document.querySelector("#reset-btn");

let turnO;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=function(){
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");


}
boxes.forEach(function(box){
    box.addEventListener("click",function(){
        if(turnO){
        box.innerText="O";
        turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;

    checkWinner();
        
    });
});
const disableBoxes=function(){
    for(let box of boxes ){
        box.disabled=true;
    }
}
const enableBoxes=function(){
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=function(Winner){
    msg.innerText=`Congratulatins,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
      
   
};


const checkWinner=function(){
    for(pattern of winPatterns ){
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val===pos3Val){
           showWinner(pos1Val);
        }
    }
};
}
newBtn.addEventListener("click",resetGame);
rBtn.addEventListener("click",resetGame);








