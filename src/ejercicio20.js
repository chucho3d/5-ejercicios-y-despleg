function countVowels(letters) {
    const vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for (let i = 0; i < letters.length; i++) {
        if (vocales.includes(letters[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}

function fnContarVocales() {

    let html = `
        <label>Ingresa letras separadas por coma:</label>
        <input type="text" id="lettersInput">
        <button id="btnVocales20">Contar vocales</button>
        <p id="resultado20"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnVocales20").onclick = function () {

        let texto = document.getElementById("lettersInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado20").textContent =
                "Ingresa letras.";
            return;
        }

        let arr = texto.split(",").map(l => l.trim());

        if (arr.some(l => l.length !== 1)) {
            document.getElementById("resultado20").textContent =
                "Solo una letra por elemento.";
            return;
        }

        let total = countVowels(arr);

        document.getElementById("resultado20").textContent =
            `Vocales: ${total}`;
    };

    return "✅";
}

export { fnContarVocales, countVowels };