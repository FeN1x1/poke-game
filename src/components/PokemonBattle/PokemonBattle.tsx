import { useState } from "react"
import { Page, Navbar, BlockTitle, List } from "konsta/react"
import PokemonSelect from "./PokemonSelect"
import { useStore } from "../../store/pokemonStore"
import { Player } from "../../types"
import { useRouter } from "next/router"

const PokemonBattle = () => {
  const [selectedPlayerPokemon, setSelectedPlayerPokemon] = useState<
    number | null
  >(null)
  const [chosenPlayer, setChosenPlayer] = useState<Player>(Player.first)
  const [isAlreadyChosenPlayer, setIsAlreadyChosenPlayer] =
    useState<boolean>(false)

  const getPlayerPokemons = useStore((state) => state.playerPokemons)
  const router = useRouter()

  const selectPokemon = (pokemonId: number) => {
    setSelectedPlayerPokemon(pokemonId)
  }

  const playerChoosingPokemons = useStore(
    (state) => state.playerChoosingPokemons
  )
  const deletePokemonFromPlayer = useStore(
    (state) => state.deletePokemonFromPlayer
  )

  const battleState = useStore((state) => state.battleState)

  const selectPokemonForBattle = useStore(
    (state) => state.selectPokemonForBattle
  )

  const choosePokemon = () => {
    selectPokemonForBattle(chosenPlayer, selectedPlayerPokemon)
    deletePokemonFromPlayer(chosenPlayer, selectedPlayerPokemon)
    setSelectedPlayerPokemon(null)
    setChosenPlayer(
      chosenPlayer === Player.first ? Player.second : Player.first
    )
    console.log(
      battleState.firstPlayer.pokemonId,
      battleState.secondPlayer.pokemonId
    )
    if (
      battleState.firstPlayer.pokemonId != null &&
      battleState.secondPlayer.pokemonId != null
    )
      router.push("/pokemon-battle/round")
  }

  if (playerChoosingPokemons === Player.first && !isAlreadyChosenPlayer) {
    setIsAlreadyChosenPlayer(true)
    setChosenPlayer(Player.first)
  } else if (
    playerChoosingPokemons === Player.second &&
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

export default PokemonBattle
