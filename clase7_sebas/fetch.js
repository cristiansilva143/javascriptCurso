/* API Fetch
fetch("url" ó Request)
Request
Response
FetchEvent
	"fetch"
*/
// Crear una aplicación con tres botones. Cada boton debe cargar un
// archivo html distinto en la página mediante fetch
document.querySelectorAll("button").forEach(boton => {
	boton.addEventListener("click", e => {
		const url = e.target.innerHTML.split(" ")[1] + ".html";
		console.log(new Request(url));
		/*
		¿Cómo realizar una petición con fetch (Request)?
		1) "url"
		2) "url", {method: "put"}
		3) Request
		*/
		fetch(url, {method: "post"})
		.then(response => response.text())
		.then(texto => document.querySelector("#contenedor").innerHTML = texto)
		.catch(err => console.log(err));
	});
})