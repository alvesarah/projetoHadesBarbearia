class Controller{
    checaTema(){
        const model = new Model();
        const novoTema = model.trocaTema();
        const view = new View();
        view.trocaCorDoIcone(novoTema);
    }
}