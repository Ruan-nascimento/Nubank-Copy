import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar } from "./avatar"
import { faEye, faEyeSlash, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import { faQuestionCircle} from "@fortawesome/free-regular-svg-icons"

interface HeaderProps {
  setShow: (value: boolean) => void
  show: boolean
}

export const Header = ({setShow, show}:HeaderProps) => {


  return(
    <header className="bg-RoxoPrincipal h-24 w-full border-b-2 border-CinzaEscuro flex items-center justify-between px-4">

      <div>
        <Avatar/>
      </div>

      <div className="w-3pc flex items-center justify-between mr-4">
        <FontAwesomeIcon onClick={() => setShow(!show)} icon={show ? faEye : faEyeSlash} size="lg" className="text-CinzaClaro cursor-pointer duration-200 ease-in-out hover:text-opacity-70"/>

        <FontAwesomeIcon icon={faQuestionCircle} size="lg" className="text-CinzaClaro cursor-pointer duration-200 ease-in-out hover:text-opacity-70"/>

        <FontAwesomeIcon icon={faShieldHalved} size="lg" className="text-CinzaClaro cursor-pointer duration-200 ease-in-out hover:text-opacity-70"/>
      </div>

    </header>
  )
}