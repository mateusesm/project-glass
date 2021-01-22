function mudaFoto (foto){
    document.querySelector('img#icone').src = foto
}

function calc_total() {
    var qtd = Number(document.querySelector('#cQtd').value)
    var tot = qtd * 1500
    document.querySelector('#cTot').value = tot
}