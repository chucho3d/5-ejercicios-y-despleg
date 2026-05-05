import * as combine from "./combine.js";

const operacionSelect = document.getElementById("operacion");
const resultadosDiv = document.getElementById("resultados");
const testDiv = document.getElementById("testResultados"); // 🔥 NUEVO
const ejecutar = document.getElementById("ejecutar");
const btnTest = document.getElementById("testear");


// 🔹 EJECUTAR EJERCICIOS
function calcular() {
    try {
        const operacion = operacionSelect.value;

        if (operacion === "") {
            throw new Error("Selecciona una operación");
        }

        let resultado;

        switch (operacion) {
            case "eje16":
                resultado = combine.eje16.fnPromedioVector();
                break;

            case "eje17":
                resultado = combine.eje17.fnEliminarDuplicados();
                break;

            case "eje18":
                resultado = combine.eje18.fnOrdenarBurbuja();
                break;

            case "eje19":
                resultado = combine.eje19.fnProductoWhile();
                break;

            case "eje20":
                resultado = combine.eje20.fnContarVocales();
                break;

            default:
                throw new Error("Operación no válida");
        }

        mostrarResultado(resultado);

    } catch (error) {
        mostrarResultado(`Error: ${error.message}`, "error");
    }
}


// 🔹 EJECUTAR TEST
function ejecutarTest() {
    const operacion = operacionSelect.value;

    let mensaje = "";

    switch (operacion) {
        case "eje16":
            mensaje = testPromedio();
            break;

        case "eje17":
            mensaje = testDuplicados();
            break;

        case "eje18":
            mensaje = testOrdenar();
            break;

        case "eje19":
            mensaje = testProducto();
            break;

        case "eje20":
            mensaje = testVocales();
            break;

        default:
            mensaje = "Selecciona un ejercicio";
    }

    mostrarTest(mensaje); // 🔥 AQUÍ ESTÁ EL CAMBIO
}


// 🔹 TESTS

function testPromedio() {
    let r = combine.eje16.calculateAverage([2, 4, 6]);
    return r === 4 ? "✅ Promedio correcto" : "❌ Error en promedio";
}

function testDuplicados() {
    let r = combine.eje17.removeDuplicates([1,1,2,3]);
    return JSON.stringify(r) === JSON.stringify([1,2,3])
        ? "✅ Duplicados correcto"
        : "❌ Error en duplicados";
}

function testOrdenar() {
    let r = combine.eje18.bubbleSort([3,1,2]);
    return JSON.stringify(r) === JSON.stringify([1,2,3])
        ? "✅ Ordenamiento correcto"
        : "❌ Error en ordenamiento";
}

function testProducto() {
    let r = combine.eje19.analyzeArray([2,3,4], (a,b)=>a*b);
    return r === 24
        ? "✅ Producto correcto"
        : "❌ Error en producto";
}

function testVocales() {
    let r = combine.eje20.countVowels(["a","b","e"]);
    return r === 2
        ? "✅ Vocales correcto"
        : "❌ Error en vocales";
}


// 🔹 MOSTRAR RESULTADO PRINCIPAL
function mostrarResultado(mensaje, tipo = "success") {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result ${tipo}`;
}


// 🔹 MOSTRAR TEST (CUADRO)
function mostrarTest(mensaje) {
    testDiv.innerHTML = mensaje;

    // quitar estilos previos
    testDiv.classList.remove("test-ok", "test-error");

    if (mensaje.includes("✅")) {
        testDiv.classList.add("test-ok");
    } else if (mensaje.includes("❌")) {
        testDiv.classList.add("test-error");
    }
}


// 🔹 EVENTOS
ejecutar.addEventListener("click", calcular);
btnTest.addEventListener("click", ejecutarTest);

console.log("Sistema listo 👍");