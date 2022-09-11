import PokemonItem from "./PokemonItem"
import { generateRandomNumberForPlayer } from "../../utils/rnd-number"
import { useState } from "react"
import { useStore } from "../../store/pokemonStore"
import { useRouter } from "next/router"
import { Player } from "../../types"

const PokemonPicker = () => {
  const [
    isFirstPokemonChooserForBattleSet,
    setIsFirstPokemonChooserForBattleSet,
  ] = useState<Player>()
  const getPlayerPokemons = useStore((state) => state.playerPokemons)
  const router = useRouter()

  const firstPlayerPokemonsLength = getPlayerPokemons.firstPlayer.length
  const secondPlayerPokemonsLength = getPlayerPokemons.secondPlayer.length

  const generatedPokemonsCombined = () => {
    const firstPlayerPokemons = getPlayerPokemons.firstPlayer.map(
      (p) => p.pokemonId
    )
    const secondPlayerPokemons = getPlayerPokemons.secondPlayer.map(
      (p) => p.pokemonId
    )
    return [...firstPlayerPokemons, ...secondPlayerPokemons]
  }

  const [firstPokemonId, setFirstPokemonId] = useState<number>(
    generateRandomNumberForPlayer(generatedPokemonsCombined())
  )
  const [secondPokemonId, setSecondPokemonId] = useState<number>(
    generateRandomNumberForPlayer(generatedPokemonsCombined())
  )

  if (
    (firstPlayerPokemonsLength === 5 || secondPlayerPokemonsLength === 5) &&
    !isFirstPokemonChooserForBattleSet
  ) {
    setIsFirstPokemonChooserForBattleSet(
      firstPlayerPokemonsLength === 5 ? Player.first : Player.second
    )
  }

  if (firstPlayerPokemonsLength === 5 && secondPlayerPokemonsLength === 5) {
    router.push("/pokemon-battle")
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="rotate-180">
        <PokemonItem
          player={Player.first}
          pokemonId={firstPokemonId}
          chosenNumber={firstPlayerPokemonsLength}
          generatePokemon={() =>
            setFirstPokemonId(
              generateRandomNumberForPlayer(generatedPokemonsCombined())
            )
          }
        />
      </div>
      <div className="mt-auto">
        <PokemonItem
          player={Player.second}
          pokemonId={secondPokemonId}
          chosenNumber={secondPlayerPokemonsLength}
          generatePokemon={() =>
            setSecondPokemonId(
              generateRandomNumberForPlayer(generatedPokemonsCombined())
            )
          }
        />
      </div>
    </div>
  )
}

export default PokemonPicker
