// Problem Statement: Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.
class Solution { // T(n) = O(n log n) | S(n) = O(n)
    merge(intervals) {
        // Ordena os intervalos com base no start time
        intervals.sort((a, b) => a[0] - b[0])

        const merged = []

        for (const interval of intervals) {
            // Se a lista e intervalos mesclados estiver vazia ou o intervalo atual nao se sobrepuser ao ultimo , adiciona-o
            if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
                merged.push(interval)
            } else {
                // Se houver uma sobreposicao, mescle o intervalo atual com o ultimo
                merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
            }
        }

        return merged
    }
}

function runTests() {
    const solution = new Solution();

    const testCases = [
        {
            input: [[1, 3], [2, 6], [8, 10], [15, 18]],
            expected: [[1, 6], [8, 10], [15, 18]],
            description: "Caso normal com uma mesclagem"
        },
        {
            input: [[1, 4], [4, 5]],
            expected: [[1, 5]],
            description: "Intervalos que se tocam"
        },
        {
            input: [[1, 4], [2, 3]],
            expected: [[1, 4]],
            description: "Intervalo totalmente contido em outro"
        },
        {
            input: [[1, 4]],
            expected: [[1, 4]],
            description: "Único intervalo"
        },
        {
            input: [[1, 3], [4, 6], [7, 9]],
            expected: [[1, 3], [4, 6], [7, 9]],
            description: "Nenhuma sobreposição"
        }
    ];

    testCases.forEach((testCase, index) => {
        console.log(`\nTeste ${index + 1}: ${testCase.description}`);
        console.log(`Input: ${JSON.stringify(testCase.input)}`);

        const result = solution.merge(testCase.input);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);

        console.log(`Resultado esperado: ${JSON.stringify(testCase.expected)}`);
        console.log(`Resultado obtido: ${JSON.stringify(result)}`);
        console.log(`Status: ${passed ? 'PASSOU ✅' : 'FALHOU ❌'}`);
    });
}

runTests();