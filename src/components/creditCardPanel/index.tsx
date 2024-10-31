import { ButtonHTMLAttributes } from "react"
import { Patterns } from "../patterns"
import { twMerge } from "tailwind-merge"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

interface CreditCardPanelProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  creditPayment: number
  dueDate: number
}

export const CreditCardPanel = ({creditPayment, dueDate, ...rest}:CreditCardPanelProps) => {

  const valueMod = creditPayment.toFixed(2).replace('.', ',')

  return(
    <button 
    {...rest}
    className={twMerge("border-t border-b border-CinzaEscuro py-6 flex flex-col gap-3 relative duration-200 ease-in-out hover:opacity-75 active:opacity-60", rest.className)}
    >
      <span className="font-bold text-lg">Cartão de Crédito</span>
      <span>Fatura fechada</span>
      <span className="font-bold text-xl -mt-4">R$ {valueMod}</span>
      <span className="opacity-45">Vencimento dia {dueDate}</span>

      <div className="flex gap-4 w-full mt-3">
        <Patterns.button.button className="max-w-full px-6 min-h-2 h-12 bg-red-700">
          Pagar
        </Patterns.button.button>

        <Patterns.button.button className="max-w-full w-32 px-6 min-h-2 h-12">
          Parcelar
        </Patterns.button.button>

        <Patterns.button.iconFa icon={faAngleRight} className="absolute top-6 right-4 text-lg opacity-70"/>
      </div>
    </button>
  )
}