import PokemonItem from "./PokemonItem"
import { generateRandomNumber } from "../utils/rnd-number"
import { useState } from "react"
import { useStore } from "../store/pokemonStore"

const PokemonPicker = () => {
  const [firstPokemonId, setFirstPokemonId] =
    useState<number>(generateRandomNumber)
  const [secondPokemonId, setSecondPokemonId] =
    useState<number>(generateRandomNumber)
  const addPokemonToFirstPlayer = useStore(
    (state) => state.addPokemonToFirstPlayer
  )

  const addPokemonToSecondPlayer = useStore(
    (state) => state.addPokemonToSecondPlayer
  )

  const firstPlayerTakePokemon = () => {
    addPokemonToFirstPlayer(firstPokemonId)
    setFirstPokemonId(generateRandomNumber)
  }

  const secondPlayerTakePokemon = () => {
    addPokemonToSecondPlayer(secondPokemonId)
    setSecondPokemonId(generateRandomNumber)
  }

  // const getFirstPlayerPokemons = useStore(
  //   (state) => state.firstPlayerPokemonIds
  // )

  // console.log(getFirstPlayerPokemons)

  return (
    <div className="flex flex-col h-screen">
      <div className="rotate-180">
        <PokemonItem
          pokemonId={firstPokemonId}
          takePokemon={firstPlayerTakePokemon}
          tryAnotherPokemon={() => setFirstPokemonId(generateRandomNumber)}
        />
      </div>
      <div className="mt-auto">
        <PokemonItem
          pokemonId={secondPokemonId}
          takePokemon={secondPlayerTakePokemon}
          tryAnotherPokemon={() => setSecondPokemonId(generateRandomNumber)}
        />
      </div>
    </div>
  )
}

export default PokemonPicker
