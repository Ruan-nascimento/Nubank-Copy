import { faArrowsUpDown, faDollarSign, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { Patterns } from "../patterns"

export const NavFixedBar = () => {
  return(
    <nav className="w-5pc bg-black/80 backdrop-blur-lg backdrop-brightness-50 shadow-white/5 shadow-xl absolute bottom-5 left-2-5pc rounded-full flex justify-between overflow-hidden p-1">

      <Patterns.button.button className="max-w-full min-w-2 w-33pc min-h-2 max-h-full h-20 bg-transparent hover:bg-RoxoPrincipal/15 active:opacity-80 in-moment">
        <Patterns.button.iconFa icon={faArrowsUpDown} className="text-RoxoSecundário"/>
      </Patterns.button.button>

      <Patterns.button.button className="max-w-full min-w-2 w-33pc min-h-2 max-h-full h-20 bg-transparent hover:bg-RoxoPrincipal/15 active:opacity-80">
        <Patterns.button.iconFa icon={faDollarSign} className="text-RoxoSecundário"/>
      </Patterns.button.button>

      <Patterns.button.button className="max-w-full min-w-2 w-33pc min-h-2 max-h-full h-20 bg-transparent hover:bg-RoxoPrincipal/15 active:opacity-80">
        <Patterns.button.iconFa icon={faShoppingBag} className="text-RoxoSecundário"/>
      </Patterns.button.button>
    </nav>
  )
}