export interface Pokemon {
  name: string
  id: number
  base_experience: number
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
  stats: []
  types: PokemonType[]
}

export type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface PokemonSets {
  playerPokemons: PlayerPokemons
  addPokemonToPlayer: (
    player: keyof PlayerPokemons,
    pokemonId: number,
    pokemonName: string
  ) => void
  deletePokemonFromPlayer: (
    player: keyof PlayerPokemons,
    pokemonId: number | undefined
  ) => void
}

export type PlayerPokemons = {
  firstPlayer: PokemonInfo[]
  secondPlayer: PokemonInfo[]
}

export type PokemonInfo = {
  pokemonId: number
  pokemonName: string
}