import { getLista } from "./src/lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olnItens = document.querySelector("#itens");

atualizarListaOrdenada();

function atualizarListaOrdenada(){
    const Lista = getLista();
    for(let i=0; i<Lista.length; i++){
        adicionaElementoNaListaOrdenada(Lista[i]);
    }

}


function adicionaElementoNaListaOrdenada(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olnItens.appendChild(li);
}


