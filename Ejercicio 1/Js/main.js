let colores = ['red','green','blue','black','aqua','yellow'] // RECORDAR QUE LOS COLORES DEBEN IR EN INGLES!
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
    if(indice == null || (indice + numero) == colores.length){  //El null es importante para que comience en 0 y muestre red!
        indice = 0
    }else if((indice + numero) < 0){
        indice = colores.length - 1 
    }else{
        indice += numero
    }
    muestraColores(colores[indice])
}


function muestraColores(color){         //Funcion para mostrar colores
    //console.log(color)       
    $main.style.backgroundColor = color    //Cambia el color de fondo del elemento main
    $h2[1].style.color = 'white'         //Pone las letras en blanco del elemento h2 que muestra los colores
    $h2[1].innerText = color            //Modifica texto con el color que muestra el main
}
