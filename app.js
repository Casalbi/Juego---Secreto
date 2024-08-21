
let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto)


//DOM (Document Object Model)objeto que nos permite conectarnos con html

function asignarTextoElemento(elemento, texto) { //Esta función solo ejecuta una acción
    let elementoHTML = document.querySelector(elemento);
    //documen es un puente que permite conectar html con java script y este puente me permite trabajar con distintos métodos
    //query selector donde yo le digo a los elementos que hay en html, le doy un nombre (en este caso el nombre de la etiqueta h1)
    //y yo atribuyo h1 a varialet titulo = document.querySelector("h1");ble titulo para tratarlo como objeto
    elementoHTML.innerHTML = texto;
}
//PARÁMETRO (Forma en la que comportamiento de función se va a modificar de acuerdo a parametro que reciba)
//se definen 2 parametros _(elemento, texto)que recibe función elemento-elemento html que se quiere modificar y texto-

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
    
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
        //removerdisabled de boton "nuevo juego
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        //Usuario no acertó
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();

    }
    return;
    //INPUT EN HTML REPRESENTA A CAJITA BLANCA
    //cuando hay mas de 2 cajitas blancas para datos se identifican con "id en html"y se usa document.getelementbyid
}
//FUNCIÓN. encapsulamiento de una acción que quiero que haga (VALIDAR INTENTO USUARIO)

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";

}



//función para generar NÚMERO ALEATORIO?
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {

    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        //retornar significa que cuendo se genere funcion numeroSecreto nos va a retornar un valor;
    }
        
    
    }

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);

//HOISTING (Hacer el movimiento de las variables para que queden al inicio)
//El hacer nuestras funciones mas eficientes y más utilizables a la larga nos va a ayudar para ser mas eficientes
 //generar no aleatorio
    numeroSecreto = generarNumeroSecreto();
 //deshabilitar el boton de nuevo juego
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //inicializar el no de intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();


