const botaoGerar6 = document.getElementById("botao-gerar6")
const botaoGerar10 = document.getElementById("botao-gerar10")
const numbersContainer = document.getElementById("numeros")
// const resultInput = document.getElementById("result-input")
// const resultContainer = document.getElementById("result-container")

botaoGerar6.addEventListener("click", () => {
  numbersContainer.innerHTML = ""
  renderizarNumeros(numerosAleatorios(6), numbersContainer)
})

botaoGerar10.addEventListener("click", () => {
  numbersContainer.innerHTML = ""
  renderizarNumeros(numerosAleatorios(10), numbersContainer)
})

// resultInput.addEventListener("input", compareNumbers)

// function compareNumbers() {
//   resultContainer.innerHTML = ""
//   const updatedResult = extractNumbers(resultInput)
//   const matchCount = countMatchingNumbers(generatedNumbers, updatedResult)
//   renderMatchCount(matchCount, resultContainer)
// }

function numerosAleatorios(num) {
  let lista = []

  while(lista.length < num){
    numero = new Uint8Array(1)
    window.crypto.getRandomValues(numero)

    if((numero >= 1 && numero <= 60) && !lista.includes(numero[0])) lista.push(numero[0])
  }

  return lista.sort((a, b) => a - b)
}



// function extractNumbers(element) {
//   const numbersString = element.innerHTML || element.value
//   const numbers = numbersString
//     .split(",")
//     .map((string) => parseInt(string.trim()))
//     .filter((number) => !isNaN(number))
//   return numbers.sort((a, b) => a - b)
// }

function renderizarNumeros(numbers, container) {
  const numberElement = document.createElement("p")
  numberElement.innerHTML = numbers.join(" - ")
  container.appendChild(numberElement)
}

// function countMatchingNumbers(drawnNumbers, result) {
//   let matchCount = 0
//   for (const number of drawnNumbers) {
//     if (result.includes(number)) {
//       matchCount++
//     }
//   }
//   return matchCount
// }

// function renderMatchCount(count, container) {
//   const resultElement = document.createElement("div")
//   resultElement.innerHTML = `Você acertou ${count} números.`
//   container.appendChild(resultElement)
// }
