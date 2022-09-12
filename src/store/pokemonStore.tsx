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
  addPointToPlayer: (player) =>
    set((state) => ({
      battleState: {
        ...state.battleState,
        [player]: {
          ...state.battleState[player],
          points: state.battleState[player].points + 1,
        },
      },
    })),
  removePlayersChoosingPokemons: () => {
    set((state) => ({
      battleState: {
        ...state.battleState,
        firstPlayer: {
          ...state.battleState.firstPlayer,
          pokemonId: null,
        },
        secondPlayer: {
          ...state.battleState.secondPlayer,
          pokemonId: null,
        },
      },
    }))
  },
  toggleBattleState: () => {
    set((state) => ({
      battleState: {
        ...state.battleState,
        isInBattle: (state.battleState.isInBattle =
          !state.battleState.isInBattle),
      },
    }))
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
