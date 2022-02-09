class Programa {
    constructor() {

        this.div = document.querySelectorAll('div')
        this.input = document.querySelectorAll('input')
        this.label = document.querySelectorAll('label')

    }

    start() {
        this.cancelarDDFondo()
        this.registrarEventos()
    }

    cancelarDDFondo() {
        document.addEventListener('dragenter', e => e.preventDefault())
        document.addEventListener('dragleave', e => e.preventDefault())
        document.addEventListener('dragover', e => e.preventDefault())
        document.addEventListener('drop', e => e.preventDefault())
    }

    retardo() {
        return new Promise(resolve => setTimeout(resolve, 2000))
    }

    async dobleRetardo() {
        await this.retardo()
        await this.retardo()
    }

    cargarImagen(archivo, id) {
        this.div[id].style.backgroundImage = ''

        let xhr = new XMLHttpRequest
        let urlSinCache = archivo + '?' + Date.now()
        xhr.open('get', urlSinCache)
        xhr.responseType = 'blob'

        xhr.addEventListener('load', async () => {
            if (xhr.status == 200) {
                let imagenBlob = xhr.response
                let url = URL.createObjectURL(imagenBlob)

                let aux = this.label[id].textContent
                this.label[id].textContent = 'Cargando...'
                //await this.retardo()
                await this.dobleRetardo()
                //this.label[id].textContent = `Zona ${id+1}: DD or Click`
                this.label[id].textContent = aux

                this.div[id].style.backgroundImage = `url(${url})`
            }
        })
        xhr.send()
    }

    registrarEventos() {
        this.div.forEach((el, id) => {
            el.addEventListener('drop', e => {
                e.preventDefault()
                let archivo = e.dataTransfer.files[0].name
                this.input[id].value = ''
                this.cargarImagen(archivo, id)

            })
            el.addEventListener('dragenter', e => e.preventDefault())
            el.addEventListener('dragleave', e => e.preventDefault())
            el.addEventListener('dragover', e => e.preventDefault())
        })

        this.input.forEach((el, id) => {
            el.addEventListener('change', () => {
                let archivo = this.input[id].files[0].name
                this.input[id].value = ''
                this.cargarImagen(archivo, id)
            })
        })
    }
}

const programa = new Programa()
programa.start()
