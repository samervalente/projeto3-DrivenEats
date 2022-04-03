



function selecionarproduto(elementoproduto){
    const caixaSelecionada = document.querySelector(".selecionado")
    const check = document.querySelector(".hidden")
  

    elementoproduto.classList.add("selecionado")
    if(caixaSelecionada != null){
        caixaSelecionada.classList.remove("selecionado")     
    }

    if(elementoproduto.classList.contains("selecionado")){
        if(check != null){
            check.classList.add("hidden")
        }
        check.classList.add("hidden")
    }


    

}