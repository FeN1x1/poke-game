import create from "zustand"
import { Player, PokemonSets } from "../types"

export const useStore = create<PokemonSets>((set) => ({
  playerPokemons: {
    firstPlayer: [],
    secondPlayer: [],
  },
  firstToChoosePokemonToBattle: null,
  setFirstToChoosePokemonToBattle: (player) =>
    set(() => ({ firstToChoosePokemonToBattle: player })),
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
