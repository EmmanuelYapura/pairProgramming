//Nombre entre 3-20 caracteres /^[A-Z][a-z]{2,19}$/
//Edad entre 18 - 120  ^(1(8|9)|[2-9][0-9]|1[0-1][0-9]|120)$
//Mail valido  ^\w+@\w+\.[a-z]{2,3}(\.ar)?$
// Indicar el error de validación con un simple "campo no válido" debajo del campo correspondiente ó si se quiere dar más detalle del error.
//El botón de envió se habilitará en el caso de que todo sea correcto y ahí se representa en la consola lo
//ingresado en formato objeto: {nombre: xxxx, edad: 99, email: y@z}

//margin: 0 auto;

const $btn = document.querySelector('button')
const $form = document.querySelector('form')

$form.addEventListener('submit', (e) => {
    e.preventDefault()
    /*-----------Aca Solo obtengo los valores de los inputs---------------*/
    
    const nombre = $form.nombre.value
    //const nombre = document.querySelector('#nombre').value 
    const edad = $form.edad.value
    //const edad = document.querySelector('#edad').value
    const mail = $form.mail.value
    //const mail = document.querySelector('#mail').value

    /*-----------Creo variables para analizar los errores en inputs---------------*/
    const errorNombre = validarNombre(nombre)
    
    const errorEdad = validarEdad(edad)

    const errorMail = validarMail(mail)

    /*----------------Creo un objeto para controlar errores--------------------*/

    const errores = {
        nombre: errorNombre,
        edad: errorEdad,
        mail: errorMail
    }

    const esValido = manejarErrores(errores)

    if(!esValido){
        console.log('El formulario es valido')
    }
 

    //console.log('Click en boton enviar')
 
})


/*--------------Esta funcion es ESTATICA----------------*/

function manejarErrores(errores){
    let cantErrores = 0
    let llaves = Object.keys(errores)
    
    llaves.forEach( key => {
        const error = errores[key]
        const div = document.querySelector('#caja-' + key)
        console.log(div)
        if(error){
            cantErrores++
            div.innerHTML = error
            div.className = ''
        }else{
            div.className = 'oculto'
        }
    })

    console.log(cantErrores)
    return cantErrores
}

/*----------------Funcion para errores DINAMICA-----------*/

/* const $inputs = document.querySelectorAll('input')

$inputs[0].addEventListener('input', () => {
    validarNombre($inputs[0].value)
})

$inputs[1].addEventListener('input', () => {
    validarEdad($inputs[1].value)
})

$inputs[2].addEventListener('input', () => {
    validarMail($inputs[2].value)
})
 */


function validarNombre(nombre){

    if(nombre.length == 0){
        return 'Este campo debe tener como minimo 3 caracteres'
    }

    if(nombre.length > 20){
        return 'Este campo no puede superar los 20 caracteres'
    }

    if(!/^[A-Z][a-z]{2,19}$/.test(nombre)){
        return 'Este campo solo acepta letras y la primera debe ser mayuscula'
    }

    return ''
}

function validarEdad(edad){
    
    if(edad == 0){
        return 'Ingrese su edad'
    }

    if(edad < 18){
        return 'La edad no puede ser menor a 18 años'
    }

    if(edad > 120){
        return 'La edad no puede ser mayor que 120 años'
    }
    
    if(/^(1(8|9)|[2-9][0-9]|1[0-1][0-9]|120)$/.test(edad)){
        return ''
    }

}

function validarMail(mail){
    
    if(mail.includes(' ')){
        return 'No se permiten espacios en este campo'
    }
    if(mail.includes('*')){
        return 'No se permiten asteriscos en este campo'
    }
    if(!/^\w+@\w+\.[a-z]{2,3}(\.ar)?$/.test(mail)){
        return 'Debe ingresar un correo electronico válido'
    }
 
    return ''
}