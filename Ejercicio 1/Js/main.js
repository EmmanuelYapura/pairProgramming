let colores = ['red','green','blue','black','aqua','yellow'] 
const $main = document.querySelector('main') 
const $h2 = document.querySelectorAll('h2') 
const $botones = document.querySelectorAll('button')  
let indice = null 


$botones[1].addEventListener('click', () =>{
    cambiaColor(1)
})

$botones[0].addEventListener('click', () =>{
    cambiaColor(-1)
})

function cambiaColor(numero){
    if(indice == null || (indice + numero) == colores.length){  
        indice = 0
    }else if((indice + numero) < 0){
        indice = colores.length - 1 
    }else{
        indice += numero
    }
    muestraColores(colores[indice])
}


function muestraColores(color){         
    //console.log(color)       
    $main.style.backgroundColor = color    
    $h2[1].style.color = 'white'         
    $h2[1].innerText = color            
}
