import { tv, VariantProps } from 'tailwind-variants'

type CategoryChipVariants = VariantProps<typeof chip>

export const chip = tv({
  base: 'px-3 py-1 border rounded-xl text-xs',
  variants: {
    color: {
      emerald: 'border-emerald-700 bg-emerald-700/[.3]',
      sky: 'border-sky-700 bg-sky-700/[.3]',
      pink: 'border-pink-700 bg-pink-700/[.3]',
    },
    size: {
      xs: 'text-xs',
      s: 'text-sm',
      m: 'text-md',
      l: 'text-xl',
    },
  },
  defaultVariants: {
    color: 'emerald',
    size: 's',
  },
})

type Props = { label: string } & CategoryChipVariants

export const Chip = ({ label, ...variants }: Props) => {
  return <span className={chip({ ...variants })}>{label}</span>
}
