import { useQuery } from "react-query"
import { Card, Link } from "konsta/react"
import { Pokemon } from "../types"
import PokemonType from "./PokemonType"

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
      {data && (
        <Card
          header={
            <div
              className="text-black text-xl capitalize -mx-4 -my-2 h-48 p-4 flex items-end font-bold bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${data.sprites.other["official-artwork"].front_default})`,
              }}
            >
              <div className="relative bottom-[8.7rem]">{data.name}</div>
            </div>
          }
          footer={
            <div className="flex justify-between">
              <Link>Like</Link>
              <Link>Read more</Link>
            </div>
          }
        >
          <PokemonType pokemonTypes={data.types} />
        </Card>
      )}
    </div>
  )
}

export default PokemonItem
