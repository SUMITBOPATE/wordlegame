



let  gamearr = ['Apple','Banana','Van','djks','dsls'];

let  wordelement=document.getElementById("wordarr");
 

wordelement.innertext=gamearr[Math.floor(Math.random())];

console.log(gamearr);
let newword="";
let correctword=document.getElementById('correctword');
let wrongword=document.getElementById('wrongword');


getword();


function getword() 
{
document.getElementById('wordarr').style.top="0px";

const  word=gamearr[Math.floor(Math.random() * gamearr.length)];
newword=document.getElementById('wordarr').innerText= word;

let top=0;

AnimationMe();

function AnimationMe()
{ 
    if(top==364)
    {  top=0;
        return;}
    let element1=document.getElementById('wordarr');
    element1.style.top = '${top}px';
    top;
    requestAnimationFrame(AnimationMe);
return;
}
AnimationMe();


