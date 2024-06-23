var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:inline"
    setadireita.style = "display:none"
    setaesquerda.style = "display:inline"

}

function RolarParaEsquerda() {
    Leonardo.style = "display:inline"
    Bruna.style = "display:none"
    setadireita.style = "display:inline"
    setaesquerda.style = "display:none"

}
