import create from "zustand"
import { Player, PokemonSets } from "../types"

export const useStore = create<PokemonSets>((set) => ({
  playerPokemons: {
    firstPlayer: [],
    secondPlayer: [],
  },
  playerChoosingPokemons: null,
  battleState: {
    firstPlayer: {
      pokemonId: null,
      points: 0,
    },
    secondPlayer: {
      pokemonId: null,
      points: 0,
    },
    isInBattle: false,
  },
  setPlayerChoosingPokemons: (player) =>
    set(() => ({ playerChoosingPokemons: player })),
  selectPokemonForBattle: (player, pokemonId) =>
    set((state) => ({
      battleState: {
        ...state.battleState,
        [player]: {
          ...state.battleState[player],
          pokemonId: pokemonId,
        },
      },
    })),
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
