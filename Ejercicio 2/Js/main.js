const interno = document.querySelector('#interno')  
const medio = document.querySelector('#medio')  
const externo = document.querySelector('#externo') 
const btnReset = document.querySelector('button')  
let color 

window.addEventListener("resize",function(){   
    if (innerWidth < 500) {
        document.body.style.backgroundColor = 'black'
    }else{
        document.body.style.backgroundColor = 'white'
    }
})

interno.addEventListener('click', (e) =>{   
    color = document.querySelector('select').value  

    if(document.querySelector('input').checked) {
        //console.log(e.target.id)
        pintarCirculosConSuperposicion(color,e.target.id) 

    }else{
        e.stopPropagation() 
     cambiaColorSinSuperposicion(color,interno)  

    }
})

medio.addEventListener('click', (e) =>{
    color = document.querySelector('select').value

    if(document.querySelector('input').checked){
        pintarCirculosConSuperposicion(color,e.target.id)
        
    }else{
        e.stopPropagation()
        cambiaColorSinSuperposicion(color,medio)

    }
})

externo.addEventListener('click', (e) =>{
    color = document.querySelector('select').value
    
    if(document.querySelector('input').checked){
        pintarCirculosConSuperposicion(color,e.target.id)

    }else{
        e.stopPropagation()
        cambiaColorSinSuperposicion(color,externo)
    }
})

btnReset.addEventListener('click', () => {
    externo.style.backgroundColor = 'white'
    interno.style.backgroundColor = 'white'
    medio.style.backgroundColor = 'white'
})

function cambiaColorSinSuperposicion(color,circulo){
    circulo.style.backgroundColor = color
}

function pintarCirculosConSuperposicion(color,circulo){
    if(circulo == 'interno'){
        interno.style.backgroundColor = color
        medio.style.backgroundColor = color
        externo.style.backgroundColor = color
    } else if(circulo == 'medio'){
        interno.style.backgroundColor = 'white'
        medio.style.backgroundColor = color
        externo.style.backgroundColor = color
    } else{
        interno.style.backgroundColor = 'white'
        medio.style.backgroundColor = 'white'
        externo.style.backgroundColor = color
    }
}
