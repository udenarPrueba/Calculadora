//Función Masa-Sebastian
let gramos = document.getElementById("resGramos");
let kilo = document.querySelector('#kilo');

kilo.addEventListener('keyup', () => {
    let calculo = kilo.value * 1000
    gramos.value = calculo;
});
console.log(kilo);
console.log(gramos);