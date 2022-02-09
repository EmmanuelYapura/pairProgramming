let caracteres = {otras: 0}
let h2 = document.querySelector('h2');
let mensaje = h2.innerText.toLowerCase();


for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let otros = /\W/
    //caracteres.otras 
    if (otros.test(letra)) {
        caracteres.otras++;
    } else {
        caracteres[letra] ? caracteres[letra] += 1 : caracteres[letra] = 1;
    }            
}

for (let key in caracteres){
    let letra = caracteres[key] //valores
    let porcentaje = (letra * 100) / mensaje.length
    // console.log(porcentaje)
    console.log(key) //.toFixed(2)
    caracteres[key] = `${porcentaje.toFixed(2)}%`
}