let numero1 = 0;
let numero2 = 0;
let operador = 0;
let operacion;
let respuesta = document.getElementById("igual");
let resultado = document.getElementById("resultado");
let reset = document.getElementById("reset");
let borrar = document.getElementById("borrar");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");
let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let puntoDecimal = document.getElementById("puntoDecimal");


function printOfPane(numero) {
    numero.addEventListener("click", () => {
        resultado.textContent = resultado.textContent + numero.textContent;
    });
}

printOfPane(cero);
printOfPane(uno);
printOfPane(dos);
printOfPane(tres);
printOfPane(cuatro);
printOfPane(cinco);
printOfPane(seis);
printOfPane(siete);
printOfPane(ocho);
printOfPane(nueve);

borrar.addEventListener("click", borrarUnElemento);

function borrarUnElemento() {
    let contenidoPane = resultado.textContent;
    let eliminarUltimoCaracter = contenidoPane.substring(0, contenidoPane.length - 1);
    resultado.textContent = eliminarUltimoCaracter;
}

reset.addEventListener("click", resetear);


function resetear() {
    resultado.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operador = 0;
}

sumar.addEventListener("click", function (){
    numero1 = resultado.textContent;
    operador = "+";
    limpiar();
})
restar.addEventListener("click", function (){
    numero1 = resultado.textContent;
    operador = "-";
    limpiar();
});
multiplicar.addEventListener("click", function (){
    numero1 = resultado.textContent;
    operador = "*";
    limpiar();
});
dividir.addEventListener("click", function (){
    numero1 = resultado.textContent;
    operador = "/";
    limpiar();
});


respuesta.addEventListener("click", function () {
    numero2 = resultado.textContent;
    resolver(numero1, numero2);
})

function limpiar(){
    resultado.textContent= "";
}

function resolver(num, num2) {
    switch (operador) {
        case "+":
            operacion = parseFloat(num) + parseFloat(num2);
            break;
        case "-":
            operacion = parseFloat(num) - parseFloat(num2);
            break;
        case "*":
            operacion = parseFloat(num) * parseFloat(num2);
            break;
        case "/":
            operacion = parseFloat(num) / parseFloat(num2); 
            break;   
        
    }

    resultado.textContent= operacion;

}















// function suma(num1, num2) {
//     return num1 + num2;
// }

// function resta() {

// }

// function multiplicacion() {
//     return num1 + num2
// }

// function division() {}

// function porcentaje() {

// }

// function reset() {

// }