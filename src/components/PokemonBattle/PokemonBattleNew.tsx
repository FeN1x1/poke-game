import { useState } from "react"
import { Page, Navbar, BlockTitle, List } from "konsta/react"
import PokemonSelect from "./PokemonSelect"
import { useStore } from "../../store/pokemonStore"
import { Player } from "../../types"
import { useRouter } from "next/router"

const PokemonBattleNew = () => {
  const [selectedPlayerPokemon, setSelectedPlayerPokemon] = useState<
    number | undefined
  >()
  const [chosenPlayer, setChosenPlayer] = useState<Player>(Player.first)
  const [isAlreadyChosenPlayer, setIsAlreadyChosenPlayer] =
    useState<boolean>(false)

  const getPlayerPokemons = useStore((state) => state.playerPokemons)
  const router = useRouter()

  const selectPokemon = (pokemonId: number) => {
    setSelectedPlayerPokemon(pokemonId)
  }

  const firstPlayerToChoosePokemons = useStore(
    (state) => state.firstToChoosePokemonToBattle
  )
  const deletePokemonFromPlayer = useStore(
    (state) => state.deletePokemonFromPlayer
  )

  const choosePokemon = () => {
    deletePokemonFromPlayer(chosenPlayer, selectedPlayerPokemon)
    setSelectedPlayerPokemon(undefined)
    setChosenPlayer(
      chosenPlayer === Player.first ? Player.second : Player.first
    )
  }

  if (firstPlayerToChoosePokemons === Player.first && !isAlreadyChosenPlayer) {
    setIsAlreadyChosenPlayer(true)
    setChosenPlayer(Player.first)
  } else if (
    firstPlayerToChoosePokemons === Player.second &&
    !isAlreadyChosenPlayer
  ) {
    setIsAlreadyChosenPlayer(true)
    setChosenPlayer(Player.second)
  }

  return (
    <Page>
      <Navbar title={`${chosenPlayer}, select your pokemon`} />

      <BlockTitle>Available pokemon list</BlockTitle>
      <List>
        <PokemonSelect
          pokemons={getPlayerPokemons[chosenPlayer]}
          selectedPokemon={selectedPlayerPokemon}
          selectPokemon={selectPokemon}
          choosePokemon={choosePokemon}
        />
      </List>
    </Page>
  )
}

export default PokemonBattleNew
