function bubbleSort(array) {
    let arr = [...array];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function fnOrdenarBurbuja() {

    let html = `
        <label>Ingresa valores separados por coma:</label>
        <input type="text" id="sortInput">
        <button id="btnOrdenar18">Ordenar</button>
        <p id="resultado18"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnOrdenar18").onclick = function () {

        let texto = document.getElementById("sortInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado18").textContent =
                "Ingresa valores.";
            return;
        }

        let arr = texto.split(",").map(n => parseFloat(n.trim()));

        if (arr.some(isNaN)) {
            document.getElementById("resultado18").textContent =
                "Todos deben ser números.";
            return;
        }

        let ordenado = bubbleSort(arr);

        document.getElementById("resultado18").textContent =
            `Ordenado: [ ${ordenado.join(", ")} ]`;
    };

    return "✅";
}

export { fnOrdenarBurbuja, bubbleSort };