import * as React from 'react'
import { Message as MessageType } from '../types'

const Message = ({ message, author }: MessageType) => {
  return (
    <p id="message">
      <i>{author}</i>: {message}
    </p>
  )
}

export default Message
