// Problem: Calculate the number of unique paths from the top-left corner to the bottom-right corner of an m x n grid. You can only move right or down.
class Solution {
    constructor() {
        this.memo = new Map() // mapa para memoization
    }

    uniquePaths(m, n) {
        return this.findPaths(m - 1, n - 1)
    }

    findPaths(row, col) {
        // Caso base: Atingiu o inicio do grid
        if (row === 0 || col === 0) return 1

        // Cria uma chave unica para a posicao atual
        const key = `${row},${col}`
        console.log(key)

        //  Retorna o resultado armazenado se existir
        if (this.memo.has(key)) {
            return this.memo.get(key)
        }

        // Recursivamente calcula o numero de caminhos da esquerda para cima
        const paths = this.findPaths(row - 1, col) + this.findPaths(row, col - 1)

        // Armazena o resulta no memo
        this.memo.set(key, paths)

        return paths
    }
}

function runTests() {
    const solution = new Solution();

    const testCases = [
        { m: 3, n: 2, expected: 3 },
        { m: 3, n: 3, expected: 6 },
        { m: 7, n: 3, expected: 28 },
        { m: 3, n: 7, expected: 28 },
        { m: 1, n: 1, expected: 1 }
    ];

    console.log("Iniciando testes...\n");

    testCases.forEach((test, index) => {
        const result = solution.uniquePaths(test.m, test.n);
        const passed = result === test.expected;

        console.log(`Teste ${index + 1}:`);
        console.log(`Grid ${test.m}x${test.n}`);
        console.log(`Resultado esperado: ${test.expected}`);
        console.log(`Resultado obtido: ${result}`);
        console.log(`Status: ${passed ? 'PASSOU ✅' : 'FALHOU ❌'}`);
        console.log('------------------------');
    });
}

runTests();