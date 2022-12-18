import React from 'react'
import { Card } from 'react-bootstrap'

export const Note = ({note, onRemoveNote}) => {
  const time = new Intl.DateTimeFormat('en-UK', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: true,
  }).format(note.creationTime)
  
  return (
    <Card style={{cursor: 'pointer'}} className="Note__card m-2 mt-2" body onClick={() => onRemoveNote()} title="Delete on click">
      <div>
        <h5>{[note.text.split('')[0].toUpperCase(), note.text.slice(1)].join('')}</h5>
        <p>{time}</p>
      </div>
    </Card>
  )
}
