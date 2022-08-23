import create from "zustand"

interface PokemonSets {
  firstPlayerPokemonIds: PokemonInfo[]
  secondPlayerPokemonIds: PokemonInfo[]
  addPokemonToFirstPlayer: (pokemonId: number, pokemonName: string) => void
  addPokemonToSecondPlayer: (pokemonId: number, pokemonName: string) => void
}

type PokemonInfo = {
  pokemonId: number
  pokemonName: string
}

export const useStore = create<PokemonSets>((set) => ({
  firstPlayerPokemonIds: [],
  secondPlayerPokemonIds: [],
  addPokemonToFirstPlayer: (pokemonId, pokemonName) => {
    set((state) => ({
      firstPlayerPokemonIds: [
        ...state.firstPlayerPokemonIds,
        {
          pokemonId,
          pokemonName,
        },
      ],
    }))
  },
  addPokemonToSecondPlayer: (pokemonId, pokemonName) => {
    set((state) => ({
      secondPlayerPokemonIds: [
        ...state.secondPlayerPokemonIds,
        {
          pokemonId,
          pokemonName,
        },
      ],
    }))
  },
}))
