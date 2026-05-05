console.log("🧪 Iniciando tests...");

import assert from "node:assert";

import { calculateAverage } from "../src/ejercicio16.js";
import { removeDuplicates } from "../src/ejercicio17.js";
import { bubbleSort } from "../src/ejercicio18.js";
import { analyzeArray } from "../src/ejercicio19.js";
import { countVowels } from "../src/ejercicio20.js";

try {

    assert.strictEqual(calculateAverage([2, 4, 6]), 4);
    console.log("✅ Promedio OK");

    assert.deepStrictEqual(removeDuplicates([1, 1, 2, 3, 3]), [1, 2, 3]);
    console.log("✅ Duplicados OK");

    assert.deepStrictEqual(bubbleSort([3, 1, 2]), [1, 2, 3]);
    console.log("✅ Ordenamiento OK");

    function multiply(a, b) {
        return a * b;
    }

    assert.strictEqual(analyzeArray([2, 3, 4], multiply), 24);
    console.log("✅ Producto OK");

    assert.strictEqual(countVowels(["a", "b", "e", "x"]), 2);
    console.log("✅ Vocales OK");

    console.log("🎉 TODOS LOS TESTS PASARON");

} catch (error) {
    console.error("❌ ERROR EN TEST:");
    console.error(error.message);
}