// Problem Statement: Given a non-empty binary tree, find the maximum path sum. The path may start and end at any node in the tree.
class TreeNode {
    constructor(x) {
        this.val = x
        this.left = null
        this.right = null
    }
}

class Solution { // T(n) = O(n) | S(n) = balance tree > O(log n) / unbalanced tree > O(n)
    constructor() {
        this.maxSum = -Infinity // Inicializar maxSum com infinity negativo
    }

    maxPathSum(root) {
        this.findMaxPath(root)
        return this.maxSum
    }


    findMaxPath(node) {
        if (node === null) return 0

        // Encontra recursivamente a soma máxima do caminho das subárvores esquerda e direita, tomando apenas somas positivas
        let leftMax = Math.max(0, this.findMaxPath(node.left))
        let rightMax = Math.max(0, this.findMaxPath(node.right))

        // Atualiza maxSum se o caminho atual (incluindo este nó) for maior que o maxSum atual
        this.maxSum = Math.max(this.maxSum, node.val + leftMax + rightMax)

        // Retorna a soma máxima do caminho incluindo este nó e uma de suas subárvores
        return node.val + Math.max(leftMax, rightMax)
    }
}

// Função auxiliar para criar árvore a partir de array
function createTree(values, index = 0) {
    if (index >= values.length || values[index] === null) return null;

    const node = new TreeNode(values[index]);
    node.left = createTree(values, 2 * index + 1);
    node.right = createTree(values, 2 * index + 2);

    return node;
}

// Função auxiliar para imprimir a árvore
function printTree(root, level = 0, prefix = 'Root: ') {
    if (root === null) return;

    console.log('  '.repeat(level) + prefix + root.val);
    if (root.left) printTree(root.left, level + 1, 'L--- ');
    if (root.right) printTree(root.right, level + 1, 'R--- ');
}

function runTests() {
    const testCases = [
        {
            values: [1, 2, 3],
            expected: 6,
            description: "Árvore simples com três nós"
        },
        {
            values: [-10, 9, 20, null, null, 15, 7],
            expected: 42,
            description: "Árvore com números negativos e positivos"
        },
        {
            values: [2, -1, -2],
            expected: 2,
            description: "Raiz com filhos negativos"
        },
        {
            values: [1],
            expected: 1,
            description: "Árvore com um único nó"
        },
        {
            values: [-3],
            expected: -3,
            description: "Árvore com um único nó negativo"
        },
        {
            values: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
            expected: 49,
            description: "Árvore complexa com múltiplos caminhos"
        }
    ];

    testCases.forEach((testCase, index) => {
        console.log(`\n=== Teste ${index + 1}: ${testCase.description} ===`);

        const root = createTree(testCase.values);

        console.log("\nEstrutura da árvore:");
        printTree(root);

        const solution = new Solution();
        const result = solution.maxPathSum(root);

        const passed = result === testCase.expected;

        console.log(`\nValores da árvore: [${testCase.values.join(', ')}]`);
        console.log(`Resultado esperado: ${testCase.expected}`);
        console.log(`Resultado obtido: ${result}`);
        console.log(`Status: ${passed ? 'PASSOU ✅' : 'FALHOU ❌'}`);
        console.log("\n" + "=".repeat(50));
    });
}

runTests();