import { useQuery } from "react-query"
import { Card, Link } from "konsta/react"
import { Pokemon, pokemonTypesMap } from "../types"
import PokemonType from "./PokemonType"

const PokemonItem: React.FC<{
  pokemonId: number
  tryAnotherPokemon: () => void
  takePokemon: () => void
}> = ({ pokemonId, tryAnotherPokemon, takePokemon }) => {
  const fetchPokemon = async (number: number): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    return await response.json()
  }
  const { data, error, status } = useQuery(
    ["pokemon", pokemonId],
    () => fetchPokemon(pokemonId),
    { staleTime: Infinity }
  )

  const setPokemonNameBackgroundColor = (type: string) => {
    return `${pokemonTypesMap.get(type)} rounded-full px-3 py-1 text-sm`
  }

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
              <div
                className={setPokemonNameBackgroundColor(
                  data.types[0].type.name
                )}
              >
                {data.name}
              </div>
              <div className="ml-auto relative bottom-32 text-white bg-gray-600 rounded-full text-sm px-3 py-1">
                {pokemonId}
              </div>
            </div>
          }
          footer={
            <div className="flex justify-between">
              <Link onClick={takePokemon}>Take</Link>
              <Link onClick={tryAnotherPokemon}>Gimme anotha one</Link>
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
