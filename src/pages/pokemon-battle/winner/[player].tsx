import { useRouter } from "next/router"

const winner = () => {
  const router = useRouter()
  const { player } = router.query

  return <div>{player} won the game! Congrats</div>
}

export default winner
