import PokemonItem from "./PokemonItem"
import { generateRandomNumberForPlayer } from "../../utils/rndNumber"
import { useState } from "react"
import { useStore } from "../../store/pokemonStore"
import { useRouter } from "next/router"
import { Player } from "../../types"

const PokemonPicker = () => {
  const [
    isFirstPokemonChoosedForBattleSet,
    setIsFirstPokemonChoosedForBattleSet,
  ] = useState<Player>()
  const [firstPokemonId, setFirstPokemonId] = useState<number>(
    generateRandomNumberForPlayer([])
  )
  const [secondPokemonId, setSecondPokemonId] = useState<number>(
    generateRandomNumberForPlayer([])
  )

  const [firstPlayerRerolls, setFirstPlayerRerolls] = useState<number>(0)
  const [secondPlayerRerolls, setSecondPlayerRerolls] = useState<number>(0)
  const getPlayerPokemons = useStore((state) => state.playerPokemons)
  const router = useRouter()

  const firstPlayerPokemonsLength = getPlayerPokemons.firstPlayer.length
  const secondPlayerPokemonsLength = getPlayerPokemons.secondPlayer.length

  /*generate random pokemon that isn't already in array of picked
  pokemons or isn't already showed on screen as a possible pokemon to pick */
  const generatedPokemonsCombined = (): number[] => {
    const firstPlayerPokemons = getPlayerPokemons.firstPlayer.map(
      (p) => p.pokemonId
    )
    const secondPlayerPokemons = getPlayerPokemons.secondPlayer.map(
      (p) => p.pokemonId
    )

    return [
      ...firstPlayerPokemons,
      ...secondPlayerPokemons,
      firstPokemonId,
      secondPokemonId,
    ]
  }

  if (
    (firstPlayerPokemonsLength === 5 || secondPlayerPokemonsLength === 5) &&
    !isFirstPokemonChoosedForBattleSet
  ) {
    setIsFirstPokemonChoosedForBattleSet(
      firstPlayerPokemonsLength === 5 ? Player.first : Player.second
    )
  }

  if (firstPokemonId === secondPokemonId) {
    setSecondPokemonId(generateRandomNumberForPlayer([]))
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
          rerolls={firstPlayerRerolls}
          playerRerolled={() => setFirstPlayerRerolls(firstPlayerRerolls + 1)}
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
          rerolls={secondPlayerRerolls}
          playerRerolled={() => setSecondPlayerRerolls(secondPlayerRerolls + 1)}
        />
      </div>
    </div>
  )
}

export default PokemonPicker
