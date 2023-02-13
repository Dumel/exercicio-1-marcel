const validarErros = (primeiraNota, segundaNota, terceiraNota, quartaNota) => {
    if (primeiraNota == ''
        || segundaNota == ''
        || terceiraNota == ''
        || quartaNota == '') {

        console.log('ERRO: a caixa de entrada precisa receber um valor')

    } else if (isNaN(primeiraNota)
        || isNaN(segundaNota)
        || isNaN(terceiraNota)
        || isNaN(quartaNota)) {
        console.log('ERRO: Digite apenas números')

    } else if (primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 || segundaNota > 100 ||
        terceiraNota < 0 || terceiraNota > 100 || quartaNota < 0 || quartaNota > 100) {
        console.log('Erro: O resultado é menor que 0 ou maior que 100')

    } 
}

const somaDasNotas = (media) => {
   
        if (media > 70) {
            return`Aprovado, Média: ${media}`

        } else if(media >= 50 && media <= 69){

                return `Exame, Média: ${media}`

        }else if (media < 50){
            return `Reprovado, Média: ${media}`
        
        }else{
            return false;
        }
                
        





    }


module.exports = {
    validarErros,
    somaDasNotas
}