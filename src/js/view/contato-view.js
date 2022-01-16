class View{
    trocaCorDoIcone(tema){
        $('.logo').attr('src', `/src/imagens/logo/logo-${tema}.png`);
        $('.icone-quem-somos').attr('src', `/src/imagens/icones/quem-somos-${tema}.png`);
        $('.icone-filosofia').attr('src', `/src/imagens/icones/filosofia-${tema}.png`);
        $('.icone-missao').attr('src', `/src/imagens/icones/missao-${tema}.png`);
        $('.icone-visao').attr('src', `/src/imagens/icones/visao-${tema}.png`);
        $('.icone-valores').attr('src', `/src/imagens/icones/valores-${tema}.png`);
        $('.icone-servicos').attr('src', `/src/imagens/icones/servicos-${tema}.png`);
    }

    mostraValidaEmail(emailValidado){
        if(emailValidado == "email válido"){
            $('#emailHelp').html('Email válido <i class="fas fa-check"></i>');
            $('#emailHelp').css({"color": "#04d976"});
        } else {
            $('#emailHelp').html('Email inválido <i class="fas fa-times"></i>');
            $('#emailHelp').css({"color": "red"});
        }
    }
}