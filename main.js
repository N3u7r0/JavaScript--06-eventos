
console.log (document.body);
let cards = document.getElementsByClassName("card")
console.log(cards);
alert("Igresa el nombre correcto de la marca de los autos en pantalla");

/*TOYOTA*/
let btnToyotaUno = document.getElementById("btn__Toyota__Uno");
btnToyotaUno.addEventListener("click", respuestaToyotaUno);
function respuestaToyotaUno() {
    console.log("Respuesta correcta");
    alert("!!!Correcto!!!");
}
let btnToyotaDos = document.getElementById("btn__Toyota__Dos");
btnToyotaDos.addEventListener("click", respuestaToyotaDos);
function respuestaToyotaDos() {
    console.log("Respuesta incorrecta");
    alert("!!!incorrecto!!!, es marca TOYOTA");
}
let btnToyotaTres = document.getElementById("btn__Toyota__Tres");
btnToyotaTres.addEventListener("click", respuestaToyotaTres);
function respuestaToyotaTres() {
    console.log("Respuesta incorrecta");
    alert("!!!incorrecto!!!, es marca TOYOTA")
}
/*NISSAN*/
let btnNissanUno = document.getElementById("btn__Nissan__Uno");
btnNissanUno.addEventListener("click", respuestaNissanUno);
function respuestaNissanUno() {
    console.log("Respuesta incorrecta");
    alert("!!!Incorrecto!!!, es un NISSAN");
}
let btnNissanDos = document.getElementById("btn__Nissan__Dos");
btnNissanDos.addEventListener("click", respuestaNissanDos);
function respuestaNissanDos() {
    console.log("Respuesta correcta");
    alert("!!!Correcto!!!");
}
let btnNissanTres = document.getElementById("btn__Nissan__Tres");
btnNissanTres.addEventListener("click", respuestaNissanTres);
function respuestaNissanTres() {
    console.log("Respuesta incorrecta");
    alert("!!!incorrecto!!!, es un NISSAN");
}

/*Subaru*/
let btnSubaruUno = document.getElementById("btn__Subaru__Uno");
btnSubaruUno.addEventListener("click", respuestaSubaruUno);
function respuestaSubaruUno() {
    console.log("Respuesta incorrecta");
    alert("!!!Incorrecto!!!, es un SUBARU!");
}
let btnSubaruDos = document.getElementById("btn__Subaru__Dos");
btnSubaruDos.addEventListener("click", respuestaSubaruDos);
function respuestaSubaruDos() {
    console.log("Respuesta incorrecta");
    alert("!!!Incorrecto!!!, es un SUBARU...");
}
let btnSubaruTres = document.getElementById("btn__Subaru__Tres");
btnSubaruTres.addEventListener("click", respuestaSubaruTres);
function respuestaSubaruTres() {
    console.log("Respuesta correcta");
    alert("!!!correcto!!");
}
