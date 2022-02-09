//Nombre entre 3-20 caracteres /^[A-Z][a-z]{2,19}$/
//Edad entre 18 - 120  ^(1(8|9)|[2-9][0-9]|1[0-1][0-9]|120)$
//Mail valido  ^\w+@\w+\.[a-z]{2,3}(\.ar)?$
//Indicar el error de validación con un simple "campo no válido" debajo del campo correspondiente ó si se quiere dar más detalle del error.
//El botón de envió se habilitará en el caso de que todo sea correcto y ahí se representa en la consola lo
//ingresado en formato objeto: {nombre: xxxx, edad: 99, email: y@z}

//margin: 0 auto;

const $btn = document.querySelector('button')
const $form = document.querySelector('form')

//$btn.disabled = true;


$form.addEventListener('submit', (e) => {
    e.preventDefault()
    /*-----------Aca Solo obtengo los valores de los inputs---------------*/
    
    const nombre = $form.nombre.value
    //const nombre = document.querySelector('#nombre').value 
    const edad = $form.edad.value
    //const edad = document.querySelector('#edad').value
    const mail = $form.mail.value
    //const mail = document.querySelector('#mail').value

    const errorNombre = validarNombre(nombre)  //''
    const errorEdad = validarEdad(edad)        //''
    const errorMail = validarMail(mail)        //''

    const error = {
        nombre: errorNombre,
        edad: errorEdad,
        mail: errorMail
    }

    let validacion = contadorErrores(error)

    if(!validacion){
        const datosFormulario = {
            nombre: nombre,
            edad: edad,
            mail: mail
        }
        $btn.disabled = true;
        console.log(datosFormulario)
    }else{
        console.log('Su formulario no es valido')
    }
    

    //console.log('Click en boton enviar')
 
})

function contadorErrores(errores){
    let llaves = Object.keys(errores)
    let cont = 0

    llaves.forEach(elem => {
        const error = errores[elem]
        if(error) cont++
    })

    return cont
}


/*----------------Funcion para errores DINAMICA-----------*/

const $inputs = document.querySelectorAll('input')

$inputs[0].addEventListener('input', () => {
    //console.log('Se modifico el valor del input')
    validarNombre($inputs[0].value)
})

$inputs[1].addEventListener('input', () => {
    //console.log('Se modifico el valor del input')
    validarEdad($inputs[1].value)
})

$inputs[2].addEventListener('input', () => {
    //console.log('Se modifico el valor del input')
    validarMail($inputs[2].value)
})

function muestraError(mensaje, id){
    const $div = document.querySelector('#caja-'+id)
    $div.className = mensaje? '' : 'oculto'
    $div.innerHTML = mensaje
    //mostrarBoton()
    //console.log($div)
}

/* function mostrarBoton(){
    let cont = 0
    const $divs = document.querySelectorAll('div')
    $divs.forEach( div => {
        if(div.className == 'oculto') cont++
    })
    
    if(cont == 3) $btn.className = ''
    else $btn.className = 'oculto'
} */

function validarNombre(nombre){
    let mensaje = ''
    if(nombre.length == 0){
        mensaje = 'Este campo debe tener como minimo 3 caracteres'
        muestraError(mensaje,'nombre')
        return mensaje
    }

    if(nombre.length > 20){
        mensaje = 'Este campo no puede superar los 20 caracteres'
        muestraError(mensaje,'nombre')
        return mensaje
    }

    if(!/^[A-Z][a-z]{2,19}$/.test(nombre)){
        mensaje = 'Este campo solo acepta letras y la primera debe ser mayuscula'
        muestraError(mensaje,'nombre')
        return mensaje
    }

    muestraError(mensaje,'nombre')
    return mensaje
}

function validarEdad(edad){
    let mensaje = ''

    if(edad == 0){
        mensaje = 'Ingrese su edad'
        muestraError(mensaje,'edad')
        return mensaje
    }

    if(edad < 18){
        mensaje = 'La edad no puede ser menor a 18 años'
        muestraError(mensaje,'edad')
        return mensaje
    }

    if(edad > 120){
        mensaje = 'La edad no puede ser mayor que 120 años'
        muestraError(mensaje,'edad')
        return mensaje
    }
    
    if(!/^(1(8|9)|[2-9][0-9]|1[0-1][0-9]|120)$/.test(edad)){
        mensaje = 'Hay errores en la edad ingresada'
        muestraError(mensaje,'edad')
        return mensaje
    }

    muestraError(mensaje,'edad')
    return mensaje
}

function validarMail(mail){
    let mensaje = ''

    if(mail.includes(' ')){
        mensaje = 'No se permiten espacios en este campo'
        muestraError(mensaje,'mail')
        return mensaje
    }
    if(mail.includes('*')){
        mensaje = 'No se permiten asteriscos en este campo'
        muestraError(mensaje,'mail')
        return mensaje
    }
    if(!/^\w+@\w+\.[a-z]{2,3}(\.ar)?$/.test(mail)){
        mensaje = 'Debe ingresar un correo electronico válido'
        muestraError(mensaje,'mail')
        return mensaje
    }
    
    muestraError(mensaje,'mail')
    return mensaje
}