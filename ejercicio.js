// Diseñar un formulario que te permita crear un objeto persona
        // Cada campo del Form debe corresponder con una propiedad persona.
        // El objeto creado tendrá como prototipo Persona, cuyas propiedades
        // serán DNI (txt) y caminar (fn). Mostrar por consola al obj creado.
        const btnForm = document.querySelector("#btnForm");
        const inputs = document.querySelectorAll("#form input");
        let obj = {};
        btnForm.addEventListener("click", e => {
            obj.nombre = inputs[0].value;
            obj.apellido = inputs[1].value;
            obj.edad = inputs[2].value;
            obj.__proto__ = {
                dni: "",
                caminar: function () {
                    console.log("Caminando...");
                }
            };
            console.log(obj);
        });