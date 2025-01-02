// Problem: Find the length of the longest palindromic subsequence in a given string.
class Solution {
    longestPalindromeSubseq(s) {
        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(0));

        // Caracteres unicos são palíndromos de tamanho 1
        for (let i = 0; i < n; i++) {
            dp[i][i] = 1;
        }

        // Preenche a tabela para substrings de tamanho 2 e maiores
        for (let len = 2; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                let j = i + len - 1;
                if (s[i] === s[j]) {
                    dp[i][j] = 2 + dp[i + 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[0][n - 1];
    }

    // Método auxiliar para visualizar a matriz DP
    visualizeDP(s) {
        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(0));

        // Preenche e mostra o estado da matriz em cada etapa
        console.log(`\nProcessando string: "${s}"\n`);

        // Inicialização para substrings de tamanho 1
        for (let i = 0; i < n; i++) {
            dp[i][i] = 1;
        }
        console.log("Após inicialização (substrings de tamanho 1):");
        this.printMatrix(dp);

        // Processa substrings maiores
        for (let len = 2; len <= n; len++) {
            console.log(`\nProcessando substrings de tamanho ${len}:`);
            for (let i = 0; i <= n - len; i++) {
                let j = i + len - 1;
                if (s[i] === s[j]) {
                    dp[i][j] = 2 + dp[i + 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
            this.printMatrix(dp);
        }

        return dp[0][n - 1];
    }

    // Método para imprimir a matriz de forma legível
    printMatrix(matrix) {
        matrix.forEach(row => {
            console.log(row.map(num => num.toString().padStart(2, ' ')).join(' '));
        });
    }
}

function runTests() {
    const solution = new Solution();

    const testCases = [
        { input: "bbbab", expected: 4 },  // Maior subsequência palindrômica: "bbbb"
        { input: "cbbd", expected: 2 },   // Maior subsequência palindrômica: "bb"
        { input: "aaa", expected: 3 },    // Maior subsequência palindrômica: "aaa"
        { input: "abcde", expected: 1 },  // Maior subsequência palindrômica: qualquer caractere único
        { input: "radar", expected: 5 }   // Maior subsequência palindrômica: "radar"
    ];

    console.log("====== TESTES BÁSICOS ======");
    testCases.forEach((test, index) => {
        const result = solution.longestPalindromeSubseq(test.input);
        const passed = result === test.expected;

        console.log(`\nTeste ${index + 1}:`);
        console.log(`Input: "${test.input}"`);
        console.log(`Resultado esperado: ${test.expected}`);
        console.log(`Resultado obtido: ${result}`);
        console.log(`Status: ${passed ? 'PASSOU ✅' : 'FALHOU ❌'}`);
    });

    console.log("\n====== VISUALIZAÇÃO DETALHADA ======");
    console.log("\nVamos ver em detalhes como o algoritmo processa a string 'bab':");
    solution.visualizeDP("bab");
}

runTests();