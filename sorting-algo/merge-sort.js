class Solution {
    static mergeSort(arr, left, right) {
        if (left < right) {
            let mid = Math.floor((left + right) / 2)

            // Recursivamente ordenar as duas metades
            Solution.mergeSort(arr, left, mid)
            Solution.mergeSort(arr, mid + 1, right)

            // Unir as duas metades ordenadas
            Solution.merge(arr, left, mid, right)
        }
        return arr
    }

    static merge(arr, left, mid, right) {
        let n1 = mid - left + 1
        let n2 = right - mid

        // Cria arrays temporarios
        let leftArray = arr.slice(left, left + n1)
        let rightArray = arr.slice(mid + 1, mid + 1 + n2)

        // Une os arrays temporarios
        let i = 0, j = 0, k = left
        while (i < n1 && j < n2) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k] = leftArray[i]
                i++
            } else {
                arr[k] = rightArray[j]
                j++
            }
            k++
        }

        // Copia os elementos restantes do array esquerdo
        while (i < n1) {
            arr[k] = leftArray[i]
            i++
            k++
        }

        // Copia os elementos restantes do array direito
        while (j < n2) {
            arr[k] = rightArray[j]
            j++
            k++
        }
    }
}

const arr = [0, 10, 40, 20, 30]
console.log(Solution.mergeSort(arr, 0, arr.length - 1))