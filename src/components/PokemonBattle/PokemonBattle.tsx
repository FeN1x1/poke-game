import { useState } from "react"
import { useStore, PokemonInfo } from "../../store/pokemonStore"
import PokemonSelect from "./PokemonSelect"

const selectedPokemonsUndefined = {
  firstPlayerPokemon: undefined,
  secondPlayerPokemon: undefined,
}

const PokemonBattle = () => {
  const [firstPlayerSelectedPokemonId, setFirstPlayerSelectedPokemonId] =
    useState<number | undefined>()
  const [secondPlayerSelectedPokemonId, setSecondPlayerSelectedPokemonId] =
    useState<number | undefined>()
  const [selectedPokemons, setSelectedPokemons] = useState<{
    firstPlayerPokemon: PokemonInfo | undefined
    secondPlayerPokemon: PokemonInfo | undefined
  }>(selectedPokemonsUndefined)

  const getFirstPlayerPokemons = useStore((state) => state.firstPlayerPokemons)

  const getSecondPlayerPokemons = useStore(
    (state) => state.secondPlayerPokemons
  )

  const deletePokemonFromFirstPlayer = useStore(
    (state) => state.deletePokemonFromFirstPlayer
  )

  const deletePokemonFromSecondPlayer = useStore(
    (state) => state.deletePokemonFromSecondPlayer
  )

  const chooseFirstPlayerPokemon = () => {
    const selectedPokemon = getFirstPlayerPokemons.find(
      (p) => p.pokemonId === firstPlayerSelectedPokemonId
    )
    deletePokemonFromFirstPlayer(firstPlayerSelectedPokemonId)
    console.log("test")
  }

  const chooseSecondPlayerPokemon = () => {
    const selectedPokemon = getSecondPlayerPokemons.find(
      (p) => p.pokemonId === secondPlayerSelectedPokemonId
    )
    setSelectedPokemons({
      ...selectedPokemons,
      secondPlayerPokemon: selectedPokemon,
    })
    deletePokemonFromSecondPlayer(secondPlayerSelectedPokemonId)
  }

  if (
    selectedPokemons.firstPlayerPokemon &&
    selectedPokemons.secondPlayerPokemon
  ) {
    console.log("done")
    setSelectedPokemons(selectedPokemonsUndefined)
  }

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div className="transform rotate-180">
        {" "}
        <PokemonSelect
          selectedPokemon={firstPlayerSelectedPokemonId}
          selectPokemon={setFirstPlayerSelectedPokemonId}
          pokemons={getFirstPlayerPokemons}
          choosePokemon={chooseFirstPlayerPokemon}
        />
      </div>

      <PokemonSelect
        selectedPokemon={secondPlayerSelectedPokemonId}
        selectPokemon={setSecondPlayerSelectedPokemonId}
        pokemons={getSecondPlayerPokemons}
        choosePokemon={chooseSecondPlayerPokemon}
      />
    </div>
  )
}

export default PokemonBattle
