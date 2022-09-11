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

export enum Player {
  first = "firstPlayer",
  second = "secondPlayer",
}

//pokemon store

export interface PokemonSets {
  playerPokemons: PlayerPokemons
  firstToChoosePokemonToBattle: Player | null
  setFirstToChoosePokemonToBattle: (player: Player) => void
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
