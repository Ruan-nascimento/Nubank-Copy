import { ChildrenProps } from "../../../interfaces/children";

export const Wrapper = ({children}:ChildrenProps) => {
  return(
    <div
    className="flex flex-col justify-start items-center gap-1 cursor-pointer duration-200 ease-in-out hover:opacity-80"
    >
      {children}
    </div>
  )
}