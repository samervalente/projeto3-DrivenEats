
function getCategoria(elementoproduto){
   let categoria = "";
   if(elementoproduto.classList.contains("prato")){
       categoria = "prato";
   }else if(elementoproduto.classList.contains("bebida")){
       categoria = "bebida";
   }else if(elementoproduto.classList.contains("sobremesa")){
    categoria = "sobremesa";
}

return categoria
}

let bebidaselecionada = null;
let pratoselecionado = null;
let sobremesaselecionada = null;
let nomeProduto = "";
let precoProduto = "";
let precoTotal;

function selecionarproduto(elementoproduto){
    const caixaSelecionada = document.querySelector(".selecionado")
    const categoria = getCategoria(elementoproduto)

    //Selecionando produto-content   
 
    elementoproduto.classList.toggle("selecionado") 
    if(categoria == "prato"){
       pratoselecionado = true;
       ;
    }
    else if(categoria == "bebida"){
        bebidaselecionada = true
       
    }else if(categoria == "sobremesa"){
        sobremesaselecionada = true;
    }
    if(pratoselecionado = true && bebidaselecionada == true && sobremesaselecionada == true){
        document.querySelector(".selecionar").style.background = "green";
        document.querySelector(".info-pedidos").querySelector("h4").innerHTML = "Fechar pedido"
        
    }

  nomeProduto = document.querySelector(".container").querySelector(".nomeproduto").innerHTML
  precoProduto = document.querySelector(".container").querySelector(".preco").innerHTML

  document.querySelector(".comanda").querySelector(".nomeproduto").innerTEXT = nomeProduto
  document.querySelector(".comanda").querySelector(".preco").innerTEXT = precoProduto;

}

   function fecharpedido(){
    if(pratoselecionado != true || bebidaselecionada != true || sobremesaselecionada != true){
        alert("Selecione ao menos 3 itens")
        document.querySelector(".selecionar").style.background = "#CBCBCB";
   }
   document.querySelector(".container").style.opacity = "0.3"
   const comanda = document.querySelector(".comanda")
   comanda.classList.remove("hidden")

   

   
   }

   function cancelar(){
       document.querySelector(".comanda").classList.add("hidden")
       document.querySelector(".container").style.opacity = "1";
   }
   
 
 




