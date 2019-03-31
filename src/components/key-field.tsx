import * as React from 'react'

interface Props {
  submit: (message: string, author: string) => void
}

interface State {
  value: string
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>

export class KeyField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(event: ChangeEvent) {
    this.setState({ value: event.target.value })
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('submitted')
      console.log(this.state.value)
      this.props.submit(this.state.value, 'me')
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}
