//função para somar o valor total de livros disponiveis
function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acc , livro) => acc + livro.preco, 0).toFixed(2)
}