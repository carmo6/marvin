function minusculo(palavra) {
    min = palavra.substring(0,1)
    resto = palavra.substring(10)
    return min.toLowerCase() + resto
}