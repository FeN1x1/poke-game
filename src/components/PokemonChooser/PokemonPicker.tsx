import PokemonItem from "./PokemonItem"
import { generateRandomNumber } from "../../utils/rnd-number"
import { useState } from "react"
import { useStore } from "../../store/pokemonStore"
import { useRouter } from "next/router"

const PokemonPicker = () => {
  const [firstPokemonId, setFirstPokemonId] =
    useState<number>(generateRandomNumber)
  const [secondPokemonId, setSecondPokemonId] =
    useState<number>(generateRandomNumber)

  const getFirstPlayerPokemons = useStore((state) => state.firstPlayerPokemons)

  const getSecondPlayerPokemons = useStore(
    (state) => state.secondPlayerPokemons
  )

  const router = useRouter()
  const firstPlayerPokemonsCount = getFirstPlayerPokemons.length
  const secondPlayerPokemonsCount = getSecondPlayerPokemons.length

  if (firstPlayerPokemonsCount === 5 && secondPlayerPokemonsCount === 5) {
    router.push("/pokemon-battle")
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="rotate-180">
        <PokemonItem
          player
          pokemonId={firstPokemonId}
          chosenNumber={firstPlayerPokemonsCount}
          generatePokemon={() => setFirstPokemonId(generateRandomNumber)}
        />
      </div>
      <div className="mt-auto">
        <PokemonItem
          player={false}
          pokemonId={secondPokemonId}
          chosenNumber={secondPlayerPokemonsCount}
          generatePokemon={() => setSecondPokemonId(generateRandomNumber)}
        />
      </div>
    </div>
  )
}

export default PokemonPicker
