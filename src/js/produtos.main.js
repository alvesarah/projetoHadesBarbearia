const controller = new Controller;

$(".js-troca-tema").click(()=>{
    controller.checaTema();
})

document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector("body").classList.toggle("show-menu")
);

// HAMBURGUER E NAV FIXO
$('.hamburguer').click(function(){
    $('body').hasClass('show-menu') ? $('#teste').removeClass('bg-header') : $('#teste').addClass('bg-header');
});