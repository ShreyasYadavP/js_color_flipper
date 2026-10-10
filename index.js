const  body = document.getElementsByTagName("body")[0] ;

function setcolor(name){
    body.style.backgroundColor = name ;
}

function randomcolor(){
    const r = Math.round(Math.random()*255) ;
    const g = Math.round(Math.random()*255) ;
    const b = Math.round(Math.random()*255) ;
    body.style.backgroundColor = `rgb(${r},${g},${b})` ;
}