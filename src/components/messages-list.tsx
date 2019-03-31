import * as React from 'react'
import Message from './message'
import {Message as MessageType} from '../types'
import * as hash from 'object-hash'

export default ({messages }: {messages: MessageType[]}) => {
  console.log('in message list')
  console.log(messages)
  console.log(messages.map)
  return (
    <section id="messages-list">
      {messages.map((message) => (
        <Message key={hash(message)} {...message} />
      ))}
    </section>
  )
}
