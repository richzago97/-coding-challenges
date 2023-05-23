/*
    O teste de aptidão física (TAF) analisa um conjunto de variáveis a fim de
    entender se a pessoa esta ou não aprovada no teste.


    PARTE 1:

    Requisitos

    É necessário converter as distâncias para metros e tempos para segundos.

    Candidatos do sexo masculino:
    Pelo menos 1,70 de altura;
    ⁠Pelo menos 6 repetições de barra ou no máximo 15 segundos de duração;
    ⁠⁠Pelo menos 41 abdominais;
    ⁠Pelo menos 3km em no máximo 12 min de corrida ou pelo menos 5km em no máximo 
    20 min de corrida;
    ⁠Pelo menos 100m em no máximo de 1 min de natação ou no máximo 30s de mergulho.
    Candidatos do sexo feminino:
    Pelo menos 1,60 de altura;
    Pelo menos 5 repetições de barra ou no máximo 12 segundos de duração;
    Pelo menos 41 abdominais;
    Pelo menos 4km em no máximo 15 min de corrida ou pelo menos 6km em no máximo 
    22 min de corrida;
    Pelo menos 100m em no máximo 1 min de natação ou no máximo 30s de mergulho.

    PARTE 2:

    Requisitos

    Separar as validações de cada uma dessas variáveis em funções:
        Abs
        Swim
        Height
        BarTest
        Run
    Implementar a função areCandidateResultsValid() já declarada no template, 
    utilizando as demais funções implementadas;
    Implementar uma função que mostra no console a saída em caixa alta, 
    independente de como o parâmetro seja passado, a assinatura 
    da função é: showMessage(message).
*/

// Implemente aqui as funções

function areCandidateResultsValid() {}

/*
    male 1.70 6 15 41 3000 720 720 60 20 true
    male 1.75 8 20 42 4000 720 600 60 20 true
    male 1.80 12 25 45 5000 600 550 50 15 true
    male 1.75 10 20 40 3000 720 700 60 20 false
    male 1.70 6 14 41 4000 720 650 60 25 true
    female 1.60 5 12 41 4000 900 900 70 30 true
    female 1.65 6 13 42 4000 840 800 65 25 true
    female 1.70 7 15 45 3000 720 700 60 20 false
    female 1.65 5 12 39 4000 960 900 72 30 false
    female 1.60 4 10 38 5000 1020 800 75 35 false
    male 1.75 6 20 42 3000 720 600 60 20 true
    male 1.70 7 15 41 4000 780 700 65 25 false
    male 1.80 8 17 39 5000 900 800 70 30 false
    male 1.75 9 19 41 4000 840 700 68 28 false
    male 1.70 6 14 40 3000 720 800 65 25 false
    female 1.60 5 11 41 3000 960 900 75 35 false
    female 1.65 6 12 42 4000 900 800 60 30 true
    female 1.70 7 14 45 3000 780 700 65 25 false
    female 1.65 4 10 39 5000 1020 800 72 32 false
    female 1.60 3 8 38 4000 1080 900 77 40 false
*/
