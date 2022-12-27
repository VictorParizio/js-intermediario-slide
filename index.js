const btnAvancar = document.querySelector('.avancar')
const btnVoltar = document.querySelector('.voltar')
const painel = document.querySelectorAll('.painel')

let painelAtual = 0

btnAvancar.addEventListener('click', () => {
    if (painelAtual === painel.length - 1) {
        return
    }

    painelAtual++
    
    esconderPainelAtual()
    mostrarPainel()
    ativarOuDesativarSeta()
})

btnVoltar.addEventListener('click', () => {
    if (painelAtual === 0) {
        return
    }
    
    painelAtual--
    
    esconderPainelAtual()
    mostrarPainel()
    ativarOuDesativarSeta()
})

function mostrarPainel() {
    painel[painelAtual].classList.add('atual')
}

function esconderPainelAtual() {
    const painelAtual = document.querySelector('.atual')
    painelAtual.classList.remove('atual')
}

function ativarOuDesativarSeta() {
    if (naoEhPrimeiroPainel = painelAtual !== 0) {
        btnVoltar.classList.remove('inativo')
    } else {
        btnVoltar.classList.add('inativo')
    }

    const chegouNoUltimoPainel = painelAtual !== 0 && painelAtual === painel.length - 1
    if (chegouNoUltimoPainel) {
        btnAvancar.classList.add('inativo')
    } else {
        btnAvancar.classList.remove('inativo')
    }
}