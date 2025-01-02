// Breadth-First Search (BFS) - Busca em Largura de Grafo
class Solution {
    static bfs(startNode, adjList) {
        let visited = new Array(adjList.length).fill(false) // Para trackear nós visitados
        let queue = [] // Fila para BFS transveral

        visited[startNode] = true // Marcar o nó inicial como visitado
        queue.push(startNode) // Adicionar o nó inicial na fila

        while (queue.length > 0) { // Continua ate a fila estar vazia
            let currentNode = queue.shift() // Remove e retorna o head da fila
            process.stdout.write(currentNode + " ") // Print do nó conforme ele eh visitado

            // Itera sobre todos os nós adjacentes 
            for (let neighbor of adjList[currentNode]) {
                if (!visited[neighbor]) { // Verifica se o vizinho ja foi visitado
                    visited[neighbor] = true // Marca o vizinho como visitado
                    queue.push(neighbor) // Adiciona o vizinho a fila
                }
            }
        }
    }
}

//     0 --- 1
//     |     |
//     2 --- 3
//      \   /
//        4
const adjList = [
    [1, 2],     // nó 0 está conectado aos nós 1 e 2
    [0, 3],     // nó 1 está conectado aos nós 0 e 3
    [0, 3, 4],  // nó 2 está conectado aos nós 0, 3 e 4
    [1, 2, 4],  // nó 3 está conectado aos nós 1, 2 e 4
    [2, 3]      // nó 4 está conectado aos nós 2 e 3
];
Solution.bfs(0, adjList)