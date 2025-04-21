import { tv, VariantProps } from 'tailwind-variants'

type ButtonVariants = VariantProps<typeof button>

export const button = tv({
  base: 'min-w-22 min-h-8 border rounded-md text-lg px-3 cursor-pointer opacity-85 hover:opacity-100',
  variants: {
    color: {
      red: 'border-red-500',
      green: 'border-green-500',
      blue: 'border-blue-500',
      empty: 'border-gray-500',
    },
  },
  defaultVariants: {
    color: 'green',
  },
})

type Props = {
  label: string
} & ButtonVariants

export const Button = ({ label, ...variants }: Props) => {
  return <button className={button({ ...variants })}>{label}</button>
}
