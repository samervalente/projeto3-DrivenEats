let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";

let precoPrato; 
let precoBebida;
let precoSobremesa;


function convertpreco(preco){
    preco = preco.replace("R$", "").replace(",",".");
    preco = Number(preco)
    return preco
}

function selecionarprato(elemento){
   const selecionado = document.querySelector(".pratos .selecionado")
  

   //Se já existir um elemento selecionado (ou seja, um elemento que possua a classe selecionado)
   if(selecionado != null){
       selecionado.classList.remove("selecionado")
   }
   elemento.classList.add("selecionado")
   //acessando através do querySelector, as classes nomeproduto e preco existentes dentro do elemento "elementoprato"
   let preco = elemento.querySelector(".preco").innerHTML
   nomePrato = elemento.querySelector(".nomeproduto").innerHTML
   precoPrato = convertpreco(preco);
   VerificarPedido()
}

function selecionarbebida(elemento){
    const selecionado = document.querySelector(".bebidas .selecionado")
   
 
    //Se já existir um elemento selecionado (ou seja, um elemento que possua a classe selecionado)
    if(selecionado != null){
        selecionado.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado")
    //acessando através do querySelector, as classes nomeproduto e preco existentes dentro do elemento "elementoprato"
    let preco = elemento.querySelector(".preco").innerHTML
    nomeBebida = elemento.querySelector(".nomeproduto").innerHTML
    precoBebida = convertpreco(preco)
    VerificarPedido()
 
 }

 function selecionarsobremesa(elemento){
    const selecionado = document.querySelector(".sobremesas .selecionado")
  
 
    //Se já existir um elemento selecionado (ou seja, um elemento que possua a classe selecionado)
    if(selecionado != null){
        selecionado.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado")
    //acessando através do querySelector, as classes nomeproduto e preco existentes dentro do elemento "elementoprato"
    let preco = elemento.querySelector(".preco").innerHTML
    nomeSobremesa = elemento.querySelector(".nomeproduto").innerHTML
    precoSobremesa = convertpreco(preco)
    VerificarPedido()
 }

 function VerificarPedido(){
    console.log(precoPrato, precoBebida, precoSobremesa)
    if(precoPrato !== undefined && precoBebida !== undefined && precoSobremesa !== undefined){
        document.querySelector(".selecionar").style.background = "#32B72F"
        document.querySelector(".selecionar").querySelector("h4").innerHTML = "Fechar Pedido"
    }

 }
 let precototal;
 function fecharpedido(){
    precototal = precoPrato + precoBebida+precoSobremesa
    precototal = precototal.toFixed(2)

    document.querySelector(".container").style.opacity="0.3";
    document.querySelector("body").classList.add("hiddenoverflow")
    document.querySelector(".box").classList.remove("hidden")

    document.querySelector(".prato").querySelector(".nomeproduto").innerHTML = nomePrato;
    document.querySelector(".bebida").querySelector(".nomeproduto").innerHTML = nomeBebida;
    document.querySelector(".sobremesa").querySelector(".nomeproduto").innerHTML = nomeSobremesa;

    document.querySelector(".prato").querySelector(".preco").innerHTML = precoPrato.toFixed(2)
    document.querySelector(".bebida").querySelector(".preco").innerHTML = precoBebida.toFixed(2)
    document.querySelector(".sobremesa").querySelector(".preco").innerHTML = precoSobremesa.toFixed(2)
    document.querySelector(".precototal").innerHTML = `<strong>R$</strong> ${precototal}` 

 }

 let nome = "";
 let endereco = "";

function getdata(){
 nome = prompt("Qual é o seu nome?")
 endereco = prompt("Qual é o seu endereço?")    
}

function finalizar (){
    getdata();
    const msgwhats = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${precototal}\n Nome: ${nome}\n Endereço: ${endereco}`;
    const linkwhats = `https://wa.me/5591988580205?text=${encodeURIComponent(msgwhats)}`;
    window.open(linkwhats)
}

function cancelar(){
    document.querySelector(".box").classList.add("hidden")
    document.querySelector(".container").style.opacity="1";
}