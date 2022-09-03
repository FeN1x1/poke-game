import { PlayerPokemons, PokemonInfo } from "../types"

export const generateRandomNumber = (pokeGeneration: number) => {
  return Math.floor(Math.random() * pokeGeneration + 1)
}

export const generateRandomNumberForPlayer = (generatedPokemons: number[]) => {
  let generatedPokemon = generateRandomNumber(150)

  do {
    generatedPokemon = generateRandomNumber(150)
  } while (generatedPokemons.includes(generatedPokemon))

  return generatedPokemon
}
