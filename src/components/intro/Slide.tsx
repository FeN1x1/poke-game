import Image from "next/image"

const Slide: React.FC<{
  title: string
  text: string
  image: string
  imageAlt: string
}> = ({ title, text, image, imageAlt }) => {
  return (
    <div className="flex flex-col p-4">
      <img
        className=" mx-auto h-64 mt-24 pointer-events-none"
        src={`/intro/${image}.png`}
        alt={imageAlt}
      />

      {title && <h2 className="mt-6 text-center text-2xl">{title}</h2>}
      <p className="py-12 text-lg text-center">{text}</p>
    </div>
  )
}

export default Slide
