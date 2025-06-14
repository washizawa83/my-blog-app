import { ReactNode } from 'react'
import { IoIosInformationCircleOutline, IoIosWarning } from 'react-icons/io'
import { IoWarningOutline } from 'react-icons/io5'
import { tv, VariantProps } from 'tailwind-variants'

type NoteVariants = VariantProps<typeof note>

export const note = tv({
  base: 'p-2 rounded-md my-4 border-1',
  variants: {
    type: {
      info: 'border-cyan-700 bg-cyan-700/[.2]',
      warning: 'border-yellow-700 bg-yellow-700/[.2]',
      caution: 'border-rose-700 bg-rose-700/[.2]',
    },
  },
  defaultVariants: {
    type: 'info',
  },
})

type Props = {
  children: React.ReactNode
} & NoteVariants

const getIconByType = (
  type: 'info' | 'warning' | 'caution' | undefined,
): ReactNode => {
  switch (type) {
    case 'info':
      return <IoIosInformationCircleOutline />
    case 'warning':
      return <IoWarningOutline />
    case 'caution':
      return <IoIosWarning />
    default:
      return <IoIosInformationCircleOutline />
  }
}

export const Note = ({ children, ...variants }: Props) => {
  return (
    <div className={note({ ...variants })}>
      <span>{getIconByType(variants.type)}</span>
      {children}
    </div>
  )
}
