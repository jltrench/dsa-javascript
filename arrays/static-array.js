class Solution {
  static main() {
    let staticArray = new Array(5); // Um array estatico sempre terá o tamanho fixo

    // Inicializando o array
    staticArray[0] = 1;
    staticArray[1] = 2;
    staticArray[2] = 3;
    staticArray[3] = 4;
    staticArray[4] = 5;

    // Acessando x elemento (O(1))
    console.log(staticArray[0]); // O(1)

    // Atualizando x elemento (O(1))
    staticArray[0] = 10; // O(1)
    console.log(staticArray[0]); // O(1)

    // Linear Search - Busca Linear (O(n))
    let target = 4;
    let found = false;
    for (let i = 0; i < staticArray.length; i++) {
      if (staticArray[i] === target) {
        console.log("Elemento encontrado no index" + i) // O(n)
        found == true
        break;
      }
    }
    if (!found) {
      console.log("Elemento nao encontrado");
    }
  }
}

Solution.main();
