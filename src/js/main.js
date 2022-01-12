document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector("body").classList.toggle("show-menu")
);

const controller = new Controller;

$(".js-troca-tema").click(()=>{
    controller.checaTema();
})