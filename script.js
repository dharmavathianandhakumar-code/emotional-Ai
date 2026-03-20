function login(){

let name=document.getElementById("username").value;

if(name===""){
alert("Enter your name");
return;
}

localStorage.setItem("user",name);
window.location.href="home.html";

}


function analyzeEmotion(){

let emotion=document.getElementById("emotion").value;

if(emotion.length<3){
alert("Type something");
return;
}

localStorage.setItem("emotion",emotion);
window.location.href="result.html";

}


function goBack(){
window.location.href="home.html";
}


/* RESULT PAGE */

window.onload=function(){

if(window.location.pathname.includes("result.html")){

let stored=localStorage.getItem("emotion");

if(!stored){
document.getElementById("resultBox").innerText="No data found. Go back.";
return;
}

let text=stored.toLowerCase();
let output="";

if(text.includes("sleep") || text.includes("tired")){

output="😴 You feel sleepy\n\n- Take rest\n- Drink water\n\nPlan:\n20 min study + 5 min break";

}
else if(text.includes("stress") || text.includes("tension")){

output="😓 You are stressed\n\n- Relax\n- Take deep breath\n\nPlan:\n25 min study + 10 min relax";

}
else if(text.includes("bored")){

output="😐 You are bored\n\n- Change topic\n- Try something new";

}
else if(text.includes("exam")){

output="📚 Exam time\n\n- Revise\n- Practice questions";

}
else{

output="🙂 Stay focused\n\n- Avoid distractions\n- Be consistent";

}
let lines=[
"🔥 You can do it!",
"💪 Keep pushing!",
"🚀 Success is near!",
"📚 Small steps daily!"
];

output += "\n\n" + lines[Math.floor(Math.random()*lines.length)];

/* Typing effect */

let box=document.getElementById("resultBox");

box.innerHTML="AI is thinking...";

let i=0;

setTimeout(()=>{

box.innerHTML="";

function typing(){

if(i<output.length){
box.innerHTML+=output.charAt(i);
i++;
setTimeout(typing,25);
}

}

typing();

},1000);

}

};

/* PERSONALIZED GREETING */

window.addEventListener("load",function(){

let name=localStorage.getItem("user");

if(name){

let greetText="Hello "+name+" 👋\nYou can do this 💪";

let greetElement=document.getElementById("greeting");

if(greetElement){

greetElement.innerText=greetText;

}

}

});

/* TYPING GREETING + AI QUESTION */

window.addEventListener("load",function(){

let name=localStorage.getItem("user");

let greetElement=document.getElementById("greeting");
let questionElement=document.getElementById("aiQuestion");

if(name && greetElement){

let greetText="Hello "+name+" 👋";
let i=0;

greetElement.innerHTML="";

/* TYPE NAME */

function typeName(){

if(i<greetText.length){
greetElement.innerHTML+=greetText.charAt(i);
i++;
setTimeout(typeName,50);
}else{

/* AFTER NAME → QUESTION */

if(questionElement){

let qText="How do you feel today? 🤖";
let j=0;

function typeQuestion(){

if(j<qText.length){
questionElement.innerHTML+=qText.charAt(j);
j++;
setTimeout(typeQuestion,40);
}

}

setTimeout(typeQuestion,500);

}

}

}

typeName();

}

});

/* THEME CHANGE BASED ON EMOTION */

let body=document.body;

if(text.includes("sleep") || text.includes("tired")){
body.classList.add("sleep-theme");
}
else if(text.includes("stress") || text.includes("tension")){
body.classList.add("stress-theme");
}
else if(text.includes("happy") || text.includes("good")){
body.classList.add("happy-theme");
}``

/* SMART Q&A SYSTEM */

let qa = [

{
keys:["study","how to study","hours","time"],
ans:"📚 Study Tips:\n\n- Study in short sessions (25 min)\n- Take breaks\n- Revise daily\n- Make notes"
},

{
keys:["remember","memory","forget"],
ans:"🧠 Memory Tips:\n\n- Revise multiple times\n- Use diagrams\n- Teach others\n- Practice writing"
},

{
keys:["focus","concentration","distract"],
ans:"🎯 Focus Tips:\n\n- Keep phone away\n- Study in quiet place\n- Use timer method\n- Set small goals"
},

{
keys:["sleep","tired","lazy"],
ans:"😴 Sleep Advice:\n\n- Take 10 min rest\n- Drink water\n- Study light topic\n\nPlan:\n20 min study + 5 min break"
},

{
keys:["stress","tension","pressure"],
ans:"😓 Stress Control:\n\n- Deep breathing\n- Short walk\n- Positive thinking\n\nPlan:\n25 min study + relax"
},

{
keys:["bored","boring","interest"],
ans:"😐 Beat Boredom:\n\n- Change subject\n- Try videos\n- Study with friend"
},

{
keys:["exam","test","revision"],
ans:"📚 Exam Tips:\n\n- Revise important topics\n- Solve previous papers\n- Avoid new topics"
},

{
keys:["mobile","phone","social media"],
ans:"📱 Avoid Distraction:\n\n- Turn off notifications\n- Keep phone away\n- Use app blocker"
},

{
keys:["motivation","lazy to study","no mood"],
ans:"🔥 Motivation:\n\n- Start small\n- Think about goals\n- Reward yourself"
}

];


/* MATCHING LOGIC */

let found=false;

for(let i=0;i<qa.length;i++){

for(let j=0;j<qa[i].keys.length;j++){

if(text.includes(qa[i].keys[j])){

output=qa[i].ans;
found=true;
break;

}

}

if(found) break;

}

/* DEFAULT */

if(!found){

output="🙂 General Advice:\n\n- Stay consistent\n- Avoid distractions\n- Keep learning";

}

/* 🔥 ADVANCED AI SYSTEM (MULTI DETECTION) */

let text = (emotion + " " + problem).toLowerCase();

let responses = [];

/* 😴 SLEEP */
if(text.includes("sleep") || text.includes("tired") || text.includes("lazy")){
responses.push("😴 You feel sleepy:\n- Take 10 min rest\n- Drink water\n- Study light topic\n");
}

/* 😓 STRESS */
if(text.includes("stress") || text.includes("tension") || text.includes("pressure")){
responses.push("😓 You are stressed:\n- Deep breathing\n- Short walk\n- Stay calm\n");
}

/* 😐 BORED */
if(text.includes("bored") || text.includes("interest")){
responses.push("😐 Feeling bored:\n- Change subject\n- Try videos\n- Study with friend\n");
}

/* 😵 CONFUSION */
if(text.includes("confuse") || text.includes("understand") || text.includes("puriyala")){
responses.push("🤯 Confused:\n- Break topic into small parts\n- Watch tutorials\n- Practice more\n");
}

/* 😡 FRUSTRATION */
if(text.includes("frustrate") || text.includes("angry")){
responses.push("😡 Frustration:\n- Take break\n- Relax mind\n- Come back fresh\n");
}

/* 😔 LOW MOTIVATION */
if(text.includes("motivation") || text.includes("no mood") || text.includes("lazy to study")){
responses.push("😔 Low motivation:\n- Start small\n- Think about your goal\n- Reward yourself\n");
}

/* 🎯 FOCUS */
if(text.includes("focus") || text.includes("concentrate") || text.includes("distract")){
responses.push("🎯 Focus problem:\n- Keep phone away\n- Use timer method\n- Study in quiet place\n");
}

/* 🧠 MEMORY */
if(text.includes("forget") || text.includes("memory")){
responses.push("🧠 Memory tips:\n- Revise daily\n- Write practice\n- Teach others\n");
}

/* 📚 EXAM */
if(text.includes("exam") || text.includes("test")){
responses.push("📚 Exam tips:\n- Revise important topics\n- Practice previous questions\n- Stay confident\n");
}

/* 📱 DISTRACTION */
if(text.includes("mobile") || text.includes("phone") || text.includes("social")){
responses.push("📱 Avoid distraction:\n- Turn off notifications\n- Keep phone away\n- Use focus apps\n");
}

/* DEFAULT */
if(responses.length === 0){
responses.push("🙂 General Advice:\n- Stay consistent\n- Avoid distractions\n- Keep learning\n");
}

/* FINAL OUTPUT */
let output = responses.join("\n");

/* CHAT UI DISPLAY */

let box=document.getElementById("resultBox");

let user=document.createElement("div");
user.className="user-bubble";
user.innerText=problem+" | "+emotion;

let ai=document.createElement("div");
ai.className="ai-bubble";

box.appendChild(user);
box.appendChild(ai);

/* typing effect */
let i=0;
function type(){
if(i<output.length){
ai.innerHTML+=output.charAt(i);
i++;
setTimeout(type,20);
}
}
type();

/* voice */
speak(output);





