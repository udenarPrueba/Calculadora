let resultado  = document.getElementById("res");
let valor = document.querySelector('#valor');

valor.addEventListener('keyup',()=>{
    let calculo = (valor.value * 100) 
    resultado.value=calculo;
}); 
//kevin paz