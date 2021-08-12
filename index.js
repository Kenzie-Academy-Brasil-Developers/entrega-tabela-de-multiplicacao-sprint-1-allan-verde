function tabela(n) {
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let meuArray = []
    for (let linha = 0; linha < n; linha++) {
        meuArray[linha] = []
        for (let coluna = 0; coluna < n; coluna++) {
            meuArray[linha][coluna] = 'x'
        }
    }
    return meuArray
}