/*
  Escreva uma função chamada renderUpToTwenty. Quando a função for chamada, os números de 0 a 20 
  devem ser impressos no console.
*/
export const renderUpToTwenty = () => {
    for(let i = 0; i <= 20; i++){
        console.log(i)
    }
}

export const renderUpToTwenty2 = () => {
    let number = 0
    while(number <= 20){
        console.log(number++)
    }
}

/*
  Escreva uma função chamada tenInTenToAHundred(). Quando a função for chamada, os números de 
  10 a 100, contando de 10 em 10, devem ser impressos no console.
*/

export const tenInTenToAHundred = () => {
    for(let i = 10; i <= 100; i += 10){
        console.log(i)
    }
}

/*
  Escreva uma função chamada oddUpToTwenty(). Quando a função for chamada, apresente no console 
  os valores entre 0 e 20 que forem ímpares.
*/

export const oddUpToTwenty = (): void => {
    for (let i = 1; i <= 20; i += 2) {
      console.log(i);
    }
  };

/*
  Escreva uma função chamada evenUpToTwenty(). Quando a função for chamada, apresente no console 
  os valores entre 0 e 20 que forem pares.
*/

export const evenUpToTwenty = (): void => {
    for (let i = 0; i <= 20; i += 2) {
      console.log(i);
    }
  };

  