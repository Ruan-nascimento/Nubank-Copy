import { twMerge } from "tailwind-merge"
import { ChildrenProps } from "../../../interfaces/children"

export const ButtonHold = ({children, ...rest}:ChildrenProps) => {
  return(
    <button
    {...rest}
    className={twMerge("bg-CinzaEscuro/30 w-24 h-24 max-w-24 max-h-24 min-h-24 min-w-24 flex items-center rounded-full justify-center duration-200 ease-in-out hover:opacity-80 active:scale-95", rest.className)}
    >
      {children}
    </button>
  )
}