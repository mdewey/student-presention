import React, { useState } from "react";
import students from "./students.json";

export default function StudentPresentations() {
  const [pos, setPos] = useState(-1);
  const currentStudent = students[pos];
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
    );
  } else if (pos < 0) {
    return (
      <section>
        <button>Prev</button>
        <main onClick={() => setPos(pos + 1)}>
          <h1>
            Welcome, talk about the struggles, thank the friends and family,
          </h1>
        </main>
        <button onClick={() => setPos(pos + 1)}>next</button>
      </section>
    );
  } else if (pos >= students.length) {
    return (
      <section>
        <button onClick={() => setPos(pos - 1)}>Prev</button>
        <main>
          <h1>
            Congratulate,them again, remind how far they have come, *shed a
            tear* tell them how "unique" they are, and how they will always be a
            special place in my heart, then joke about leaving the nest
          </h1>
        </main>
        <button>next</button>
      </section>
    );
  }
}
