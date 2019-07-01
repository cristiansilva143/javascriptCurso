function requeridos(elementos){
	elementos.forEach(elemento => {
		document.querySelector(elemento.id).addEventListener("blur", e => {
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


requeridos([
	{id: '#txtNomApp', msj: '#errNomApp'},
	{id: '#txtEmpresa', msj: '#errEmpresa'},
	{id: '#txtEmail', msj: '#errEmail'},
	{id: '#txtReemail', msj: '#errReemail'}
]);