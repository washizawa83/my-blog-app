type Props = {
  placeholder?: string
}

export const InputForm = ({ placeholder }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-full px-2 outline-none border rounded-lg bg-transparent text-lg tracking-wide"
    />
  )
}
