/*Adiciona a classe show-menu no conteiner quando o hamburguer eh clicado*/
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".conteiner").classList.toggle("show-menu")
)

//Para desabilitar o menu quanto o "link" conhecimentos for clicado
document.querySelector(".unset-menu").addEventListener("click", () =>
    document.querySelector(".conteiner").classList.toggle("show-menu")
)

////Para desabilitar o menu quanto o "link" projectos for clicado
document.querySelector(".unset-menu2").addEventListener("click", () =>
    document.querySelector(".conteiner").classList.toggle("show-menu")
)

//Para desabilitar o menu quanto o "link" contato for clicado
document.querySelector(".unset-menu3").addEventListener("click", () =>
    document.querySelector(".conteiner").classList.toggle("show-menu")
)

//Para desabilitar o menu quanto o "link" orcamento for clicado
document.querySelector(".unset-menu4").addEventListener("click", () =>
    document.querySelector(".conteiner").classList.toggle("show-menu")
)

/*Adiciona a classe clicado ao conteiner quando algum li eh clicado*/
document.querySelector(".menu").addEventListener("click", () =>
    document.querySelector(".conteiner").classList.toggle("clicado"),   
)

document.querySelector("#qtde").addEventListener("change", actualizarPreco)
document.querySelector("#js").addEventListener("change", actualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", actualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", actualizarPreco)

/*Renderiza o prazo na sua respectiva label quando este eh escolhido na range*/
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    /*E depois actualiza o preco*/
    actualizarPreco()
})

/*Actualiza o preco do orcamento*/
function actualizarPreco(){
    const qtde = document.querySelector("#qtde").value 
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde*1200     
    if (temJS) preco *=1.1
    if(incluiLayout) preco +=500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `${preco.toFixed()} Mt`
}