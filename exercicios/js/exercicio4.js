document.write("<h1><center>Os Primeiros 15 numeros da sequencia fibonacci</center></h1>")
// Definindo Variáveis
n1 = 0
n2 = 1

// For para a realização do calculo
for(var i = 1; i <= 15; i++){
    soma = n1 + n2
    n1 = n2 + soma
    document.write("<b>Número: </b>", n1 , "<br><br>");
}