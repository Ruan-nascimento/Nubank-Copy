import { twMerge } from "tailwind-merge"
import { ChildrenProps } from "../../../interfaces/children"

export const ButtonHold = ({children, ...rest}:ChildrenProps) => {
  return(
    <button
    {...rest}
    className={twMerge("bg-CinzaEscuro/30 w-20 h-20 max-w-20 max-h-20 min-h-20 min-w-20 flex items-center rounded-full justify-center duration-200 ease-in-out hover:opacity-80 active:scale-95", rest.className)}
    >
      {children}
    </button>
  )
}