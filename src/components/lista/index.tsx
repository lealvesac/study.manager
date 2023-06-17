import React from "react";

function List() {
  const tasks = [
    {
      matter: "React",
      time: "02:00:00",
    },
    {
      matter: "JavaScript",
      time: "01:00:00",
    },
    {
      matter: "TyperScript",
      time: "03:00:00",
    },
  ];
  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.matter}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
