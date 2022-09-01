import { PokemonType } from "../types"
import { pokemonTypesMap } from "../types/staticData"

const PokemonType: React.FC<{ pokemonTypes: PokemonType[] }> = ({
  pokemonTypes,
}) => {
  return (
    <div className="flex gap-2">
      {pokemonTypes &&
        pokemonTypes.map((t, index) => {
          return (
            <div
              key={index}
              className={`${pokemonTypesMap.get(
                t.type.name
              )} font-semibold py-1 px-3 rounded-full`}
            >
              {t.type.name}
            </div>
          )
        })}
    </div>
  )
}

export default PokemonType
