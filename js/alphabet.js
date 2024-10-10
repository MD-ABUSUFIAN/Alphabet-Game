const names=document.getElementById('name');
const password=document.getElementById('password');
const message=document.getElementById('message')


let userName="";
const goGame= function(){
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

const playGame=function(){
    shows('playHome','visually-hidden')
    hidden('security','visually-hidden')
}
const againGame=function(){
    console.log("play again button is working");
}