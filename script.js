let alumno = { //objeto literal
    nombre : `Juan Perez`,
    edad : 23,
    fechaDeRegistro : new Date(),
    casado : true,
    domicilio : {
        cd : `GD`,
        calle : `Ramon Corona`,
        num : 89
    },

    telefonos : {
        casa :`123456`,
        movil : `567890`
    },

    misFatos:function(){
        console.log(`mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    },

    saludar() {
        console.log(`hola mi nombre es ${alumno.nombre}`)
    },

    getDomicilio() {
        return this.domicilio;
    }
}

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let carro = new auto("chrevrolet", "spark", 2013);

class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }

    res(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA - this.valueB
    }

    mul(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA * this.valueB
    }

    div(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA / this.valueB
    }
}

calculadora = new calculator() //creamos objeto
console.log(calculadora instanceof calculator) //verifica si es la instancia de un tipo de dato

const listaDeCompras = {
    manzana:5,
    pera:3,
    naranja:2,
    uva:1
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

function manejo(err, data) {
    if (err) {
        console.error(err);
    } else {
        data = data * 5;
        console.log(data);
    }
}

let funcionAsicrona = function(callBack) {
    setTimeout(() => {
        try {
            let a = 5 * 5;
            //throw new Error("Error en la funcion asincrona");
            callBack(null, a);
        }
        catch (err) {
            callBack(err);
        }
    }, 3000)
}

funcionAsicrona(manejo);