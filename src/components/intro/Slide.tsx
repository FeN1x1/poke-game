import { Button } from "konsta/react"
import { useRouter } from "next/router"

const Slide: React.FC<{
  title: string
  text: string
  image: string
  imageAlt: string
  toPokemonChooser: boolean
}> = ({ title, text, image, imageAlt, toPokemonChooser }) => {
  const router = useRouter()

  const goToPokemonChooser = () => {
    router.push("/pokemon-chooser")
  }
  return (
    <div className="flex flex-col p-4">
      <img
        className=" mx-auto h-64 mt-24 pointer-events-none"
        src={`/intro/${image}.png`}
        alt={imageAlt}
      />

      {title && <h2 className="mt-6 text-center text-2xl">{title}</h2>}
      <p className="py-12 text-lg text-center">{text}</p>
      {toPokemonChooser && (
        <Button small clear onClick={goToPokemonChooser}>
          Start game!
        </Button>
      )}
    </div>
  )
}

export default Slide
