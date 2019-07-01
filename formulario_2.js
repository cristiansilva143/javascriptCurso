document.querySelector("#formulario").addEventListener("submit", e => {
	e.preventDefault();
	let enviar = true;

	// Obligatorios
	if(e.target[0].value.length <= 0 ||
		e.target[1].value.length <= 0 ||
		e.target[2].value.length <= 0 ||
		e.target[3].value.length <= 0 ) {
		enviar = false;
		console.log("Hay campos vacios");
	}

	// Formato del CUIT
	if(!/\d\d[-]\d\d\d\d\d\d\d\d[-]\d/.test(e.target[1].value)) {
		enviar = false;
		console.log("CUIT con formato incorrecto");
	}

	if(enviar) {
		document.querySelector("#formulario").submit();
	}
});