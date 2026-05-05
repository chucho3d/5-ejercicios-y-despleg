function analyzeArray(arr, operation) {
    let i = 0;
    let resultado = 1;

    while (i < arr.length) {
        resultado = operation(resultado, arr[i]);
        i++;
    }

    return resultado;
}

function multiply(a, b) {
    return a * b;
}

function fnProductoWhile() {

    let html = `
        <label>Ingresa valores separados por coma:</label>
        <input type="text" id="productInput">
        <button id="btnProducto19">Calcular producto</button>
        <p id="resultado19"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnProducto19").onclick = function () {

        let texto = document.getElementById("productInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado19").textContent =
                "Ingresa valores.";
            return;
        }

        let arr = texto.split(",").map(n => parseFloat(n.trim()));

        if (arr.some(isNaN)) {
            document.getElementById("resultado19").textContent =
                "Todos deben ser números.";
            return;
        }

        let producto = analyzeArray(arr, multiply);

        document.getElementById("resultado19").textContent =
            `Producto: ${producto}`;
    };

    return "✅";
}

export { fnProductoWhile, analyzeArray };