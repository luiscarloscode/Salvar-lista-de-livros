function deletarLivro(Catalog, deletada, R, A){
    if(deletada > Catalog.length -1){
        return aviso.innerText= "Não sei como você fez isso, mas parece que algo está fora de ordem!"
    } else if(Catalog.length > 1){
        for (let i = deletada ; i < Catalog.length-1; i++){
            Catalog[i] = Catalog[i+1]
        }
    }
    Catalog.splice(Catalog.length - 1, 1)
    A.innerText = "Livro excluído"
    return SetElementsOnHTML(Catalog, R, A);
}

function CamposPreenchidos(T,An,Au){
    let tituloValido = T.value !== ""
    let AnoValido = An.value !== ""
    let AutorValido = Au.value !== ""
    let validacao = tituloValido && AnoValido && AutorValido
    return validacao
}

function CatalogoSetValue(T, An, Au, C){
    let livro = {
        nome: T.value,
        ano: An.value,
        autor: Au.value
    }
    C.push(livro)
}

function DadoNaoCadastrado(Catal, T, Au){
    for(let i = 0; Catal.length > i; i++){
        if(Catal[i].nome == T.value && Catal[i].autor == Au.value){
            return false
        }
    }
    return true
}

function limparCampos (T, An, Au){
    T.value = ""
    Au.value = ""
    An.value = ""
    T.focus()
}

function SetElementsOnHTML(C, R, Aviso){
    if(C.length == 0){
        R.hidden = true
    }
    R.innerHTML=""
    for (let i = 0; i < C.length; i++){
        let divResultados = window.document.createElement('div')
        divResultados.innerHTML= `Nome: ${C[i].nome} <br>Autor: ${C[i].autor}<br>Ano de publicação: ${C[i].ano}<br>`
        let ButtonDelete = window.document.createElement('button')
        ButtonDelete.innerText= "Deletar"
        ButtonDelete.setAttribute("data-index", i)
        ButtonDelete.addEventListener('click', function(event){
            const index = parseInt(event.target.getAttribute("data-index"))
            deletarLivro(C, index, R, Aviso);
        });
        divResultados.appendChild(ButtonDelete);
        R.appendChild(divResultados);
    }
}

function procurarLivro(catalogo, search, resultado, aviso){
        let resultadoBusca = []
    for (let i = 0; i < catalogo.length; i++){
        if  (catalogo[i].nome.toUpperCase().includes(search.value.toUpperCase())){
            resultadoBusca.push(catalogo[i])
        }        
    }
    if (resultadoBusca.length > 0){
        resultado.hidden = false
    }
    SetElementsOnHTML(resultadoBusca, resultado, aviso)  
}

export default {
    fCamposPreenchidos: CamposPreenchidos,
    fCatalogoSetValue: CatalogoSetValue,
    fDadoNaoCadastrado: DadoNaoCadastrado,
    flimparCampos: limparCampos,
    fSetElementsOnHTML: SetElementsOnHTML,
    fprocurarLivro: procurarLivro,
}