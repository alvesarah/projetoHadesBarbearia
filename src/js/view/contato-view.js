class View{
    trocaCorDoIcone(tema){
        $('.logo').attr('src', `/src/imagens/logo/logo-${tema}.png`);
        $('.troca-tema').attr('src', `/src/imagens/icones/tema-${tema}.svg`);
        $('.img-contato').attr('src', `/src/imagens/icones/fale-conosco-${tema}.png`);
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