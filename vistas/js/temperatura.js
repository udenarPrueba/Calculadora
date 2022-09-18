// Jeferson Temperatura

let resultado  = document.getElementById("res");
let valor = document.querySelector('#valor');

valor.addEventListener('keyup',()=>{
    let calculo = (valor.value * 9/5) + 32
    resultado.value=calculo;
}); 
