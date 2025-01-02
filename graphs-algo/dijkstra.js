import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

class Solution {
    dijkstra(startNode, adjList) {
        let distances = new Array(adjList.length).fill(Infinity) // Array para armazenar menores distancias
        distances[startNode] = 0 // Distancia para o no inicial = 0

        let pq = new MinPriorityQueue({ priority: x => x[1] }) // Min-heap baseado na distancia
        pq.enqueue([startNode, 0]) // Adiciona o no inicial a fila de prioridade

        while (!pq.isEmpty()) {
            let [currentNode, currentDist] = pq.dequeue().element // Extrai o no com a menor distancia

            if (currentDist > distances[currentNode]) continue // Pula caminhos desatualizados

            // Itera entre os nos adjacentes
            for (let [nextNode, weigth] of adjList[currentNode]) {
                let newDist = currentDist + weigth

                // Atualiza a distancia se um caminho mais curto for encontrado
                if (newDist < distances[nextNode]) {
                    distances[nextNode] = newDist
                    pq.enqueue([nextNode, newDist]) // Adicionia no atualizado a fila
                }
            }
        }

        // Print das menores distancias
        for (let i = 0; i < distances.length; i++) {
            console.log(`Distance para o nó ${i}: ${distances[i]}`);
        }
    }
}

// Criar um grafo de teste
function testDijkstra() {
    // Grafo de exemplo:
    // 0 --- (4) --- 1
    // |            /|
    // |           / |
    // (2)     (1)  |
    // |         /  |
    // |        /   |
    // 2 ---(3)--- 3

    const graph = [
        [[1, 4], [2, 2]],         // Nó 0: conectado a 1 (peso 4) e 2 (peso 2)
        [[0, 4], [2, 1], [3, 5]], // Nó 1: conectado a 0 (peso 4), 2 (peso 1) e 3 (peso 5)
        [[0, 2], [1, 1], [3, 3]], // Nó 2: conectado a 0 (peso 2), 1 (peso 1) e 3 (peso 3)
        [[1, 5], [2, 3]]          // Nó 3: conectado a 1 (peso 5) e 2 (peso 3)
    ];

    console.log("Testando Dijkstra partindo do nó 0:");
    const solution = new Solution();
    solution.dijkstra(0, graph);
}

// Executar o teste
testDijkstra();