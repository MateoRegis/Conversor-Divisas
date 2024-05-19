const tasasConversion = {
  usd: 1000,
  eur: 1020,
};

function inicializarEventos() {
  const formularioCalculo = document.getElementById("formulario-calculo");
  const formularioAgregarMoneda = document.getElementById("formulario-agregar-moneda");

  formularioCalculo.addEventListener("submit", manejarCalculo);
  formularioAgregarMoneda.addEventListener("submit", manejarAgregarMoneda);
}

function manejarCalculo(event) {
  event.preventDefault();

  const cantidadPesos = parseFloat(document.getElementById("cantidad-pesos").value);
  const monedaExtranjera = document.getElementById("moneda-extranjera").value;

  if (isNaN(cantidadPesos) || !monedaExtranjera) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const tasaConversion = tasasConversion[monedaExtranjera];
  const resultado = cantidadPesos / tasaConversion;

  mostrarResultado(`El resultado es ${resultado.toFixed(2)} ${monedaExtranjera.toUpperCase()}`);
}

function manejarAgregarMoneda(event) {
  event.preventDefault();

  const nombreMoneda = document.getElementById("nombre-moneda").value.trim();
  const costoConversion = parseFloat(document.getElementById("costo-conversion").value);

  if (!nombreMoneda || isNaN(costoConversion)) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  agregarOpcionMoneda(nombreMoneda, costoConversion);
  alert("Nueva moneda agregada exitosamente.");
  event.target.reset();
}

function mostrarResultado(mensaje) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = mensaje;
}

function agregarOpcionMoneda(nombre, costo) {
  const monedaExtranjeraSelect = document.getElementById("moneda-extranjera");
  const nuevaOpcion = document.createElement("option");
  nuevaOpcion.value = nombre.toLowerCase();
  nuevaOpcion.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  monedaExtranjeraSelect.appendChild(nuevaOpcion);

  tasasConversion[nuevaOpcion.value] = costo;
}

document.addEventListener("DOMContentLoaded", inicializarEventos);
