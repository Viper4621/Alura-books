const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    // let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    let livrosFiltrados = categoria == 'disponivel' ? filtarPorDisponibilidade():filtarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        //variavel para salvar o valor da função de calcular a soma valor dos livros disponiveis
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
//agora na função de exibir os livros disponiveis na tela colocamos nosso parametro de valor total
//e dentro do spam de preço tambem para mostrar a soma atraves do metodo reduce
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
     <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}