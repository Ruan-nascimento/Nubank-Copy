import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonLabelProps extends HTMLAttributes<HTMLElement>{
  text: string
}

export const ButtonLabel = ({text, ...rest}:ButtonLabelProps) => {
  return(
    <span {...rest} className={twMerge("max-w-24 text-center", rest.className)}>{text}</span>
  )
}