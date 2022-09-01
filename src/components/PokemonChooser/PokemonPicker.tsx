import PokemonItem from "./PokemonItem"
import { generateRandomNumber } from "../../utils/rnd-number"
import { useState } from "react"
import { useStore } from "../../store/refactoredPokemonStore"
import { useRouter } from "next/router"

const PokemonPicker: React.FC = () => {
  const [firstPokemonId, setFirstPokemonId] =
    useState<number>(generateRandomNumber)
  const [secondPokemonId, setSecondPokemonId] =
    useState<number>(generateRandomNumber)

  const getPlayerPokemons = useStore((state) => state.playerPokemons)

  const router = useRouter()
  const firstPlayerPokemonsLength = getPlayerPokemons.firstPlayer.length
  const secondPlayerPokemonsLength = getPlayerPokemons.secondPlayer.length

  if (firstPlayerPokemonsLength === 5 && secondPlayerPokemonsLength === 5) {
    router.push("/pokemon-battle")
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="rotate-180">
        <PokemonItem
          player="firstPlayer"
          pokemonId={firstPokemonId}
          chosenNumber={firstPlayerPokemonsLength}
          generatePokemon={() => setFirstPokemonId(generateRandomNumber)}
        />
      </div>
      <div className="mt-auto">
        <PokemonItem
          player="secondPlayer"
          pokemonId={secondPokemonId}
          chosenNumber={secondPlayerPokemonsLength}
          generatePokemon={() => setSecondPokemonId(generateRandomNumber)}
        />
      </div>
    </div>
  )
}

export default PokemonPicker
