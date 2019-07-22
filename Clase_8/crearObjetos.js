// ¿Cómo crear objetos?

// 1) Asignado a una variable
const cliente = {
    id: 1,
    nombre: "Carlos Villanueva"
};

// 2) Anónimo
console.log({
    id: 1,
    nombre: "Carlos Villanueva"
});

// 3) Con __proto__
const cliente = {
    id: 1
};
const persona = {
    nombre: "Carlos Villanueva"
};
miObj.__proto__ = persona;

// 4) Con Object.create()
const persona = {
    nombre: "Carlos Villanueva"
};
const cliente = Object.create(persona);
cliente.id = 1;

// 5) Con Funciones Constructoras
function Cliente(msj) {
    this.id = 10;
    this.msj = msj;
    this.mostrarMensaje = () => {
        console.log(this.msj);
    }
}
const cli = new Cliente("Adios");
console.log(cli);
cli.mostrarMensaje();


// 6) Con Funciones Constructoras (y un prototipo)

function Cliente(msj) {
    this.id = 10;
    this.msj = msj;
    const pepe = () => {
        console.log("pepe");
    };
    this.mostrarMensaje = () => {
       pepe();
    };
}
Cliente.prototype = Array.prototype;
const cli = new Cliente("Adios");
console.log(cli);
cli.mostrarMensaje();

// 7) Con Getters y Setters
const venta = {
    cli: {}
}

const cliente = {
    gen: 20,
    dni: "6986325",
    ver: 1,

    get cuit() {
        return this.gen+"-"+this.dni+"-"+this.ver;
    },
    set cuit(val) {
        const datos = val.split("-");
        this.gen = datos[0];
        this.dni = datos[1];
        this.ver = datos[2];
    }
};

console.log(cliente.cuit);
cliente.cuit = "27-96858926-3";
console.log(cliente.cuit);

venta.cli = cliente;
console.log(venta);