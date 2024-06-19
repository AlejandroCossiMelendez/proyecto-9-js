// Agregar un evento de escucha para el envío del formulario
document.getElementById('FormularioCalc').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el comportamiento de envío predeterminado del formulario

  // Obtención de valores de los campos de entrada del formulario
  const sexoPesoIdeal = document.getElementById("sexoPesoIdeal").value;
  const edadPesoIdeal = parseInt(document.getElementById("edadPesoIdeal").value);
  const pesoIdeal = parseFloat(document.getElementById("pesoIdeal").value);
  const alturaIdeal = parseFloat(document.getElementById("alturaIdeal").value);

  // Verificación si alguno de los valores no es un número
  if (isNaN(edadPesoIdeal) || isNaN(pesoIdeal) || isNaN(alturaIdeal)) {
      // Mostrar un mensaje de error si alguno de los valores no es un número
      document.getElementById("resultadoPesoIdeal").innerHTML = '<div class="alert alert-danger" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Por favor, llene todos los datos del formulario. <i class="bi bi-exclamation-triangle-fill"></i></div>';
      return;
  }

  // Verificar si se ha seleccionado el sexo correctamente
  if (sexoPesoIdeal !== "hombre" && sexoPesoIdeal !== "mujer") {
      document.getElementById("resultadoPesoIdeal").innerHTML = '<div class="alert alert-danger" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Por favor, seleccione el sexo. <i class="bi bi-exclamation-triangle-fill"></i></div>';
      return;
  }

  // Calcular el IMC utilizando la función proporcionada calcularIMC
  const imcResultado = calcularIMC(pesoIdeal, alturaIdeal);

  // Calcular el peso ideal utilizando la fórmula de Lorentz
  const pesoIdealResultado = calcularPesoIdeal(sexoPesoIdeal, alturaIdeal);
  const calcularDiferencia = pesoIdeal - pesoIdealResultado;

  let mensaje;
  if (calcularDiferencia > 0) {
      mensaje = "perder";
  } else {
      mensaje = "ganar";
  }

  // Mostrar todos los resultados calculados
  document.getElementById("resultadoPesoIdeal").innerHTML = "<div class='alert alert-info' role='alert'><p>Edad: " + edadPesoIdeal + " años</p>" + "<p>Peso Actual: " + pesoIdeal + " kg</p>" + "<p>Altura: " + alturaIdeal + " cm</p>" + "<p>IMC: <b>" + imcResultado + "</b></p>" + "<p>Peso Ideal: <span class='badge text-bg-success'>" + pesoIdealResultado.toFixed(2) + " kg </span></p>" + "<p>Deberías " + mensaje + ": <span class='badge text-bg-success'>" + Math.abs(calcularDiferencia).toFixed(2) + " kg</span></p>" + "</div>";
  
  // Función para calcular el IMC
  function calcularIMC(peso, altura) {
      if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
          let imc = peso / ((altura/100) * (altura/100));
          let resultadoImc = "";

          if (imc < 18.5) {
              resultadoImc = "<span class='badge text-bg-warning'>Bajo Peso</span>";
          } else if (imc >= 18.5 && imc <= 24.9) {
              resultadoImc = "<span class='badge text-bg-success'>Peso Normal</span>";
          } else if (imc >= 25 && imc <= 29.9) {
              resultadoImc = "<span class='badge text-bg-warning'>Sobrepeso</span>";
          } else if (imc >= 30 && imc <= 34.9) {
              resultadoImc = "<span class='badge text-bg-danger'>Obesidad I</span>";
          } else if (imc >= 35 && imc <= 39.9) {
              resultadoImc = "<span class='badge text-bg-danger'>Obesidad II</span>";
          } else if (imc >= 40) {
              resultadoImc = "<span class='badge text-bg-danger'>Obesidad III</span>";
          }

          return imc.toFixed(2) + " " + resultadoImc;
      }
  }

  // Función para calcular el peso ideal basado en el sexo y altura
  function calcularPesoIdeal(sexo, altura) {
      let pesoIdeal;
      if (sexo === "hombre") {
          pesoIdeal = (altura - 100) - ((altura - 150) / 4);
      } else if (sexo === "mujer") {
          pesoIdeal = (altura - 100) - ((altura - 150) / 2);
      }
      return pesoIdeal;
  }
});
