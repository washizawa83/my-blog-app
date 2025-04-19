import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <div
      className={`w-content xl:w-5/6 xl:px-0 w-full mx-auto md:px-8 px-2 h-full mt-20`}
    >
      {children}
    </div>
  )
}
