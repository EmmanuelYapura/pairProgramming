function cargarImagen(archivo, div) {

    let xhr = new XMLHttpRequest
    let urlSinCache = archivo + '?' + Date.now()
    xhr.open('get', urlSinCache)
    xhr.responseType = 'blob'

    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let imagenBlob = xhr.response
            //console.log(imagenBlob)
            let url = URL.createObjectURL(imagenBlob)
            //console.log(url)
            div.style.backgroundImage = `url(${url})`
        }
    })

    xhr.send()
}

let div = document.querySelectorAll('div')
let input = document.querySelectorAll('input')

document.addEventListener('dragenter', e => e.preventDefault())
document.addEventListener('dragleave', e => e.preventDefault())
document.addEventListener('dragover', e => e.preventDefault())
document.addEventListener('drop', e => e.preventDefault())

div.forEach((el, id) => {
    el.addEventListener('drop', e => {
        e.preventDefault()
        //console.log('Solté el recurso', id)
        let archivo = e.dataTransfer.files[0].name
        input[id].value = ''
        cargarImagen(archivo, div[id])

    })

    el.addEventListener('dragenter', e => {
        e.preventDefault()
        //console.log('Estoy adentro del drop', id)
    })

    el.addEventListener('dragleave', e => {
        e.preventDefault()
        //console.log('Estoy afuera del drop', id)
    })

    el.addEventListener('dragover', e => {
        e.preventDefault()
        //console.log('Estoy encima del drop', id)
    })
})

input.forEach((el, id) => {
    el.addEventListener('change', () => {
        console.log('Cambió el input', id)

        let archivo = input[id].files[0].name
        //console.log(archivo)
        input[id].value = ''
        cargarImagen(archivo, div[id])
    })
})