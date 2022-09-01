import { useQuery } from "react-query"
import { Card, Button } from "konsta/react"
import { Pokemon } from "../../types"
import { pokemonTypesMap } from "../../types/staticData"
import PokemonType from "../PokemonType"
import { useStore } from "../../store/pokemonStore"
import { Haptics, ImpactStyle } from "@capacitor/haptics"
import autoAnimate from "@formkit/auto-animate"
import { useRef, useEffect } from "react"
import PokemonAllChosen from "./PokemonAllChosen"

const PokemonItem: React.FC<{
  player: boolean
  pokemonId: number
  chosenNumber: number
  generatePokemon: () => void
}> = ({ player, pokemonId, chosenNumber, generatePokemon }) => {
  const pokemonCardRef = useRef(null)

  const fetchPokemon = async (number: number): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    return await response.json()
  }
  const { data, error, status } = useQuery(
    ["pokemon", pokemonId],
    () => fetchPokemon(pokemonId),
    { staleTime: Infinity }
  )

  const addPokemonToFirstPlayer = useStore(
    (state) => state.addPokemonToFirstPlayer
  )

  const addPokemonToSecondPlayer = useStore(
    (state) => state.addPokemonToSecondPlayer
  )

  useEffect(() => {
    pokemonCardRef.current && autoAnimate(pokemonCardRef.current)
  }, [pokemonCardRef])

  const takePokemonAndSaveState = async (pokemonName: string) => {
    await Haptics.impact({ style: ImpactStyle.Medium })
    player
      ? addPokemonToFirstPlayer(pokemonId, pokemonName)
      : addPokemonToSecondPlayer(pokemonId, pokemonName)
    generatePokemon()
  }

  const areAllPokemonsChosen = () => {
    if (chosenNumber === 5) {
      return <PokemonAllChosen />
    }
    return (
      <div ref={pokemonCardRef}>
        {data && (
          <Card
            header={
              <div
                className="text-black text-xl capitalize -mx-4 -my-2 h-64 p-4 flex flex-col font-bold bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${data.sprites.other["official-artwork"].front_default})`,
                }}
              >
                <div className="flex">
                  <div
                    className={`${pokemonTypesMap.get(
                      data.types[0].type.name
                    )} rounded-full px-3 py-1 text-sm`}
                  >
                    {data.name}
                  </div>
                  <div className="ml-auto text-white bg-gray-600 rounded-full text-sm px-3 py-1">
                    {pokemonId}
                  </div>
                </div>
                <div className="flex relative gap-24 top-[9.6rem] ">
                  <Button
                    onClick={() => takePokemonAndSaveState(data.name)}
                    large
                    rounded
                    colors={{
                      bg: "bg-green-500",
                    }}
                  >
                    Take
                  </Button>

                  <Button
                    onClick={generatePokemon}
                    large
                    rounded
                    colors={{
                      bg: "bg-red-500",
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            }
          >
            <div className="flex justify-between">
              <PokemonType pokemonTypes={data.types} />
              <span className="my-auto text-base font-semibold">
                {chosenNumber} out of 5
              </span>
            </div>
          </Card>
        )}
      </div>
    )
  }

  return <>{areAllPokemonsChosen()}</>
}

export default PokemonItem
