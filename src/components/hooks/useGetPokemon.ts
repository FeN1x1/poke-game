import { useQuery } from "react-query"
import { Pokemon } from "../../types"

const fetchPokemon = async (number: number | null): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
  return await response.json()
}

export const useGetPokemon = (pokemonId: number | null) => {
  const { data, error, status } = useQuery(
    ["pokemon", pokemonId],
    () => fetchPokemon(pokemonId),
    { staleTime: Infinity }
  )

  return { data, error, status }
}
