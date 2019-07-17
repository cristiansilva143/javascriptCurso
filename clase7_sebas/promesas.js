const miPromesa = new Promise(
			(resolver, rechazar) => {
				let respuesta = prompt("¿Por qué los objetos caen hacia abajo si no se les ejerce ninguna presión o fuerza sobre ellos? A) Por la ley de gravedad; B) Por la ley de acción-reacción; C) Porque comieron mucho");
				if(respuesta == "A") {
					resolver();
				} else {
					rechazar();
				}
			}
		);

		miPromesa
		.then(function(){
			// Correcto
			alert("BIEEEEN");
		})
		.catch(function(){
			//Incorrecto
			console.log("ERROR");
		});

		//var c = "Carlos".toLowerCase().split("a");



		/// Crear una función que haga una pregunta al usuario.
		/// Si la pregunta se contesta bien, ejecutará un callback.
		/// Pero si la pregunta se contesta mal, ejecutará otro callback distinto.
		/*
		function preguntar(correcta, incorrecta) {
			let respuesta = prompt("¿Por qué los objetos caen hacia abajo si no se les ejerce ninguna presión o fuerza sobre ellos? A) Por la ley de gravedad; B) Por la ley de acción-reacción; C) Porque comieron mucho");
			if(respuesta == "A") {
				correcta();
			} else {
				incorrecta();
			}
		}

		preguntar(function(){
			// Correcto
			alert("BIEEEEN");
		}, function(){
			//Incorrecto
			console.log("ERROR");
		});
		*/