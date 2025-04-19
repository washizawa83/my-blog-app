import { IoAlert, IoCheckmarkOutline, IoWarningOutline } from 'react-icons/io5'

export const SnackbarType = {
  Accept: 0,
  Warning: 1,
  Error: 2,
} as const

type Props = {
  message: string
  type: (typeof SnackbarType)[keyof typeof SnackbarType]
}

const getSnackbarConfig = (type: number) => {
  switch (type) {
    case SnackbarType.Accept:
      return {
        style: 'text-emerald-500',
        icon: <IoCheckmarkOutline />,
      }
    case SnackbarType.Warning:
      return {
        style: 'text-amber-500',
        icon: <IoWarningOutline />,
      }
    case SnackbarType.Error:
      return {
        style: 'text-rose-500',
        icon: <IoAlert />,
      }
  }
}

export const Snackbar = ({ message, type }: Props) => {
  const config = getSnackbarConfig(type)
  return (
    <div className="fixed bottom-10 right-8 w-72 p-3 rounded-lg bg-gray-800">
      <p className={`flex items-center ${config?.style}`}>
        <span className="mr-2">{config?.icon}</span>
        {message}
      </p>
    </div>
  )
}
