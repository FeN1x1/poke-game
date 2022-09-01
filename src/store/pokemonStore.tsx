import create from "zustand"

interface PokemonSets {
  firstPlayerPokemons: PokemonInfo[]
  secondPlayerPokemons: PokemonInfo[]
  addPokemonToFirstPlayer: (pokemonId: number, pokemonName: string) => void
  addPokemonToSecondPlayer: (pokemonId: number, pokemonName: string) => void
  deletePokemonFromFirstPlayer: (pokemonId: number | undefined) => void
  deletePokemonFromSecondPlayer: (pokemonId: number | undefined) => void
}

export type PokemonInfo = {
  pokemonId: number
  pokemonName: string
}

export const useStore = create<PokemonSets>((set) => ({
  firstPlayerPokemons: [],
  secondPlayerPokemons: [],
  addPokemonToFirstPlayer: (pokemonId, pokemonName) => {
    set((state) => ({
      firstPlayerPokemons: [
        ...state.firstPlayerPokemons,
        {
          pokemonId,
          pokemonName,
        },
      ],
    }))
  },
  addPokemonToSecondPlayer: (pokemonId, pokemonName) => {
    set((state) => ({
      secondPlayerPokemons: [
        ...state.secondPlayerPokemons,
        {
          pokemonId,
          pokemonName,
        },
      ],
    }))
  },
  deletePokemonFromFirstPlayer: (pokemonId) => {
    set((state) => ({
      firstPlayerPokemons: state.firstPlayerPokemons.filter(
        (p) => p.pokemonId !== pokemonId
      ),
    }))
  },
  deletePokemonFromSecondPlayer: (pokemonId) => {
    set((state) => ({
      secondPlayerPokemons: state.secondPlayerPokemons.filter(
        (p) => p.pokemonId !== pokemonId
      ),
    }))
  },
}))
