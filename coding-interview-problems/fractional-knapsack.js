// Problem Statement: Given the weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. You can take fractions of items.
class Item {
    constructor(weight, value) {
        this.weight = weight
        this.value = value
    }
}

class Solution { // T(n) = O(n log n) | S(n) = O(1)
    fractionalKnapsack(W, items) {
        // Classifica os itens por relação valor-peso em ordem decrescente
        items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight))

        let totalValue = 0.0

        for (const item of items) {
            if (W >= item.weight) {
                // Se o item inteiro pode ser adicionado, adiciona e reduz a capacidade
                totalValue += item.value
                W -= item.weight
            } else {
                // Se apenas uma parte do item pode ser adicionado, adiciona esta fracao
                totalValue += (item.value / item.weight) * W
                break // Mochila esta cheia
            }
        }

        return totalValue
    }
}

function formatNumber(num) {
    return Number(num.toFixed(2));
}

function runTests() {
    const testCases = [
        {
            capacity: 50,
            items: [
                new Item(10, 60),  // 6 valor/peso
                new Item(20, 100), // 5 valor/peso
                new Item(30, 120)  // 4 valor/peso
            ],
            expected: 240,
            description: "Caso básico com itens inteiros"
        },
        {
            capacity: 15,
            items: [
                new Item(10, 100), // 10 valor/peso
                new Item(20, 160), // 8 valor/peso
                new Item(5, 30)    // 6 valor/peso
            ],
            expected: 140,
            description: "Caso com item fracionário"
        },
        {
            capacity: 60,
            items: [
                new Item(20, 100), // 5 valor/peso
                new Item(10, 60),  // 6 valor/peso
                new Item(30, 120)  // 4 valor/peso
            ],
            expected: 280,
            description: "Caso com todos os itens cabendo na mochila"
        },
        {
            capacity: 5,
            items: [
                new Item(10, 100), // 10 valor/peso
                new Item(5, 40),   // 8 valor/peso
                new Item(8, 56)    // 7 valor/peso
            ],
            expected: 50,
            description: "Caso com apenas fração do primeiro item"
        }
    ];

    testCases.forEach((testCase, index) => {
        console.log(`\n=== Teste ${index + 1}: ${testCase.description} ===`);

        console.log("\nItens disponíveis:");
        testCase.items.forEach((item, i) => {
            console.log(`Item ${i + 1}:
  - Peso: ${item.weight}
  - Valor: ${item.value}
  - Valor/Peso: ${formatNumber(item.value / item.weight)}`);
        });

        const solution = new Solution();
        const result = solution.fractionalKnapsack(testCase.capacity, [...testCase.items]); // Clone do array para não modificar o original

        const passed = Math.abs(result - testCase.expected) < 0.01; // Tolerância para erros de ponto flutuante

        console.log(`\nCapacidade da mochila: ${testCase.capacity}`);
        console.log(`Valor máximo esperado: ${formatNumber(testCase.expected)}`);
        console.log(`Valor máximo obtido: ${formatNumber(result)}`);
        console.log(`Status: ${passed ? 'PASSOU ✅' : 'FALHOU ❌'}`);
        console.log("\n" + "=".repeat(50));
    });
}

runTests();