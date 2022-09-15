import { useQuery } from "react-query"
import { Card, Button } from "konsta/react"
import { Player, Pokemon } from "../../types"
import { pokemonTypesMap } from "../../types/staticData"
import PokemonType from "../PokemonType"
import { useStore } from "../../store/pokemonStore"
import { Haptics, ImpactStyle } from "@capacitor/haptics"
import autoAnimate from "@formkit/auto-animate"
import { useRef, useEffect } from "react"
import PokemonChose from "../PokemonPickStatus"
import { useGetPokemon } from "../hooks/useGetPokemon"

const pokemonChosenText =
  "You've chosen all 5 pokemons. Please wait for other player to choose theirs"

const PokemonItem: React.FC<{
  player: Player
  pokemonId: number
  chosenNumber: number
  generatePokemon: () => void
}> = ({ player, pokemonId, chosenNumber, generatePokemon }) => {
  const pokemonCardRef = useRef(null)

  const { data, error, status } = useGetPokemon(pokemonId)

  const addPokemonToPlayer = useStore((state) => state.addPokemonToPlayer)

  const playerChoosingPokemons = useStore(
    (state) => state.playerChoosingPokemons
  )
  const setPlayerChoosingPokemons = useStore(
    (state) => state.setPlayerChoosingPokemons
  )

  useEffect(() => {
    pokemonCardRef.current && autoAnimate(pokemonCardRef.current)
  }, [pokemonCardRef])

  useEffect(() => {
    if (chosenNumber === 5) {
      if (!playerChoosingPokemons) {
        setPlayerChoosingPokemons(
          player === Player.first ? Player.second : Player.first
        )
      }
    }
  })

  const takePokemonAndSaveState = async (pokemonName: string) => {
    await Haptics.impact({ style: ImpactStyle.Medium })
    addPokemonToPlayer(player, pokemonId, pokemonName)
    generatePokemon()
  }

  const areAllPokemonsChosen = () => {
    if (chosenNumber === 5) {
      return <PokemonChose text={pokemonChosenText} />
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
