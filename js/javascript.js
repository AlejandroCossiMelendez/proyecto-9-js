document.getElementById('FormularioCalc').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores
    const sexoPesoIdeal = document.getElementById("sexoPesoIdeal").value;
    const edadPesoIdeal = parseInt(document.getElementById("edadPesoIdeal").value);
    const pesoIdeal = parseFloat(document.getElementById("pesoIdeal").value);
    const alturaIdeal = parseFloat(document.getElementById("alturaIdeal").value);

    // Calcular IMC utilizando la función proporcionada
    const imcResultado = calcularIMC(pesoIdeal, alturaIdeal);

    // Calcular peso ideal segun la formula de Lorentz
    const pesoIdealResultado = calcularPesoIdeal(sexoPesoIdeal, alturaIdeal);
    const calcularDiferencia = pesoIdeal - pesoIdealResultado;

    let mensaje;
    if (calcularDiferencia > 0) {
        mensaje = "perder";
    } else {
        mensaje = "ganar";
    }

    // Mostrar todos los resultados
    document.getElementById("resultadoPesoIdeal").innerHTML = "<div class='alert alert-primary text-black' role='alert'><p>Edad: " + edadPesoIdeal + " años</p>" + "<p>Peso Actual: " + pesoIdeal + " kg</p>" + "<p>Altura: " + alturaIdeal + " cm</p>" + "<p>IMC: " + imcResultado + "</p>" + "<p>Peso Ideal: <span class='badge text-bg-success'>" + pesoIdealResultado + " kg </span></p>" + "<p>Deberias " + mensaje + ": <span class='badge text-bg-success'>" + calcularDiferencia + " kg</span</p>" + "</div>";
});

    function calcularIMC(pesoIdeal, estatura) {
      if (!isNaN(pesoIdeal) && !isNaN(estatura) && pesoIdeal > 0 && estatura > 0) {
        let imcVar = pesoIdeal / (estatura * estatura / 10000);
        let resultadoImc = "";

        if (imcVar < 18.5) {
          resultadoImc = "<span class='badge text-bg-warning'>Bajo Peso</span>";
        } else if (imcVar >= 18.5 && imcVar <= 24.9) {
          resultadoImc = "<span class='badge text-bg-success'>Peso Normal</span>";
        } else if (imcVar >= 25 && imcVar <= 29.9) {
          resultadoImc = "<span class='badge text-bg-warning'>Sobrepeso</span>";
        } else if (imcVar >= 30 && imcVar <= 34.9) {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad I</span>";
        } else if (imcVar >= 35 && imcVar <= 39.9) {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad II</span>";
        } else if (imcVar >= 40 && imcVar <= 49.9) {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad III</span>";
        } else {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad IV</span>";
        }


        return imcVar.toFixed(2) + " " + resultadoImc;
      }
    }

    function calcularPesoIdeal(sexoPesoIdeal, alturaIdeal) {
      let pesoIdeal;
      if (sexoPesoIdeal === "hombre") {
        pesoIdeal = (alturaIdeal - 100) - ((alturaIdeal - 150) / 4);
      } else if (sexoPesoIdeal === "mujer") {
        pesoIdeal = (alturaIdeal - 100) - ((alturaIdeal - 150) / 2);
      }
      return pesoIdeal;
    }