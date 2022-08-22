export const generateRandomFirstGenPokemonIds = () => {
  const firstNumber = generateRandomNumber()
  let secondNumber = generateRandomNumber()

  do {
    secondNumber = generateRandomNumber()
  } while (firstNumber === secondNumber)
  return [firstNumber, secondNumber]
}

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 150 + 1)
}
