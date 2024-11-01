import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonHTMLAttributes } from "react"

interface AccountOptionsProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  amount: number
  show: boolean
}

export const AccountOptions = ({show, amount, ...rest}:AccountOptionsProps) => {

  const transformAmount = amount.toFixed(2).replace('.', ',')

  return(
    <button {...rest} className="w-full h-24 flex justify-between items-center rounded-md duration-200 ease-in-out active:opacity-50 hover:opacity-70">
      <div className="flex flex-col items-start gap-2">
        <span className="font-semibold">Conta</span>
        <span className="font-semibold">R$ {show ? transformAmount : "*****"}</span>
      </div>

      <FontAwesomeIcon className="mb-8 mr-4 text-CinzaClaro opacity-85" icon={faAngleRight}/>
    </button>
  )
}