class View{
    trocaCorDoIcone(tema){
        $('.logo').attr('src', `/src/imagens/logo/logo-${tema}.png`);
        $('.troca-tema').attr('src', `/src/imagens/icones/tema-${tema}.svg`);
        $('.icone-produtos').attr('src', `/src/imagens/icones/produtos-${tema}.png`);
    }
}