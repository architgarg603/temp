let btn = document.querySelector("button")
let text = document.querySelector("h3")
let arr = [
    " Never have I ever went more than a day without brushing my teeth.",
    " Never have I ever had crush on my friend's partner.",
    " Never have I ever been ony any dating app.",
    " Never have I ever been to the opposite gender's washroom.",
    "Never have I ever tried to make an ex jealous",
    " Never have I ever lied during this game!",
    " Never have I ever made out in public.",
    " Never have I ever cheated or was cheated in a relationship.",
    " Never have I ever flirted with a person who is in a comitted relationship.",
    " Never have I ever fallen in love at first sight.",
    " Never have I ever stolen something.",
    " Never have I ever caught cheating on a test.",
    " Never have I ever lied about my age to someone.",
    " Never have I ever had someone slap me across the face.",
    " Never have I ever brushed with someone else's toothbruth.",
]

let idx = 0;
let check = true;

btn.addEventListener("click", () => {
    if(!check)return
    check = false;
    if (idx >= arr.length) idx = 0;
    btn.innerHTML = "Next"
    setTimeout(()=>{
        text.innerHTML = 3;
    },1000)
    setTimeout(()=>{
        text.innerHTML = 2;
    },2000)
    setTimeout(()=>{
        text.innerHTML = 1;
    },3000)
    setTimeout(()=>{
        text.innerHTML = arr[idx++];
        check = true
    },4000)
})

