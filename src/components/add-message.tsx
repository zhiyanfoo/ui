import { KeyField } from './key-field'
import * as React from 'react'

const AddMessage = ({
  addMessage
}: {
  addMessage: (message: string, author: string) => void
}) => {
  return (
    <section id="new-message">
      <KeyField submit={addMessage} />
    </section>
  )
}

export default AddMessage
