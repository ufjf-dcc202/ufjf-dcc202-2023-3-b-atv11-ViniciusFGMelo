const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olnItens = document.querySelector("#itens");

adicionaElementoNaLista("Primeiro");
adicionaElementoNaLista("Segundo");
adicionaElementoNaLista("Terceiro");

function adicionaElementoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olnItens.appendChild(li);
}


