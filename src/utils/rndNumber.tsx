const pokemonInterval = 150

const generateRandomNumber = (pokeGeneration: number) => {
  return Math.floor(Math.random() * pokeGeneration + 1)
}

export const generateRandomNumberForPlayer = (generatedPokemons: number[]) => {
  let generatedPokemon = generateRandomNumber(pokemonInterval)

  do {
    generatedPokemon = generateRandomNumber(pokemonInterval)
  } while (generatedPokemons.includes(generatedPokemon))

  return generatedPokemon
}
