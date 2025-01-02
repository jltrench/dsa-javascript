// Problem: Calculate the minimum cost to climb a staircase where each step has a certain cost associated with it. You can climb one or two steps at a time.
class Solution {
    constructor() {
        this.dp = [] // Array de memoization
    }

    minCostClimbingStairs(cost) {
        this.dp = new Array(cost.length).fill(-1)
        return Math.min(
            this.findMinCost(cost, cost.length - 1),
            this.findMinCost(cost, cost.length - 2)
        )
    }

    findMinCost(cost, i) {
        // Adiciona log para visualizar as chamadas recursivas
        console.log(`Calculando custo para degrau ${i}...`)

        if (i < 0) return 0 // Caso base: Sem custo quando abaixo da primeira etapa
        if (i === 0 || i === 1) return cost[i] // Casos base para as duas primeiras etapas

        // Verifica se já temos o resultado memorizado
        if (this.dp[i] !== -1) {
            console.log(`  → Usando valor memorizado para degrau ${i}: ${this.dp[i]}`)
            return this.dp[i]
        }

        // Corrigindo o erro de sintaxe (tinha um ponto no lugar da vírgula)
        this.dp[i] = cost[i] + Math.min(
            this.findMinCost(cost, i - 1),
            this.findMinCost(cost, i - 2)
        )

        console.log(`  → Armazenando resultado para degrau ${i}: ${this.dp[i]}`)
        return this.dp[i]
    }

    // Método auxiliar para visualizar o estado da memoização
    printMemoizationState() {
        console.log("\nEstado atual da memoização:")
        console.log("Índice: ", [...this.dp.keys()].map(i => i.toString().padStart(3, ' ')).join(' '))
        console.log("Valor:  ", this.dp.map(v => v.toString().padStart(3, ' ')).join(' '))
        console.log("")
    }
}

function runTests() {
    const solution = new Solution();

    const testCases = [
        {
            cost: [10, 15, 20],
            expected: 15,
            description: "Escada curta - pode pular o último degrau"
        },
        {
            cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
            expected: 6,
            description: "Escada longa - melhor caminho pulando alguns degraus"
        },
        {
            cost: [0, 0, 0, 0],
            expected: 0,
            description: "Todos os degraus sem custo"
        },
        {
            cost: [20, 15],
            expected: 15,
            description: "Escada mínima - apenas dois degraus"
        }
    ];

    testCases.forEach((test, index) => {
        console.log(`\n====== TESTE ${index + 1}: ${test.description} ======`);
        console.log("Custo dos degraus:", test.cost);

        const testSolution = new Solution();

        const startTime = performance.now();
        const result = testSolution.minCostClimbingStairs(test.cost);
        const endTime = performance.now();

        testSolution.printMemoizationState();

        const passed = result === test.expected;
        console.log(`\nResultado esperado: ${test.expected}`);
        console.log(`Resultado obtido: ${result}`);
        console.log(`Tempo de execução: ${(endTime - startTime).toFixed(2)}ms`);
        console.log(`Status: ${passed ? 'PASSOU ✅' : 'FALHOU ❌'}`);
        console.log("\n" + "=".repeat(50));
    });
}

runTests();