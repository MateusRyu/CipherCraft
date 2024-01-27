const entrada = document.getElementById("input");
const saida = document.getElementById("output");
const alerta = document.getElementById("alerta");

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
    escondeElemento(alerta);
    exibeElemento(saida);
    reverso = reverso ? true : false;
    cifra = criptografias["ONE"](input.value, reverso);
    saida.innerHTML = cifra;
}

