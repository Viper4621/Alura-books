const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))


// em x de fazer 3 const 1 para cada botao e criar 3 funções de click
//podemos fazer usando o this.id e pegar o valor do elemento para fazer o filtro trazendo na nova consta categoria
// pois cada li de botao esta com o value ja definido por categoria no nosso index.html
function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}