const clock=document.querySelector("span#clock");

function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");

    clock.innerText=`${hours}:${minutes}`;
}

getClock();
setInterval(getClock,1000);

const follower_count=document.querySelector("#follower-count")
const follower_btn=document.querySelector("#follower-btn")

const likes_count=document.querySelector("#likes-count")
const likes_btn=document.querySelector("#likes-btn")

let followers_number=0;
let likes_number=0;

function followersCount(event){
    event.preventDefault();
    followers_number=followers_number+1;
    follower_count.innerText=`${followers_number}`  
}

function likesCount(event){
    event.preventDefault();
    likes_number=likes_number+1;
    likes_count.innerText=`${likes_number}`  
}

follower_btn.addEventListener("click",followersCount);
likes_btn.addEventListener("click",likesCount);





