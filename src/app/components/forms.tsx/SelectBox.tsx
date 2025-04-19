export type SelectOptionString = {
  value: string
  name: string
}

export type SelectOptionNumber = {
  value: number
  name: string
}

type Props = {
  defaultValue?: number
  defaultSelectMessage?: string
  options: SelectOptionString[] | SelectOptionNumber[]
}

export const SelectBox = ({
  defaultValue,
  defaultSelectMessage,
  options,
}: Props) => {
  return (
    <>
      <select
        className="outline-none text-lg border rounded-lg bg-transparent"
        defaultValue={defaultValue}
      >
        <option value="">{defaultSelectMessage}</option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}
