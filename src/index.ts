let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let dato4 = document.getElementById("dato4");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let rotulo4 = document.getElementById("rotulo4");

rotulo1.innerHTML = "Ingrese tiempo vuelta 1";
rotulo2.innerHTML = "Ingrese tiempo vuelta 2";
rotulo3.innerHTML = "Ingrese tiempo vuelta 3";
rotulo4.innerHTML = "Ingrese tiempo vuelta 4";

btnEnviar.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);

  let tiempototal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  let promediodevueltas: number = (vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4;

  console.log("El tiempo total fue de", tiempototal, "minutos");
  console.log("El promedio fue de", promediodevueltas, "minutos por vuelta");
});
