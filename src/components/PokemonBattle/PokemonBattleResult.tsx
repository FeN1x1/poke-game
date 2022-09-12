import { useQuery, useQueryClient } from "react-query"
import { useStore } from "../../store/pokemonStore"
import { useGetFetchQuery } from "../hooks/useGetFetchQuery"
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

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  const battleResults = (p1Stats: number, p2Stats: number) => {
    let statement = ""
    if (p1Stats > p2Stats) {
      statement += "First"
      setPlayerWinningRound(Player.first)
    }
    if (p2Stats > p1Stats) {
      statement += "Second"
      setPlayerWinningRound(Player.first)
    }
    if (p2Stats === p1Stats) {
      setPlayerWinningRound(Player.first)
      setPlayerWinningRound(Player.second)
      return "It's a tie! Both players get a point"
    }
    statement += " player won the round and get's a point!"
    return statement
  }

  if (counter === 0) {
    toggleBattleState()
    removePlayersChoosingPokemons()
    router.push("/pokemon-battle")
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
          <div>
            {battleResults(
              secondPlayerPokemon.base_experience,
              firstPlayerPokemon.base_experience
            )}
          </div>
          Next round in: {counter}
        </>
      )}
    </div>
  )
}

export default PokemonBattleResult
