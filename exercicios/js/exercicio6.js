//Definição de variáveis para homens e mulheres
let Homens = 0;
let Mulheres = 0;

//Definindo o for para inserir os valores
for (let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros):"));
  let peso = parseFloat(prompt("Digite o peso da pessoa " + i + " (em kg):"));
  let sexo = prompt("Digite o sexo da pessoa " + i + " (M para masculino ou F para feminino):");

  // função para calcular o IMC
  let imc = peso / (altura * altura);

  document.write("<p>Pessoa " + i + ":<br>" +
                 "Altura: " + altura.toFixed(2) + "m<br>" +
                 "Peso: " + peso.toFixed(2) + "kg<br>" +
                 "Sexo: " + sexo.toUpperCase() + "<br>" +
                 "IMC: " + imc.toFixed(2) + "</p>");

    // selecionar qual é o sexo da pessoa
  if (sexo.toUpperCase() === "M") {
    Homens++;
  } else if (sexo.toUpperCase() === "F") {
    Mulheres++;
  }
}

// exibir numero de homens e mulheres
document.write("<p>Número de homens: " + numHomens + "</p>");
document.write("<p>Número de mulheres: " + numMulheres + "</p>");