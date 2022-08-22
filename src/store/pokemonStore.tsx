import create from "zustand"

interface PokemonSets {
  firstPlayerPokemonIds: Number[]
  secondPlayerPokemonIds: Number[]
  addPokemonToFirstPlayer: (pokemonId: number) => void
  addPokemonToSecondPlayer: (pokemonId: number) => void
}

export const useStore = create<PokemonSets>((set) => ({
  firstPlayerPokemonIds: [] as Number[],
  secondPlayerPokemonIds: [] as Number[],
  addPokemonToFirstPlayer: (pokemonId: number) => {
    set((state) => ({
      firstPlayerPokemonIds: [...state.firstPlayerPokemonIds, pokemonId],
    }))
  },
  addPokemonToSecondPlayer: (pokemonId: number) => {
    set((state) => ({
      secondPlayerPokemonIds: [...state.secondPlayerPokemonIds, pokemonId],
    }))
  },
}))
