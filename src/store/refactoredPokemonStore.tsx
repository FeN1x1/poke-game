import create from "zustand"
import { PokemonSets } from "../types"

export const useStore = create<PokemonSets>((set) => ({
  playerPokemons: {
    firstPlayer: [],
    secondPlayer: [],
  },
  addPokemonToPlayer: (player, pokemonId, pokemonName) => {
    set((state) => ({
      playerPokemons: {
        ...state.playerPokemons,
        [player]: [
          ...state.playerPokemons[player],
          {
            pokemonId,
            pokemonName,
          },
        ],
      },
    }))
  },
  deletePokemonFromPlayer: (player, pokemonId) => {
    set((state) => ({
      playerPokemons: {
        ...state.playerPokemons,
        [player]: state.playerPokemons[player].filter(
          (p) => p.pokemonId !== pokemonId
        ),
      },
    }))
  },
}))
