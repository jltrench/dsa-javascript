class Solution {
    static countingSort(arr) {
        let max = Solution.findMax(arr)
        let count = new Array(max + 1).fill(0)

        // contar as ocorrencias
        for (let num of arr) {
            count[num]++
        }

        // fazer o array ordenado
        let index = 0
        for (let i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                arr[index++] = i
                count[i]--
            }
        }

        return arr
    }

    static findMax(arr) {
        let max = arr[0]
        for (let num of arr) {
            if (num > max) {
                max = num
            }
        }

        return max
    }
}

let arr = [10, 40, 20, 50, 30]
console.log(Solution.countingSort(arr))