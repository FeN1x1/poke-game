import PokemonItem from "./PokemonItem"

const PokemonPicker = () => {
  return (
    <div>
      <div className="rotate-180">
        <PokemonItem pokemonId={1} />
      </div>

      <PokemonItem pokemonId={2} />
    </div>
  )
}

export default PokemonPicker
