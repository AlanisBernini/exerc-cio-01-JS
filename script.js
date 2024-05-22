let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")


firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber


//verificar se os números são iguais ou diferentes
if (firstNumber != secondNumber) {
  alert('Os dois números inseridos são diferents')
}else{
  alert('Os dois números inseridos são iguais')
}

//soma
alert("A soma dos dois números é: " + sum)

//subtração
alert("A subtração dos dois números é: " + sub)

//multiplicação
alert("A multiplicação dos dois números é: " + multi)

//divisão
alert("A divisão dos dois números é: " + div)

//resto da divisão
alert("A o resto da divisão dos dois números é: " + restDiv)


//vericar se o número é par ou ímpar
if (sum % 2 == 0) {
  alert("A soma dos dois números par")
}else{
  alert("A soma dos dois números é ímpar")
}

if (sub % 2 == 0) {
  alert("A subtração dos dois números par")
}else{
  alert("A subtração dos dois números é ímpar")
}

if (multi % 2 == 0) {
  alert("A multiplicação dos dois números par")
}else{
  alert("A multiplicação dos dois números é ímpar")
}

if (div % 2 == 0) {
  alert("A divisão dos dois números par")
}else{
  alert("A divisão dos dois números é ímpar")
}

if (restDiv % 2 == 0) {
  alert("O resto da divisão dos dois números par")
}else{
  alert("O resto da divisão dos dois números é ímpar")
}





