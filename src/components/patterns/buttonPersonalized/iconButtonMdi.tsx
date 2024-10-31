import Icon from "@mdi/react"
import { twMerge } from "tailwind-merge"

interface IconButtonMdiProps extends React.ComponentProps<typeof Icon> {
  path: string,
  size?: number
}

export const IconButtonMdi = ({path, size=1, ...rest}:IconButtonMdiProps) => {
  return(
    <Icon {...rest} path={path} size={size} className={twMerge("text-CinzaClaro", rest.className)}/>
  )
}