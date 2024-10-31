import { HtmlHTMLAttributes, ReactNode } from "react";

export interface ChildrenProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode
}