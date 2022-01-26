document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector("body").classList.toggle("show-menu")
);

const controller = new Controller;

$(".js-troca-tema").click(()=>{
    controller.checaTema();
});

//Validação
$('#email').focusout(function(e){
    e.preventDefault();
    let controller = new Controller($('#email').val()); //Instaciando controller
    controller.repassaEmail();
});

$('.botao-formulario').click(function(e){
    e.preventDefault();
    console.log($('#nome').val());
    if(($('#nome').val() != "") && ($('#email').val().indexOf("@") > -1) && ($('#celular').val() != "") && ($('#texto').val() != "")){
        $(".caixa-formulario").html(`
            <div class="container-mensagem-sucesso">
                <div class="tamanho-mensagem">
                    <h4 class="mensagem-h4"><strong>Mensagem enviada!</strong></h4>
                    <p class="p-mensagem">Isso aí, sua mensagem foi enviada para nós, em breve você será respondido! Verifique sua caixa de email, a resposta será enviada por lá.</p>
                    <hr>
                    <p class="descricao-mensagem">Caso a dúvida não seja sanada, não deixe de entrar em contato no nosso telefone <strong>0800 777 7000</strong>.</p>
                </div>

                <div class="teste">
                    <a class="btn-sucesso" href="../../index.html">Ir para Home</a>
                </div>
            </div>
        `);
    } else {
        $(".aviso-completar").html(`
            <p class="mensagem-erro">Complete todos os campos para que a mensagem seja enviada!</p>
        `);
    }
});

// HAMBURGUER E NAV FIXO
$('.hamburguer').click(function(){
    $('body').hasClass('show-menu') ? $('#teste').removeClass('bg-header') : $('#teste').addClass('bg-header');
});

// Animação quando scrolla
//Animação quando scrolla 
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 200));
}