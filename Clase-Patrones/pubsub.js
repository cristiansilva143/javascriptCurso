// 2. Patrón Publicación-Subscripción

const usuario = new EventTarget();

// SUBSCRIBIR al evento rebolearMarcador
usuario.addEventListener("rebolearMarcador", () => {
	console.log("Saludando...");
});
usuario.addEventListener("rebolearMarcador", () => {
	console.log("Saltando...");
});

// PUBLICAR el evento rebolearMarcador
usuario.dispatchEvent(new Event("rebolearMarcador"));


//###ESCUCHAR EL EVENTO => SUBSCRIBIRME al evento
// addEventListener(type, callback, capturing)
// removeEventListener(type)
//	Cuando se dispare "rebolearMarcador", saludare
//	Cuando se dispare "rebolearMarcador", saltare

//###DISPARAR EL EVENTO => PUBLICAR el evento
// dispatchEvent(Event)
//	Disparar "rebolearMarcador"



////////////////////////////////////////////////////////



/// Registrar (Subscribir) | Mostrar (Publicar)
class Log {
	constructor() {
		this.logs = [];
	}

	// Subscribir
	registrar(mensaje) {
		this.logs.push(mensaje);
	}

	// Publicar
	mostrar() {
		this.logs.forEach(mensaje => {
			console.log(mensaje);
		})
	}

	// ¿Hay subscripciones?
	hayRegistros() {
		if(this.logs.length == 0) return false;
		else return true;
	}

	limpiar() {
		console.log("ds")
		this.logs = [];
	}
};

const lg = new Log();

document.querySelector("#txtNombre").addEventListener("blur", e => {
	if(e.target.value.length == 0) {
		lg.registrar("El nombre esta vacio");
	}
});

document.querySelector("#txtApellido").addEventListener("blur", e => {
	if(e.target.value.length == 0) {
		lg.registrar("El apellido esta vacio");
	}
});

document.querySelector("button").addEventListener("click", e => {
	if(lg.hayRegistros()) {
		lg.mostrar();
	} else {
		console.log("CORRECTO");
		lg.limpiar();
	}
});