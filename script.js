/*
    ====================================================
    ================= CALCULATOR LOGIC =================
    ====================================================
*/


// obtener el elemento de resultado
let result = document.getElementById("result");

// Ingresar numeros por tecla presionada
function input(num) {
    let number = result.value;
    result.value = number + num;
}

// Lógica de la calculadora
function calc() {
    if (result.value != "") {
        let result2 = result.value;
        result.value = eval(result2)
    } else {
        alert("Erro! Adicione valores válidos.")
    }
}

// Botón de reinicio
function reset() {
    result.value = "";
}

// botón eliminar
function del() {
    let result2 = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

/*
    ====================================================
    =================== CAMBIAR TEMA ===================
    ====================================================
*/

// Todos los colores para diferentes temas
const theme = {
    defaul() {
        root.style.setProperty('--background', '#3a4764');
        root.style.setProperty('--background-dark', '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');

        root.style.setProperty('--key-color-top', '#ffffff');
        root.style.setProperty('--key-color-bottom', '#3a4764');
        root.style.setProperty('--key-background', '#eae3dc');
        root.style.setProperty('--key-background-dark', '#dfd9d2');
        root.style.setProperty('--key-shadow', '#b4a597');

        root.style.setProperty('--key-blue-background', '#637097');
        root.style.setProperty('--key-blue-shadow', '#404e72');

        root.style.setProperty('--key-red-background', '#d03f2f');
        root.style.setProperty('--key-red-shadow', '#93261a');
    },
    light() {
        root.style.setProperty('--background', '#e6e6e6');
        root.style.setProperty('--background-dark', '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');

        root.style.setProperty('--key-color-top', '#3d3d33');
        root.style.setProperty('--key-color-bottom', '#3d3d33');
        root.style.setProperty('--key-background', '#e5e4e0');
        root.style.setProperty('--key-background-dark', '#dfd9d2');
        root.style.setProperty('--key-shadow', '#b4a597');

        root.style.setProperty('--key-blue-background', '#388187');
        root.style.setProperty('--key-blue-shadow', '#1c6166');

        root.style.setProperty('--key-red-background', '#d03f2f');
        root.style.setProperty('--key-red-shadow', '#93261a');
    },
    dark() {
        root.style.setProperty('--background', '#17062a');
        root.style.setProperty('--background-dark', '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');

        root.style.setProperty('--key-color-top', '#f7de43');
        root.style.setProperty('--key-color-bottom', '#f7de43');
        root.style.setProperty('--key-background', '#331b4d');
        root.style.setProperty('--key-shadow', '#851c9c');

        root.style.setProperty('--key-blue-background', '#56077c');
        root.style.setProperty('--key-blue-shadow', '#851c9c');

        root.style.setProperty('--key-red-background', '#00decf');
        root.style.setProperty('--key-red-shadow', '#00decf');
    }
}

// Obtener el elemento raíz
var root = document.querySelector(':root');

// Comprobando la preferencia de temas del usuario
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// cambiando el tema con los resultados anteriores
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "3";
    theme.dark();
} else if (lightThemeMq.matches) {
    document.getElementById('btnTheme').value = "2";
    theme.light();
} else {
    document.getElementById('btnTheme').value = "1";
    theme.defaul();
}

// Crea una función para recibir el valor de entrada de rango
function myFunction_set(val) {
    // Crea una función para recibir el valor de entrada de rango
    document.getElementById('btnTheme').value = val;

    // cambiando el tema con los resultados anteriores
    if (val == 1) {
        theme.defaul();
    }

    else if (val == 2) {
        theme.light();
    }

    else {
        theme.dark();
    }

}



//MPasaje
function pascalABar() {
    //capturo los id de los botnes 
    const btnPascalBar = document.querySelector('#pascalBar')
    const btnMas = document.querySelector('#operandoMas')
    const btnMenos = document.querySelector('#operandoMenos')
    const btnsDiv = document.querySelector('#operandoDiv')
    const btnsMult = document.querySelector('#operandoMult')
    const btnsConvertir = document.querySelector('#convertir')
    const btnsoEquals = document.querySelector('#equals')

    let bandera = false

    //evento en el boton para hacer cambios en la interfaz
    btnPascalBar.addEventListener("click", () => {
        if (!bandera) {
            btnPascalBar.value = "Calculadora Normal";
            btnMas.style.display = 'none';
            btnMenos.style.display = 'none';
            btnsDiv.style.display = 'none';
            btnsMult.style.display = 'none';
            btnsoEquals.style.display = 'none';
            btnsConvertir.style.display = '';

            bandera = true;
            console.log(bandera);
        } else {
            btnMas.style.display = '';
            btnMenos.style.display = '';
            btnsDiv.style.display = '';
            btnsMult.style.display = '';
            btnsoEquals.style.display = '';
            btnsConvertir.style.display = 'none';

            btnPascalBar.value = "Calcular la Presion de Pascal a Bar ";
            bandera = false;
            console.log(bandera);
        }
    });

}
//funcion para hacer los calculos
function convertPascalBar() {
    if (result.value != "") {
        let result2 = result.value;
        result.value = eval(result2 / 100000)
    } else {
        alert("Erro! Adicione valores válidos.")
    }

}
pascalABar();
/* end */

// Jeferson Temperatura

let resultado = document.getElementById("res");
let valor = document.querySelector('#valor');

valor.addEventListener('keyup', () => {
    let calculo = (valor.value * 9 / 5) + 32
    resultado.value = calculo;
});