import * as React from 'react'
import Message from './message'
import { Message as MessageType } from '../types'
import * as hash from 'object-hash'

export default ({ messages }: { messages: MessageType[] }) => {
  return (
    <section id="messages-list">
      {messages.map(message => (
        <Message key={hash(message)} {...message} />
      ))}
    </section>
  )
}
