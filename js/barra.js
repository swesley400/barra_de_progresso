
let pegaBarraDentro = document.querySelector('.progress-bar-in')

let total = 1000


let c = 0

const intervalo = setInterval(() => {
    c++
    let valorAtual = c
    let descobrePorcentagem =  valorAtual*100/total
    let momento = descobrePorcentagem
    pegaBarraDentro.style = `width: ${descobrePorcentagem}% `
    pegaBarraDentro.innerHTML = `${momento}%`
    console.log(`Eu  ${c} sou ${descobrePorcentagem}%`)

    if(c == total){

        clearInterval(intervalo)
        pegaBarraDentro.innerHTML = `Processo concluido`
        
    }
}, 100)
