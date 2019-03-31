import * as React from 'react'
import {Message as MessageType} from '../types'

const Message = ({ message, author}: MessageType) => {
  return (
    <p>
      <i>{author}</i>: {message}
    </p>
  )
}

export default Message
