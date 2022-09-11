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
  const getPlayerPokemons = useStore((state) => state.playerPokemons)
  const selectPokemon = (pokemonId: number) => {
    setSelectedPlayerPokemon(pokemonId)
  }
  const [chosenPlayer, setChosenPlayer] = useState<Player>(Player.first)
  const [isAlreadyChosenPlayer, setIsAlreadyChosenPlayer] =
    useState<boolean>(false)
  const router = useRouter()

  const firstPlayerToChoosePokemons = useStore(
    (state) => state.firstToChoosePokemonToBattle
  )

  const choosePokemon = () => {
    router.push("/pokemon-battle")
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
      <Navbar title="Player pokemon selection" />

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
