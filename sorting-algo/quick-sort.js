class Solution {
    static quickSort(arr, low, high) {
        if (low < high) {
            // Particiona o array e obtem o index pivo
            let pi = Solution.partition(arr, low, high)

            // Recursivamente ordena os elementos antes e depois da particao
            Solution.quickSort(arr, low, pi - 1)
            Solution.quickSort(arr, pi + 1, high)
        }

        return arr
    }

    static partition(arr, low, high) {
        let pivot = arr[high] // Elemento pivo
        let i = low - 1

        for (let j = low; j < high; j++) {
            // Se o elemento atual for menor ou igual do que o pivo
            if (arr[j] <= pivot) {
                i++
                // Trocar arr[i] e arr[j]
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }

        // Trocar arr[i + 1] e arr[high] (ou pivo)
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]

        return i + 1 // Retornar o index da particao
    }
}

let arr = [10, 40, 20, 50, 30]
console.log(Solution.quickSort(arr, 0, arr.length - 1))