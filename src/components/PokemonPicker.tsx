import PokemonItem from "./PokemonItem"
import { generateRandomNumber } from "../utils/rnd-number"
import { useState } from "react"
import { useStore } from "../store/pokemonStore"

const PokemonPicker = () => {
  const [firstPokemonId, setFirstPokemonId] =
    useState<number>(generateRandomNumber)
  const [secondPokemonId, setSecondPokemonId] =
    useState<number>(generateRandomNumber)

  const getFirstPlayerPokemons = useStore(
    (state) => state.firstPlayerPokemonIds
  )

  const getSecondPlayerPokemons = useStore(
    (state) => state.secondPlayerPokemonIds
  )

  return (
    <div className="flex flex-col h-screen">
      <div className="rotate-180">
        <PokemonItem
          player
          pokemonId={firstPokemonId}
          chosenNumber={getFirstPlayerPokemons.length}
          generatePokemon={() => setFirstPokemonId(generateRandomNumber)}
        />
      </div>
      <div className="mt-auto">
        <PokemonItem
          player={false}
          pokemonId={secondPokemonId}
          chosenNumber={getSecondPlayerPokemons.length}
          generatePokemon={() => setSecondPokemonId(generateRandomNumber)}
        />
      </div>
    </div>
  )
}

export default PokemonPicker
