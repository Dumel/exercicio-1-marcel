const calcular = (nota1, nota2, nota3, nota4, media) => {
    let primeiraNota = Number (nota1)
    let segundaNota = Number (nota2)
    let terceiraNota = Number (nota3)
    let quartaNota = Number (nota4)

    let resultado = ((primeiraNota + segundaNota + terceiraNota + quartaNota)/4)


    if (resultado > 70) {
        return`Aprovado, Média: ${media}`

    } else if(media >= 50 && media <= 69){

            return `Exame, Média: ${media}`

    }else if (media < 50){
        return `Reprovado, Média: ${media}`
    
    }

}

const validarGeneroAluno = (sexo) => {
    if(sexo === "MASCULINO"){
        return "Aluno"
    
    }else if(sexo === "FEMININO"){
        return "Aluna"
    }
    
}

const validarGeneroProf = (profSex) => {
    if(profSex === "MASCULINO"){
        return "Professor"
    
    }else if(profSex === "FEMININO"){
        return "Professora"
    }
}

const validarErros = (primeiraNota, segundaNota, terceiraNota, quartaNota) => {
    if (primeiraNota == ''
        || segundaNota == ''
        || terceiraNota == ''
        || quartaNota == '') {

        console.log('ERRO: a caixa de entrada precisa receber um valor')
        

    }  else if (primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 || segundaNota > 100 ||
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
        
        }
                
        

    }

    const dadosExame = (mediaNotaExame) => {
        if(mediaNotaExame < 5) {
            return `Reprovado, média final: ${mediaNotaExame}`
        }

        else if(mediaNotaExame >= 50){
            return `Aprovado, média final: ${mediaNotaExame}`
        }
    }

    const relatorioExibir = (sexo, profSex, nome, prof, curso, disciplina, media) => {
        return ` \n O aluno(a): ${nome} \nDo sexo: ${sexo} foi Aprovado(a)!!!
        \nTeve aula com o professor(a): ${prof}) \nDo sexo: ${profSex} 
        \nNo curso de: ${curso} \nDisciplina:${disciplina}
        \nnota: ${media}`
    }


module.exports = {
    validarErros,
    somaDasNotas,
    validarGeneroAluno,
    validarGeneroProf,
    relatorioExibir,
    dadosExame,
    validarErros,
    calcular
}

