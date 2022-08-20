import { useQuery } from "react-query"

const PokemonDescription: React.FC<{ pokemonId: number }> = ({ pokemonId }) => {
  const fetchPokemonDescription = async (number: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${number}`
    )
    return await response.json()
  }
  const { data, error, status } = useQuery(
    ["pokemonDescription", pokemonId],
    () => fetchPokemonDescription(pokemonId),
    { staleTime: Infinity }
  )

  return (
    <div className="text-lg font-semibold">
      {status === "loading" && <p>Loading...</p>}
      {error && <p>There was an error loading pokemon description</p>}
      {data && <p>{data?.flavor_text_entries[0].flavor_text}</p>}
    </div>
  )
}

export default PokemonDescription
