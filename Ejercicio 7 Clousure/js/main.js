//Ejercicio 1 

function contador() {

    var cont = 0

    return function () {
        return ++cont
    }
}

const contadorFunction = contador();
console.log(contadorFunction())  //1
console.log(contadorFunction())  //2
console.log(contadorFunction())  //3
console.log(contadorFunction())  //4
console.log(contadorFunction())  //5


//Ejercicio 2 

function cacheFunction(cb) {
    var obj = {}
    return function (arg1) {
        console.log('antes->',obj)

        if (obj.hasOwnProperty(arg1)) {
            console.log('cache -> arg1', arg1)
        }
        else {
            obj[arg1] = cb(arg1)
            console.log('cálculo -> arg1', arg1)
        }
        console.log('despues->',obj)
        return obj[arg1];
    }
}

const cb = function (x) {
    return x * 2;
};
const cachedFunction = cacheFunction(cb);

console.log(cachedFunction(5)) //10
console.log('\n')

console.log(cachedFunction(10))
console.log('\n')

console.log(cachedFunction(10))
console.log('\n')

console.log(cachedFunction(10))
console.log('\n')

console.log(cachedFunction(10))
console.log('\n')

console.log(cachedFunction(5)) //10
console.log('\n')