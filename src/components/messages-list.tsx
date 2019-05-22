import * as React from 'react'
import Message from './message'
import { Message as MessageType } from '../types'

export default ({ messages }: { messages: MessageType[] }) => {
  return (
    <section id="messages-list">
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </section>
  )
}
