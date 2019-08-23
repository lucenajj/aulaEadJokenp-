
//Nesta função é feito um controle se caso o usuário deixa de marcar algum dos radioButton
function jogar() {
    if (document.getElementById("pedra").checked == false &&
        document.getElementById('papel').checked == false &&
        document.getElementById('tesoura').checked == false) {
        alert('Pedra, Papel ou Tesoura precisa ser marcado')
        // Abaixo é feito a escolha do Pc
    } else {
        var sorteio = Math.floor(Math.random() * 3)
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = 'pcpedra.png'
                break
            case 1:
                document.getElementById('pc').src = 'pcpapel.png'
                break
            case 2:
                document.getElementById('pc').src = 'pctesoura.png'
                break


                // Abaixo identificamos se o usuário e o Pc escolheram a mesma coisa
        } if ((document.getElementById('pedra').checked == true && sorteio == 0) ||
            (document.getElementById('papel').checked == true && sorteio == 1) ||
            (document.getElementById('tesoura').checked == true && sorteio == 2)) {
            document.getElementById('placar').innerHTML = 'EMPATE'

            // Abaixo identificamos se o usuário escolheu uma opão que seja diferente do empate e do pc
        } else if ((document.getElementById('pedra').checked == true && sorteio == 2) ||
            (document.getElementById('papel').checked == true && sorteio == 0) ||
            (document.getElementById('tesoura').checked == true && sorteio == 1)) {
            document.getElementById('placar').innerHTML = 'JOGADOR VENCEU'

            // Nesta opção declaramos que as demais são diferente desta abaixo
        } else {
            document.getElementById('placar').innerHTML = 'COMPUTADOR VENCEU'
        }
    }
}

function resetar() {
    document.getElementById('pc').src = 'pc.png'
    document.getElementById('placar').innerHTML = ""
}