document.querySelectorAll(".boton-ajax").forEach(boton => {
  boton.addEventListener("click", e => {
     const fuente = e.target.dataset.fuente;
     const destino = e.target.dataset.destino;

     const peticion = new XMLHttpRequest();
     peticion.responseType = "text";

     peticion.open("GET", fuente);
     peticion.send();
     peticion.addEventListener("load", () => {
        document.querySelector(destino).innerHTML = peticion.response;
    });
 });
});

document.querySelectorAll(".btn-img").forEach(elemento => {
    elemento.addEventListener("click", e => {
        const xhr = new XMLHttpRequest();
        const id = e.target.dataset.id;
        const img = e.target.dataset.img;
        xhr.responseType = "blob";
        xhr.open("GET", img);
        xhr.send();
        xhr.addEventListener("progress", e => {
            if(e.loaded == e.total) {
                document.querySelector("#barra").style = "display: none;"
            } else if(e.lengthComputable) {
                const porc = (e.loaded * 100) / e.total;
                document.querySelector("#barra").style = "display: block;"
                document.querySelector("#barra").value = porc;
            }
        });
        xhr.addEventListener("load", () => {
            document.querySelector(`#${id}`).src = URL.createObjectURL(xhr.response);
        }); 
    });
});