let enviar = false;

function requeridos(elementos){
	elementos.forEach(elemento => {
		document.querySelector(elemento.id).addEventListener("blur", e => {
			e.preventDefault();
			const val = e.target.value;
			if(val.length <= 0 ) {
				if(e.target.classList.contains("correcto")) {
					e.target.classList.remove("correcto");
				}
				e.target.classList.add("error");
				document.querySelector(elemento.msj).style = "color: red;";
				document.querySelector(elemento.msj).innerHTML = "* Es obligatorio";
			} else {
				if(e.target.classList.contains("error")) 
					e.target.classList.remove("error");
				e.target.classList.add("correcto");
				document.querySelector(elemento.msj).style = "color: green;";
				document.querySelector(elemento.msj).innerHTML = "*";
			}
		});
	});
}

function cuit(campos) {
	campos.forEach(elemento => {
		document.querySelector(elemento.id).addEventListener("blur", e => {
			const val = e.target.value;
			if(!/\d\d[-]\d\d\d\d\d\d\d\d[-]\d/.test(val)) {
				if(e.target.classList.contains("correcto")) {
					e.target.classList.remove("correcto");
				}
				e.target.classList.add("error");
				document.querySelector(elemento.msj).style = "color: red;";
				document.querySelector(elemento.msj).innerHTML = "* Formato incorrecto: 99-99999999-9";
			} else {
				if(e.target.classList.contains("error")) 
					e.target.classList.remove("error");
				e.target.classList.add("correcto");
				document.querySelector(elemento.msj).style = "color: green;";
				document.querySelector(elemento.msj).innerHTML = "*";
			}
		});
	});
}

requeridos([
	{id: '#txtNomApp', msj: '#errNomApp'},
	{id: '#txtEmail', msj: '#errEmail'},
	{id: '#txtReemail', msj: '#errReemail'}
]);

cuit([
	{id: '#txtCUIT', msj: '#errCUIT'}
]);


/*
document.querySelector("#formulario").addEventListener("submit", evt => {
	evt.preventDefault();
	if(enviar) {
		document.querySelector("#formulario").submit();
	}
	console.log("Enviando formulario");
});
*/