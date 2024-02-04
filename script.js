const entrada = document.getElementById("input");
const saida = document.getElementById("output");
const botao_copiar = document.getElementById("copiar");
const alerta__icone = document.getElementById("alerta__icone");
const alerta__titulo = document.getElementById("alerta__titulo");
const alerta__mensagem = document.getElementById("alerta__mensagem");

const alertas = {
    vazio: {
        icone: "&nexist;",
        titulo: "Nenhuma mensagem encontrada",
        mensagem: "Digite um texto que você deseja criptografar ou descriptografar."
    },
    nenhum: {
        icone: "",
        titulo: "",
        mensagem: ""
    }
}

function exibeAlerta(tipo) {
    let alerta = alertas[tipo];
    alerta__icone.innerHTML = alerta.icone;
    alerta__titulo.innerHTML = alerta.titulo;
    alerta__mensagem.innerHTML = alerta.mensagem;
}

const criptografias = {
    "ONE": function (texto, reverso) {
        if (reverso == false) {
            cifra = texto.replaceAll("e", "enter");
            cifra = cifra.replaceAll("i", "imes");
            cifra = cifra.replaceAll("a", "ai");
            cifra = cifra.replaceAll("o", "ober");
            cifra = cifra.replaceAll("u", "ufat");
        }  else if (reverso == true) {
            cifra = texto.replaceAll("enter", "e");
            cifra = cifra.replaceAll("imes", "i");
            cifra = cifra.replaceAll("ai", "a");
            cifra = cifra.replaceAll("ober", "o");
            cifra = cifra.replaceAll("ufat", "u");
        }

        return cifra;
    }
};

function limpaCampo() {
    entrada.value = "";
}

function escondeElemento(elemento){
    if (elemento.classList.contains('escondido') == false) {
        elemento.classList.add("escondido");
    } 
}



function exibeElemento(elemento){
    if (elemento.classList.contains("escondido") == true) {
        elemento.classList.remove("escondido");
    } 
}



function criptografar(reverso=false) {
    exibeAlerta("nenhum");
    exibeElemento(saida);
    reverso = reverso ? true : false;
    cifra = criptografias["ONE"](input.value, reverso);
    saida.innerHTML = cifra;
}


function copiar() {
    window.navigator.clipboard.writeText(saida.innerText);
    botao_copiar.innerText = "Copiado!";
    setTimeout(() => {botao_copiar.innerText = "Copiar"}, 2000);
}
