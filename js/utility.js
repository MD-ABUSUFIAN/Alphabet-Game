

// hidden function 
const hidden=function(sectionId,className){
document.getElementById(sectionId).classList.add(className);
}
// shows function 
const shows =function(sectionId,className){
document.getElementById(sectionId).classList.remove(className)
}

// adding backgrond function 
function addBackgroundColor(Id){
    document.getElementById(Id).classList.add('bg-danger','text-warning','fs-5')
}
// remove backgrond function 
function removeBackgroundColor(Id){
    document.getElementById(Id).classList.remove('bg-danger','text-warning','fs-5')
}


// disply function 
const display=document.getElementById('display');

function randomAlphaBet(){
   const keysString='abcdefghijklmnopqrstuvwxyz';
   const keysArray=keysString.split('');
   const randomNumber=Math.random()* 25;
   const index=Math.round(randomNumber);
   const alphaBet=keysArray[index];
   return alphaBet;
//    display.innerText=rendomResult;
//    console.log(index + "index and :" +rendomResult);
}

// keyprees event value function 

// const play=function(){

//     const keys='abcdefghijklmnopqrstuvwxyz';
//     const key=keys.split("");
//     const rendom=Math.random()*27;
//     const index=Math.round(rendom);
//     const results=key[index];
//     display.innerText=results;
//     // console.log( "display result:"+ display.innerText, "result"+ results)
//     document.getElementById(results).classList.add('bg-danger','text-warning','fs-5');
    
// //  keys function and style change 
// //     document.addEventListener('keyup',function(e){
// //         const key=e.key;
// //     if(key===results){
// //         console.log("match")
// //         console.log((key===results))
// //         console.log("key value Result:"+ key +"results value Result:"+ results);
// //         document.getElementById(results).classList.remove('bg-danger','text-warning','fs-5');
// //         score();
// //     }
// //   else{
// //     document.getElementById(results).classList.remove('bg-danger','text-warning','fs-5');
// //         // lifeRemove()
       
// //         console.log("data is not matching",)
// //     }
        

//         // });
       
// }

// score Counter function 
const lifeCount=document.getElementById('lifeCount');
const scoreCount=document.getElementById('scoreCount');
// total result function 
const totalScore=document.getElementById('totalScore');

let scored=0
let oldLife=10;
function score(){
    scoreCount.innerText=scored+=1;
    continueGame()
}
function lifeRemove(){
    if(oldLife>0){
        lifeCount.innerText=oldLife-=1
    }
    else{
        totalScore.innerText=scoreCount.innerText
        shows('result','visually-hidden')
        hidden('playGround','visually-hidden')
        console.log("your life is finish")
    }
    
}








        

