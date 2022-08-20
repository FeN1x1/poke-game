import { useQuery } from "react-query"
import { Card, Link } from "konsta/react"
import { Pokemon } from "../types"
import PokemonDescription from "./PokemonDescription"

const PokemonItem: React.FC<{ pokemonId: number }> = ({ pokemonId }) => {
  const fetchPokemon = async (number: number): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    return await response.json()
  }
  const { data, error, status } = useQuery(
    ["pokemon", pokemonId],
    () => fetchPokemon(pokemonId),
    { staleTime: Infinity }
  )

  return (
    <div>
      <Card
        header={
          <div
            className="capitalize -mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${data?.sprites.other["official-artwork"].front_default})`,
            }}
          >
            {data?.name}
          </div>
        }
        footer={
          <div className="flex justify-between">
            <Link>Like</Link>
            <Link>Read more</Link>
          </div>
        }
      >
        <div className="text-gray-500 mb-3">Posted on January 21, 2021</div>
        <PokemonDescription pokemonId={pokemonId} />
      </Card>
    </div>
  )
}

export default PokemonItem
