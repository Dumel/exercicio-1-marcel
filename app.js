/*
* OBJETIVO: Criar um sistema que gerencie as médias escolares de uma universidade.
* DATA: 10/02/2023
* AUTOR: MELQUI
* VERSÃO: 1.0
*/

// const nota = function(nomeAluno, nomeProf) {
//     let aluno = nomeAluno;
//     let prof = nomeProf;
//     let homem =  masculino, feminino;
// }

console.log('Resultado do ano')

const { stdin, stdout } = require('process')


var readline = require('readline');

const validar = require('./validar')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Qual é o nome do aluno?\n', function (nome) {
    let nomeAluno = nome;

    entradaDados.question('Qual o seu sexo? ', function (sexo) {
        let sexDoAluno = sexo.toUpperCase
        const alunoSex = validar.validarGeneroAluno(sexDoAluno)

        entradaDados.question('Qual é o nome do professor?\n', function (prof) {
            let nomeProf = prof;

            entradaDados.question('Qual o gênero do seu profº?:\n', function(profSex){
                let sexDoProfessor = profSex.toLowerCase
                const proSex = validar.validarGeneroProf(sexDoProfessor)

                entradaDados.question('Qual é o nome do curso?\n', function (curso) {
                    let curso1 = curso;
    
                    entradaDados.question('Qual é a disciplina?\n', function (disciplina) {
                        let disciplina1 = disciplina;
    
                        entradaDados.question('Nota-1:\n', function (nota1) {
                            let primeiraNota = Number (nota1);
    
                            entradaDados.question('Nota-2:\n', function (nota2) {
                                let segundaNota = Number (nota2);
    
                                entradaDados.question('Nota-3:\n', function (nota3) {
                                    let terceiraNota = Number (nota3);
    
                                    entradaDados.question('Nota-4:\n', function (nota4) {
                                        let quartaNota = Number (nota4);
                                        
                                        const erros = validar.validarErros(primeiraNota, segundaNota, terceiraNota, quartaNota)
                                        
                                        const relatorioMostrar = validar.relatorioExibir(sexo, profSex, nome, prof, curso, disciplina)

                                        
                                        let resultado = validar.calcular(primeiraNota, segundaNota, terceiraNota, quartaNota) 
                                        console.log(relatorioMostrar, resultado)

                                        
    
                                    })
                                })
                            })
    
                        })
    
                    })
                })
            })
                
            

            


        })
    })
})