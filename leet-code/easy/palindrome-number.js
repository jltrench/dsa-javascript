var isPalindrome = function (x) {
    let str = String(x)
    let left = 0
    let right = str.length - 1

    console.log('Número recebido:', x)
    console.log('Convertido para string:', str)

    while (left < right) {
        console.log(`\nComparando: str[${left}]="${str[left]}" com str[${right}]="${str[right]}"`)

        if (str[left] !== str[right]) {
            console.log('Não é palíndromo - dígitos diferentes encontrados')
            return false
        }

        console.log('Dígitos iguais, continuando...')
        left++
        right--
        console.log(`Novos índices: left=${left}, right=${right}`)
    }

    console.log('É palíndromo!')
    return true
};

// Teste com um número palíndromo
console.log('\n--- Testando 12321 ---')
console.log(isPalindrome(12321))

// Teste com um número não palíndromo
console.log('\n--- Testando 12345 ---')
console.log(isPalindrome(12345))