// Konsta UI components
import { Page } from "konsta/react"
import type { NextPage } from "next"
// import { default as PokemonBattleComponent } from "../../components/PokemonBattle/PokemonBattle"
import PokemonBattleNew from "../../components/PokemonBattle/PokemonBattleNew"

const PokemonBattle: NextPage = () => {
  return (
    <Page>
      <PokemonBattleNew />
    </Page>
  )
}

export default PokemonBattle
