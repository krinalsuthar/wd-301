import React from "react"
import {PendingCard,DoneCard} from "./TaskCard"
import './TaskCard.css'

function App() {
  return (
    <>
    <div className="info">
    <h1 className="text-4xl font-bold">Smater Tasks</h1>
    <p>Project: gradution Final Year Project (Revamp College Website)</p>
    </div>
    <div className="flex flex-row flex justify-evenly">
     <div className="w-2/5 TaskMain">
      <h1 className="text-center text-3xl font-bold py-5">Pending</h1>
      <PendingCard  pendingTitle="Build the website with static content" pendingDueOn="10th April" pendingName="Rohit S"/>
      <PendingCard  pendingTitle="Add blog" pendingDueOn="22nd March" pendingName="Rohit M"/>
      <div>
        <p className="mt-3 text">+ New Task</p>
      </div>
     </div>
     <div className="w-2/5 TaskMain">
      <h1 className="text-center text-3xl font-bold py-5">Done</h1>
      <DoneCard  doneTitle="Design the mockup" doneCompOn="10th April" doneName="Rohit M"/>
      <DoneCard  doneTitle="Get approval from principle" doneCompOn="20th April" doneName="Ajay S"/>
     </div>
    </div>
    </>
  )
}

export default App
