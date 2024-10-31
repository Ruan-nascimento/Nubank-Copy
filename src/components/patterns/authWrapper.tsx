import { twMerge } from "tailwind-merge"
import { ChildrenProps } from "../../interfaces/children"

export const AuthWrapper = ({children, ...rest}:ChildrenProps) => {
  return(
    <div {...rest} className={twMerge("w-full h-full p-4 text-CinzaClaro" , rest.className)}>
      {children}
    </div>
  )
}