import PokemonItem from "./PokemonItem"

const PokemonPicker = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="rotate-180">
        <PokemonItem pokemonId={1} />
      </div>
      <div className="mt-auto">
        <PokemonItem pokemonId={2} />
      </div>
    </div>
  )
}

export default PokemonPicker
