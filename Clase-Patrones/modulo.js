// 1. Patrón Módulo / Revelador
	/*
	Problema: ¿Cómo puedo encapsular determinadas propiedades o funciones de un objeto?
	Solución: Utilizar el patrón módulo. Distinguir propiedades y funciones que queremos que sean accesibles desde el resto del programa de las que no (públicas vs privadas). Una forma es con una función autoinvocada. Otra forma es con clases.
	*/	
	let persona = (function(){
		// Esta función es inaccesible para el resto del programa. Es "PRIVADA"
		function mensaje() {
			return "Hola mundo desde la funcion mensaje()";
		}
		// En este return, tendré el objeto resultante CON TODAS LAS PROPIEDADES "PÚBLICAS"
		return {
			saludo: mensaje()
		};
	})();
	let cliente = (function(){

		function calcularCUIT(dni, genero) {
			let cuit = "", primerDigito;
			if(genero == "M")
				primerDigito = "20"
			else 
				primerDigito = "27"
			cuit += primerDigito + "-"+ dni + "-" + "1";
			return cuit;
		}

		return {
			nombre: "Andrea",
			dni: "27589632",
			cuit: calcularCUIT("27589632", "F")
		};
	})();
	function Cliente() {
		function calcularCUIT(dni, genero) {
			let cuit = "", primerDigito;
			if(genero == "M")
				primerDigito = "20"
			else 
				primerDigito = "27"
			cuit += primerDigito + "-"+ dni + "-" + "1";
			return cuit;
		}

		this.nombre = "Andrea";
		this.dni = "27589632";
		this.cuit = calcularCUIT("27589632", "F");
	}
	console.log("Funcion constructora: ", new Cliente())