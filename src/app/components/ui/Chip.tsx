import { tv, VariantProps } from 'tailwind-variants'

type CategoryChipVariants = VariantProps<typeof chip>

export const chip = tv({
  base: 'px-3 py-1 border rounded-xl text-xs',
  variants: {
    color: {
      emerald: 'border-emerald-500 bg-emerald-500/[.3]',
      sky: 'border-sky-500 bg-sky-500/[.3]',
      pink: 'border-pink-500 bg-pink-500/[.3]',
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
