const names=document.getElementById('name');
const password=document.getElementById('password');
const message=document.getElementById('message');
const displays=document.getElementById('display');
const lifeCounts=document.getElementById('lifeCount');
const scoreCounts=document.getElementById('scoreCount');








let userName="";
// security page function 
function login(){
    console.log("go game click")
    if(password.value=="MERN-2404"){
        userName=names.value;
        names.value="";
        password.value="";
        shows('playHome','visually-hidden')
        hidden('security','visually-hidden')
    }
    else{
        message.innerText="your password is wrong plz type MERN-2404"
        alert("WRONG PASSWORD PLZ TYPE : MERN-2404")
    }
}




function continueGame(){
// random alphabet 
const randomAlpha=randomAlphaBet();
// display this alphabet section 
 displays.innerText=randomAlpha;
 addBackgroundColor(randomAlpha)

}


function playNow(){
    shows('playGround','visually-hidden')
    hidden('playHome','visually-hidden')
    // player key press function 
function handleKeyBoard(event){
    const playerPress=event.key;
    const displayAlpha=displays.innerText;
    const lowerCasedisplayAlpha=displayAlpha.toLowerCase();
    const lowerCasePlayerPress=playerPress.toLowerCase();
        if(lowerCasePlayerPress===lowerCasedisplayAlpha){
            removeBackgroundColor(lowerCasePlayerPress)
            console.log("alpha is mathicng")
            score()
        }
        else{
            lifeRemove()
            console.log("alpha is not matching")
        }
    
    }
    
    document.addEventListener('keyup',handleKeyBoard)

  
}
function againGame(){
    shows('playGround','visually-hidden')
    hidden('result','visually-hidden')
    hidden('security','visually-hidden')
    lifeCounts.innerText=10;
    scoreCounts.innerText="";
    continueGame()
}
// const continueGame=function(){
//     document.addEventListener('keyup',function(e){
//         document.getElementById(e.key).classList.remove('bg-danger','text-warning','fs-5');
//        let results=playGround()
//        console.log(results);
//        console.log(e.key)
      
     
//     })
// }


