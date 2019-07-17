const txtUsuario = document.querySelector("#txtUsuario");
const cboPosts = document.querySelector("#cboPosts");

const urlUsuarios = "https://jsonplaceholder.typicode.com/users";

txtUsuario.addEventListener("input", e => {
	const val = e.target.value;
	let userId = 0;

	fetch(urlUsuarios)
	.then(r => r.json())
	.then(json => {
		json.forEach(usuario => {
			if(usuario.name == val) {
				userId = usuario.id;
			}
		});
		return fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId);
	})
	.then(response => response.json())
	.then(posts => {
		cboPosts.innerHTML = "";
		posts.forEach(post => {
			let op = document.createElement("option");
			op.value = post.id;
			op.innerHTML = post.title;
			cboPosts.appendChild(op);
		});
	})
	.catch(err => console.log(err));
});