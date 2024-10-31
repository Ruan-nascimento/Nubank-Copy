import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { twMerge } from "tailwind-merge"

interface IconButtonFaProps extends FontAwesomeIconProps {
  icon: IconDefinition,
  size?: "xl" | "xs" | "sm" | "lg"
}

export const IconButtonFa = ({size='xl', icon, ...rest}:IconButtonFaProps) => {
  return(
    <FontAwesomeIcon 
    {...rest}
    className={twMerge("text-CinzaClaro" ,rest.className)}
    icon={icon} size={size}/>
  )
}