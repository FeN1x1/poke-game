// Konsta UI components
import { Page } from "konsta/react"
import type { NextPage } from "next"
import PokemonPicker from "../components/PokemonPicker"

const Home: NextPage = () => {
  return (
    <Page>
      <PokemonPicker />
    </Page>
  )
}

export default Home
