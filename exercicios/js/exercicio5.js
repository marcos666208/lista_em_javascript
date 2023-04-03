// Janela para interação do usuário e ja definindo qual tipo de valor será usado para o calculo
let num = prompt("Digite um número inteiro:");
num = parseInt(num);

let raizQuadrada = Math.sqrt(num);
let raizCubica = Math.cbrt(num);
let potencia = Math.pow(num, 2);

alert("Raiz quadrada de: " + num + " é: " + raizQuadrada + "\n" +
      "Raiz cúbica de " + num + " é: " + raizCubica + "\n" +
      num + " elevado a potência 2 é: " + potencia);