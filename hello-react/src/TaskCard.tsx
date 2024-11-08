import React from 'react'
import './TaskCard.css'

export function PendingCard({pendingTitle,pendingDueOn,pendingName}) {
  return(
          <>
          <div className='TaskItem'>
            <h2 className="text-xl font-bold">{pendingTitle}</h2>
            <p>Due on: {pendingDueOn}</p>
            <p>Assignee: {pendingName}</p>
          </div>
    </>
  )
}
export function DoneCard({doneTitle,doneCompOn,doneName}) {
  return(
          <>
          <div className='TaskItem'>
            <h2 className="text-xl font-bold">{doneTitle}</h2>
            <p>Due on: {doneCompOn}</p>
            <p>Assignee: {doneName}</p>
          </div>
    </>
  )
}