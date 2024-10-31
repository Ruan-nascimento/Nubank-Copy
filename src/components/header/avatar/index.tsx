import { ButtonHTMLAttributes } from "react"

interface AvatarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string
}

export const Avatar = ({...rest}:AvatarProps) => {

  const username = 'Ruan Carlos'

  return(
    <button 
    {...rest}
    className="size-14 rounded-full flex items-center justify-center relative cursor-pointer duration-200 ease-in-out hover:shadow-lg hover:scale-95">
      <img
      className="size-full rounded-full object-cover"
      src="https://picsum.photos/1920/1080" alt={username} />

      <span className="w-3 h-3 top-0 right-1 rounded-full bg-CinzaClaro absolute"></span>
    </button>
  )
}