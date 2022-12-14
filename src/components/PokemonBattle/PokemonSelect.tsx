import { PokemonInfo } from "../../types"
import { Radio, Button, List, ListItem } from "konsta/react"

const PokemonSelect: React.FC<{
  selectedPokemon: number | null
  selectPokemon: (pokemonId: number) => void
  pokemons: PokemonInfo[]
  choosePokemon: () => void
}> = ({ selectedPokemon, selectPokemon, pokemons, choosePokemon }) => {
  return (
    <>
      <List className="p-2 rounded shadow">
        {pokemons &&
          pokemons.map((p) => (
            <ListItem
              key={p.pokemonId}
              label
              title={p.pokemonName}
              media={
                <Radio
                  component="div"
                  value={p.pokemonId}
                  checked={selectedPokemon === p.pokemonId}
                  onChange={() => selectPokemon(p.pokemonId)}
                />
              }
            />
          ))}
        <div className="p-4">
          <Button
            onClick={choosePokemon}
            outline
            className="py-5"
            colors={{
              text: "text-red-500",
              border: "border-red-500",
              bg: "bg-red-500",
              activeBg: "active:bg-red-500",
              activeBgDark: "active:bg-red-600",
              touchRipple: "touch-ripple-red-500",
            }}
          >
            Choose pokemon N.{selectedPokemon}
          </Button>
        </div>
      </List>
    </>
  )
}

export default PokemonSelect
