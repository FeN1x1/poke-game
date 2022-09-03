import { useState } from "react"
import { useRouter } from "next/router"
import { useStore } from "../../store/pokemonStore"
import { Player, PlayerPokemons, PokemonInfo } from "../../types"
import PokemonSelect from "./PokemonSelect"

const selectedPokemonsUndefined = {
  firstPlayer: undefined,
  secondPlayer: undefined,
}

const PokemonBattle = () => {
  const [firstPlayerSelectedPokemonId, setFirstPlayerSelectedPokemonId] =
    useState<number | undefined>()
  const [secondPlayerSelectedPokemonId, setSecondPlayerSelectedPokemonId] =
    useState<number | undefined>()
  const [selectedPokemons, setSelectedPokemons] = useState<{
    firstPlayer: PokemonInfo | undefined
    secondPlayer: PokemonInfo | undefined
  }>(selectedPokemonsUndefined)

  const getPlayerPokemons = useStore((state) => state.playerPokemons)
  const router = useRouter()
  const deletePokemonFromPlayer = useStore(
    (state) => state.deletePokemonFromPlayer
  )

  const choosePlayerPokemon = (player: keyof PlayerPokemons) => {
    const selectedPlayerPokemon =
      player === Player.first
        ? firstPlayerSelectedPokemonId
        : secondPlayerSelectedPokemonId
    setSelectedPokemons({
      ...selectedPokemons,
      [player]: getPlayerPokemons[player].find(
        (p) => p.pokemonId === selectedPlayerPokemon
      ),
    })
    deletePokemonFromPlayer(player, selectedPlayerPokemon)
  }

  if (selectedPokemons.firstPlayer && selectedPokemons.secondPlayer) {
    setSelectedPokemons(selectedPokemonsUndefined)
    router.push("/pokemon-battle/round")
  }

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div className="transform rotate-180">
        <PokemonSelect
          selectedPokemon={firstPlayerSelectedPokemonId}
          selectPokemon={setFirstPlayerSelectedPokemonId}
          pokemons={getPlayerPokemons.firstPlayer}
          choosePokemon={() => choosePlayerPokemon(Player.first)}
        />
      </div>
      <div>
        <PokemonSelect
          selectedPokemon={secondPlayerSelectedPokemonId}
          selectPokemon={setSecondPlayerSelectedPokemonId}
          pokemons={getPlayerPokemons.secondPlayer}
          choosePokemon={() => choosePlayerPokemon(Player.second)}
        />
      </div>
    </div>
  )
}

export default PokemonBattle
