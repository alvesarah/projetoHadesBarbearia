class Model{

    constructor(emailController){
        this.email = emailController;
    }

    validaEmail(){
        return this.email.indexOf("@") > -1 ? "email válido" : "email inválido";
    }

    trocaTema(){
        const temaAtual = document.body.dataset.tema;
        const novoTema = temaAtual == 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-tema', novoTema);
        return novoTema;
    }
}