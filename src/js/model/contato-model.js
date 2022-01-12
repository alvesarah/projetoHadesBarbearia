class Model{
    trocaTema(){
        const temaAtual = document.body.dataset.tema;
        const novoTema = temaAtual == 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-tema', novoTema);
        return novoTema;
    }
}