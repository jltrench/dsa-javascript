// Depth-First Search (DFS) - Busca em Profundidade de Grafo
class Solution {
    static dfs(node, visited, adjList) {
        visited[node] = true; // Marcar o nó atual como visitado
        process.stdout.write(node + " "); // Print do nó conforme ele é visitado

        // Recursivamente visita cada nó adjacente
        for (let neighbor of adjList[node]) {
            if (!visited[neighbor]) { // Verifica se o vizinho já foi visitado
                this.dfs(neighbor, visited, adjList); // Chamada recursiva para DFS
            }
        }
    }
}

// 1. Grafo Linear (Pior caso para profundidade)
console.log("1. Grafo Linear (Profundidade Máxima):");
const linearGraph = {
    '1': ['2'],  // Vértice 1 conectado apenas ao 2
    '2': ['3'],  // Vértice 2 conectado apenas ao 3
    '3': ['4'],  // Vértice 3 conectado apenas ao 4
    '4': []      // Vértice 4 sem conexões
};
const visitedLinear = { '1': false, '2': false, '3': false, '4': false };
Solution.dfs('1', visitedLinear, linearGraph);
console.log("\n");

// 2. Grafo Circular (Demonstra detecção de ciclos)
console.log("2. Grafo Circular:");
const circularGraph = {
    'A': ['B'],  // Aresta A→B
    'B': ['C'],  // Aresta B→C
    'C': ['A']   // Aresta C→A (fecha o ciclo)
};
const visitedCircular = { 'A': false, 'B': false, 'C': false };
Solution.dfs('A', visitedCircular, circularGraph);
console.log("\n");

// 3. Grafo em Estrela (Muitas arestas saindo de um vértice)
console.log("3. Grafo em Estrela:");
const starGraph = {
    'Centro': ['A', 'B', 'C', 'D'],  // Vértice central com múltiplas arestas
    'A': ['Centro'],
    'B': ['Centro'],
    'C': ['Centro'],
    'D': ['Centro']
};
const visitedStar = { 'Centro': false, 'A': false, 'B': false, 'C': false, 'D': false };
Solution.dfs('Centro', visitedStar, starGraph);