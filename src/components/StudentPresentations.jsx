import React, { useState } from 'react'
import students from './students.json'

export default function StudentPresentations() {
  const [pos, setPos] = useState(0)
  const currentStudent = students[pos]
  if (currentStudent) {
    return (
      <section>
        <button onClick={() => setPos(pos - 1)}>Prev</button>
        <main onClick={() => setPos(pos + 1)}>
          <h1>>> {currentStudent.name}</h1>
          <h2>{currentStudent.intro}</h2>
          <h2>{currentStudent.outro}</h2>
          <h4>
            {pos + 1}/{students.length}
          </h4>
        </main>
        <button onClick={() => setPos(pos + 1)}>next</button>
      </section>
    )
  } else {
    return (
      <section>
        <button onClick={() => setPos(pos - 1)}>Prev</button>
        <main onClick={() => setPos(pos + 1)}>
          <h1>
            And now we have Antansia from cohort XIII to say a few a words
          </h1>
        </main>
        <button onClick={() => setPos(pos + 1)}>next</button>
      </section>
    )
  }
}
