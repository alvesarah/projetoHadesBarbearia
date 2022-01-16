class Controller{

    constructor(email){
        this.email = email;
    }

    repassaEmail(){
        let model = new Model(this.email);
        let view = new View();
        view.mostraValidaEmail(model.validaEmail());
    }

    checaTema(){
        const model = new Model();
        const novoTema = model.trocaTema();
        const view = new View();
        view.trocaCorDoIcone(novoTema);
    }
}