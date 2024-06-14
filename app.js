let paper=document.querySelector("#paper");
let rock=document.querySelector("#rock");
let scissors=document.querySelector("#scissors");
images=document.querySelectorAll("img");
let h2=document.querySelector(".winner");
let u=document.querySelector(".user");
let c=document.querySelector(".computer");
let body=document.querySelector("body");
let cscore=0;
let us=0;
for(let i=0;i<3;i++){
    images[i].addEventListener("click",function(){
        console.log(images[i],"was clicked",i+1);
        if(images[i].getAttribute("id")=="paper"){
            winner(1);
        }
        else if(images[i].getAttribute("id")=="scissors"){
            winner(2);
        }
        else{
            winner(3);
        }
    })
}
function generate(){
    let ans=Math.floor(Math.random()*3)+1;
    return ans;
}
function winner(user){
    let comp=generate();
    console.log("computer choice",comp);
    if(user==comp){
        console.log("Tie");
        h2.innerText="Tie";
        body.classList.add("flash-yellow");
        setTimeout(function(){
            body.classList.remove("flash-yellow");
        },200);
    }
    else if(user==3 && comp==1){
        console.log("You lost Paper beats Rock");
        h2.innerText="You lost Paper beats Rock";
        cscore++;
        c.innerText=`${cscore}`;
        body.classList.add("flash-red");
        setTimeout(function(){
            body.classList.remove("flash-red");
        },200);
    }
    else if(user==1 && comp==2){
        console.log("You lost Scissor beat Paper");
        h2.innerText="You lost Scissor beat Paper";
        cscore++;
        c.innerText=`${cscore}`;
        body.classList.add("flash-red");
        setTimeout(function(){
            body.classList.remove("flash-red");
        },200);
    }
    else if(user==2 && comp==3){
        console.log("You lost Rock beats Scissor ");
        h2.innerText="You lost Rock beats Scissor ";
        cscore++;
        c.innerText=`${cscore}`;
        body.classList.add("flash-red");
        setTimeout(function(){
            body.classList.remove("flash-red");
        },200);
    }
    else if(user==1 && comp==3){
        console.log("You won Paper beats Rock");
        h2.innerText="You won Paper beats Rock";
        us++;
        u.innerText=`${us}`;
        body.classList.add("flash-green");
        setTimeout(function(){
            body.classList.remove("flash-green");
        },200);
    }
    
    else if(user=2 && comp==1){
        console.log("You Won Scissor beat Paper");
        h2.innerText="You Won Scissor beat Paper";
        us++;
        u.innerText=`${us}`;
        body.classList.add("flash-green");
        setTimeout(function(){
            body.classList.remove("flash-green");
        },200);
    }
    else if(user==3 && comp==2){
        console.log("You Won Rock beats Scissor ");
        h2.innerText="You Won Rock beats Scissor";
        us++;
        u.innerText=`${us}`;
        body.classList.add("flash-green");
        setTimeout(function(){
            body.classList.remove("flash-green");
        },200);
    }
    else{
        console.log("You Won Rock beats Scissor ");
        h2.innerText="You Won Rock beats Scissor";
        us++;
        u.innerText=`${us}`;   
        body.classList.add("flash-green");
        setTimeout(function(){
            body.classList.remove("flash-green");
        },200);   
    }
}
