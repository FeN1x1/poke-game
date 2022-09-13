// import { useQuery, useQueryClient } from "react-query"
import { useStore } from "../../store/pokemonStore"
// import { useGetFetchQuery } from "../hooks/useGetFetchQuery"
import { Player, Pokemon } from "../../types"
import { useGetPokemon } from "../hooks/useGetPokemon"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const PokemonBattleResult = () => {
  const [counter, setCounter] = useState(10)
  const [playerWinningRound, setPlayerWinningRound] = useState<Player | null>(
    null
  )

  const battleState = useStore((state) => state.battleState)

  const { data: firstPlayerPokemon } = useGetPokemon(
    battleState.firstPlayer.pokemonId
  )
  const { data: secondPlayerPokemon } = useGetPokemon(
    battleState.secondPlayer.pokemonId
  )
  const router = useRouter()
  const toggleBattleState = useStore((state) => state.toggleBattleState)
  const removePlayersChoosingPokemons = useStore(
    (state) => state.removePlayersChoosingPokemons
  )
  const setPlayerChoosingPokemons = useStore(
    (state) => state.setPlayerChoosingPokemons
  )
  const addPointToPlayer = useStore((state) => state.addPointToPlayer)

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  useEffect(() => {
    if (firstPlayerPokemon && secondPlayerPokemon) {
      if (
        firstPlayerPokemon.base_experience > secondPlayerPokemon.base_experience
      ) {
        setPlayerWinningRound(Player.first)
      } else if (
        secondPlayerPokemon.base_experience > firstPlayerPokemon.base_experience
      ) {
        setPlayerWinningRound(Player.second)
      }
    }
  }, [firstPlayerPokemon, secondPlayerPokemon])

  const battleResults = () => {
    let statement = ""
    if (playerWinningRound === Player.first) {
      statement += "First"
    }
    if (playerWinningRound === Player.second) {
      statement += "Second"
    }
    // if (p2Stats === p1Stats) {
    //   return "It's a tie! Both players get a point"
    // }
    statement += " player won the round and get's a point!"
    return statement
  }

  const calculatePlayerWinningCurrentRound = () => {}

  if (counter === 0 && battleState.firstPlayer.pokemonId !== null) {
    toggleBattleState()
    removePlayersChoosingPokemons()
    setPlayerChoosingPokemons(playerWinningRound)
    if (
      secondPlayerPokemon?.base_experience ===
      firstPlayerPokemon?.base_experience
    ) {
      addPointToPlayer(Player.first)
      addPointToPlayer(Player.second)
    } else {
      if (playerWinningRound) {
        addPointToPlayer(playerWinningRound)
      }
    }

    router.push("/pokemon-battle")
  }

  if (
    battleState.firstPlayer.points === 3 ||
    battleState.secondPlayer.points === 3
  ) {
    router.push({
      pathname: "/pokemon-battle/winner/[player]",
      query: { player: playerWinningRound },
    })
  }

  return (
    <div>
      {firstPlayerPokemon && secondPlayerPokemon && (
        <>
          <div>
            First Player:
            <div className="capitalize">{`${firstPlayerPokemon.name}: ${firstPlayerPokemon.base_experience}`}</div>
          </div>
          <div className="my-8"></div>
          <div>
            Second Player:
            <div className="capitalize">{`${secondPlayerPokemon.name}: ${secondPlayerPokemon.base_experience}`}</div>
          </div>
          <div className="my-8"></div>
          <div>{battleResults()}</div>
          Next round in: {counter}
        </>
      )}
    </div>
  )
}

export default PokemonBattleResult
