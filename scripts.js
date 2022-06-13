function selecionarComida(elemento) {
    const botaocliclado = document.querySelector(".selectOne")
    if (botaocliclado !== null) {
        botaocliclado.classList.remove("selectOne");
    }
    elemento.classList.add("selectOne");
    verificar();
}

function selecionarBebida(elemento) {
    const botaocliclado = document.querySelector(".selectTwo")
    if (botaocliclado !== null) {
        botaocliclado.classList.remove("selectTwo");
    }
    elemento.classList.add("selectTwo");
    verificar();
}

function selecionarSobremesa(elemento) {
    const botaocliclado = document.querySelector(".selectThree")
    if (botaocliclado !== null) {
        botaocliclado.classList.remove("selectThree");
    }
    elemento.classList.add("selectThree");
    verificar();
}

function verificar() {
    const fechar = document.querySelector(".conclusao-inc");
    if (selecionarComida && selecionarBebida && selecionarSobremesa) {
        fechar.innerHTML= "Fechar pedido"
        fechar.classList.add("fecharpedido")
    }
}

function Mandarzap (){
const prato = document.querySelector(".containerprato .selectOne .nomeprato").textContent
const bebida = document.querySelector(".containerbebida .selectTwo .nomebebida").textContent
const sobremesa = document.querySelector(".containersobremesa .selectThree .nomesobremesa").textContent

let valorprato = document.querySelector(".containerprato .selectOne span").textContent;
let valorbebida = document.querySelector(".containerbebida .selectTwo span").textContent;
let valorsobremesa =document.querySelector(".containersobremesa .selectThree span").textContent;

valorprato = Number(valorprato.replace("," , "." ));
valorbebida = Number(valorbebida.replace("," , "." ));
valorsobremesa = Number(valorsobremesa.replace("," , "." ));

let precoGeral = (valorprato + valorbebida + valorsobremesa).toFixed(2);
let MensagemUm ="https://wa.me/5521983815743?text="
let MensagemDois = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \n- Total: R$ ${precoGeral}`;
let EUC = encodeURIComponent(MensagemDois);
window.open(MensagemUm + EUC, "_blank");
}