import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <div
      className={`w-content xl:w-5/6 xl:px-0 w-full mx-auto px-8 h-full mt-24`}
    >
      {children}
    </div>
  )
}
