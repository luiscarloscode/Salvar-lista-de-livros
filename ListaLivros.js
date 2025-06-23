import processar from './funcoes.js'
var catalogo = []

let adicionar = window.document.getElementById("adicionar")
adicionar.addEventListener("click", salvar)
let titulo = window.document.getElementById("titulo")
let AnoPublicacao = window.document.getElementById("AnoPublicacao")
let autor = window.document.getElementById("autor")
let aviso = window.document.querySelector("section#aviso")
let resultados = window.document.querySelector("section#resultados")  

function salvar(){
    if(processar.fCamposPreenchidos(titulo, AnoPublicacao, autor) && processar.fDadoNaoCadastrado(catalogo, titulo, autor)){
        aviso.hidden = false;
        resultados.hidden = false
        processar.fCatalogoSetValue(titulo, AnoPublicacao, autor, catalogo)
        aviso.innerText="O livro foi cadastrado com sucesso!"
        processar.flimparCampos(titulo, AnoPublicacao, autor)
        processar.fSetElementsOnHTML(catalogo, resultados, aviso)
    } else {
        aviso.hidden = false;
        if(!processar.fCamposPreenchidos(titulo, AnoPublicacao, autor)){
            aviso.innerText = "Existem campos vazios, preencha todas as informações"
        } else {
            aviso.innerText = "O livro já está cadastrado"
        }
        processar.flimparCampos(titulo, AnoPublicacao, autor)
    }
}

let sectionBusca = window.document.getElementById("resultadoBusca")
let buttonBusca = window.document.getElementById("buscar")
let inputBusca = window.document.querySelector("input#inputBusca")

buttonBusca.addEventListener("click", function (){
    processar.fprocurarLivro(catalogo, inputBusca, resultados, aviso)
})