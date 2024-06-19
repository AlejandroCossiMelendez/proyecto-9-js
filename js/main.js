const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
// App Js 1
function determinarCategoriaEdad() {
    // Obtener el valor de la edad ingresada por el usuario
    const edad = parseInt(document.getElementById("edad").value);

    // Determinar la categoria de edad de la persona
    if (!isNaN(edad)) {
        if (edad <= 12) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-success" role="alert"><img src="img/hijo.png"> Eres un niño <img src="img/hijo.png"></div>';
        } else if (edad > 12 && edad <= 40) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-info" role="alert"><img src="img/hombre.png"> Eres un joven <img src="img/hombre.png"></div>';
        } else if (edad > 40 && edad <= 60) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-warning" role="alert"><img src="img/jefe.png"> Eres un adulto <img src="img/jefe.png"></div>';
        } else {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-danger" role="alert"><img src="img/anciano.png"> Eres un adulto mayor <img src="img/anciano.png"></div>';
        }
    } else {
        document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-danger" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Por favor, ingrese un numero entero valido para la edad. <i class="bi bi-exclamation-triangle-fill"></i></div>';
    }
}
// App Js 2
function obtenerPesoEstaturaEstimados() {
    // Obtener el valor del sexo seleccionado
    const sexo = document.getElementById("sexo").value;

    // Obtener el valor de la edad ingresada por el usuario
    const edad = parseInt(document.getElementById("edadPesoEstatura").value);

    // Validar que la edad ingresada sea un número
    if (isNaN(edad)) {
        document.getElementById("obtenerPesoEstaturaEstimados").innerHTML = '<div class="alert alert-danger" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Por favor, ingrese un valor entero válido para la edad. <i class="bi bi-exclamation-triangle-fill"></i></div>';
        return;
    }

    // Determinar el peso y la estatura estimados según el sexo y la edad
    let genero, peso_estimado, estatura_estimada;
    if (sexo === "H") {
        if (11 <= edad && edad <= 14) {
            genero = "un Hombre";
            peso_estimado = 45;
            estatura_estimada = 157;
        } else if (15 <= edad && edad <= 18) {
            genero = "un Hombre";
            peso_estimado = 66;
            estatura_estimada = 176;
        } else if (19 <= edad && edad <= 24) {
            genero = "un Hombre";
            peso_estimado = 72;
            estatura_estimada = 177;
        } else if (25 <= edad && edad <= 50) {
            genero = "un Hombre";
            peso_estimado = 79;
            estatura_estimada = 176;
        } else {
            genero = "un Hombre";
            peso_estimado = 77;
            estatura_estimada = 173;
        }
    } else {
        if (11 <= edad && edad <= 14) {
            genero = "una Mujer";
            peso_estimado = 46;
            estatura_estimada = 157;
        } else if (15 <= edad && edad <= 18) {
            genero = "una Mujer";
            peso_estimado = 55;
            estatura_estimada = 163;
        } else if (19 <= edad && edad <= 24) {
            genero = "una Mujer";
            peso_estimado = 58;
            estatura_estimada = 164;
        } else if (25 <= edad && edad <= 50) {
            genero = "una Mujer";
            peso_estimado = 63;
            estatura_estimada = 163;
        } else {
            genero = "una Mujer";
            peso_estimado = 65;
            estatura_estimada = 160;
        }
    }

    // Mostrar el peso y la estatura estimados
    document.getElementById("obtenerPesoEstaturaEstimados").innerHTML = '<div class="alert alert-success" role="alert"><i class="bi bi-patch-check-fill"></i> Para ' + genero + ' de ' + edad + ' años, el peso estimado es de ' + peso_estimado + ' kg y la estatura estimada es de ' + estatura_estimada + ' cm. <i class="bi bi-patch-check-fill"></i></div>';
}
// App Js 3
function calcularIMCC() {
    // Obtener los valores del formulario
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);

    // Verificar que los valores sean numericos y mayores que cero
    if (!isNaN(peso) && !isNaN(estatura) && peso > 0 && estatura > 0) {
        // Calcular el indice de masa corporal (IMC)
        let imc = peso / ((estatura/100) * (estatura/100));

        // Determinar la categoria de peso segun el IMC
        if (imc < 18.5) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-warning" role="alert"><img src="img/anorexia.png"> Usted tiene bajo peso <img src="img/anorexia.png"></div>';
        } else if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-success" role="alert"><img src="img/peso.png"> Usted tiene un peso normal <img src="img/peso.png"></div>';
        } else if (imc >= 25 && imc <= 29.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-warning" role="alert"><img src="img/cuerpo.png"> Usted tiene sobrepeso <img src="img/cuerpo.png"></div>';
        } else if (imc >= 30 && imc <= 34.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><img src="img/obesidad.png"> Usted tiene obesidad tipo I <img src="img/obesidad.png"></div>';
        } else if (imc >= 35 && imc <= 39.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><img src="img/obesidad-1.png"> Usted tiene obesidad tipo II <img src="img/obesidad-1.png"></div>';
        } else if (imc >= 40 && imc <= 49.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><img src="img/obesidad-2.png"> Usted tiene obesidad tipo III <img src="img/obesidad-2.png"></div>';
        } else {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><img src="img/obesidad-3.png"> Usted tiene obesidad tipo IV <img src="img/obesidad-3.png"></div>';
        }
    } else {
        // Mostrar mensaje de error si los valores no son validos
        document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Por favor, ingrese valores numericos validos para el peso y la estatura. <i class="bi bi-exclamation-triangle-fill"></i></div>';
    }
}
// App Js 4
function calcularPresionArterial() {
    // Obtener el valor de la presion arterial sistolica desde el formulario
    const presionSistolica = parseInt(document.getElementById("presionSistolica").value);

    // Verificar si se ingreso un valor valido
    if (!isNaN(presionSistolica)) {
        // Determinar la categoria de presion arterial
        if (presionSistolica < 90) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-success" role="alert"><img src="img/atmosferico.png"> Su presion arterial es baja <img src="img/atmosferico.png"></div>';
        } else if (presionSistolica < 120) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-info" role="alert"><img src="img/crema.png"> Su presion arterial es normal <img src="img/crema.png"></div>';
        } else if (presionSistolica >= 120 && presionSistolica <= 139) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-warning" role="alert"><img src="img/usuario.png"> Su presion arterial esta en prehipertension <img src="img/usuario.png"></div>';
        } else if (presionSistolica >= 140 && presionSistolica <= 159) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-danger" role="alert"><img src="img/exclamacion.png"> Su presion arterial es Alta: hipertension Fase 1 <img src="img/exclamacion.png"></div>';
        } else {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-danger" role="alert"><img src="img/advertencia.png"> Su presion arterial es Alta: hipertension Fase 2 <img src="img/advertencia.png"></div>';
        }
    } else {
        // Mostrar mensaje de error si el valor ingresado no es valido
        document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-danger" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Por favor, ingrese un valor entero valido para la presion arterial. <i class="bi bi-exclamation-triangle-fill"></i></div>';
    }
}