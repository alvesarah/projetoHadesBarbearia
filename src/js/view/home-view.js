class View{
    trocaCorDoIcone(tema){
        $('.logo').attr('src', `/src/imagens/logo/logo-${tema}.png`);
        $('.troca-tema').attr('src', `/src/imagens/icones/tema-${tema}.svg`);
        $('.icone-quem-somos').attr('src', `/src/imagens/icones/quem-somos-${tema}.png`);
        $('.icone-filosofia').attr('src', `/src/imagens/icones/filosofia-${tema}.png`);
        $('.icone-missao').attr('src', `/src/imagens/icones/missao-${tema}.png`);
        $('.icone-visao').attr('src', `/src/imagens/icones/visao-${tema}.png`);
        $('.icone-valores').attr('src', `/src/imagens/icones/valores-${tema}.png`);
        $('.calendario').attr('src', `/src/imagens/icones/agendar-${tema}.png`);
        $('.carrinho-compras').attr('src', `/src/imagens/icones/comprar-${tema}.png`);
        $('.icone-servicos').attr('src', `/src/imagens/icones/servicos-${tema}.png`);
    }
}