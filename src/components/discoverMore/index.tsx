import { Patterns } from "../patterns"

interface DiscoverMoreProps {
  title: string
  description: string
  buttonText: string
  seed?: number
}

export const DiscoverMore = ({title, description, buttonText, seed=Math.floor(Math.random()*1000)}:DiscoverMoreProps) => {
  return(
    <div className="bg-CinzaEscuro/30 w-6pc max-w-6pc min-w-6pc max-h-80 min-h-80 overflow-clip rounded-md pb-4 flex flex-col justify-between gap-4 cursor-pointer duration-200 ease-in-out hover:opacity-80">

      <img 
      className="w-full object-cover h-32"
      src={`https://picsum.photos/seed/${seed}/1920/1080`}/>

      <div className="px-2 text-xs h-32 max-h-32 overflow-clip space-y-4">
        <span className="text-white font-bold text-sm">{title}</span>
        <p className="font-extralight opacity-65">{description}</p>
      </div>

      <Patterns.button.button className="min-h-10 h-10 ml-2 max-w-7pc w-44 px-10 bg-RoxoPrincipal font-semibold text-xs">
        {buttonText}
      </Patterns.button.button>

    </div>
  )
}