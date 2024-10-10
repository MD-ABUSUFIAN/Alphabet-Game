
const hidden=function(sectionId,className){
document.getElementById(sectionId).classList.add(className);
}
const shows =function(sectionId,className){
document.getElementById(sectionId).classList.remove(className)
}


const display=document.getElementById('display');
const playGround=function(){
    const keys='abcdefghijklmnopqrstuvwxyz';
    const key=keys.split("");
    const rendom=Math.random()*27;
    const index=Math.round(rendom);
    const results=key[index];
    display.innerText=results;
    document.getElementById(results).classList.add('bg-danger','text-warning','fs-5');
    document.addEventListener('keyup',function(e){
        const key=e.key
        const keyValue=key.toLowerCase()
    if(keyValue==results){
        console.log("data is matching")
        document.getElementById(keyValue).classList.remove('bg-danger','text-warning','fs-5');
        playGround()
    }
    else{
        console.log("data is not matching",)
       
    }
          
        });
        
 

}




