import React from 'react'
import { BsExclamationCircle } from 'react-icons/bs'

type Props = {
  children: React.ReactNode
  onError: (state: boolean) => void
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.warn(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError(true)
    console.warn('MDX rendering error:', error, info)
  }

  componentDidUpdate(prevProps: Props) {
    // children が変わったらエラー状態をリセット
    if (prevProps.children !== this.props.children && this.state.hasError) {
      this.props.onError(false)
      this.setState({ hasError: false })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <span style={{ color: 'red' }}>
          <BsExclamationCircle />
        </span>
      )
    }

    return this.props.children
  }
}
