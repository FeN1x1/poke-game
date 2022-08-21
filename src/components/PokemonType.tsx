import { PokemonType } from "../types"
import { pokemonTypesMap } from "../types"

const PokemonType: React.FC<{ pokemonTypes: PokemonType[] }> = ({
  pokemonTypes,
}) => {
  const getClassForType = (type: string) => {
    return `${pokemonTypesMap.get(type)} font-semibold py-1 px-3 rounded-full`
  }

  return (
    <div className="flex gap-2">
      {pokemonTypes &&
        pokemonTypes.map((t, index) => {
          return (
            <div key={index} className={getClassForType(t.type.name)}>
              {t.type.name}
            </div>
          )
        })}
    </div>
  )
}

export default PokemonType
