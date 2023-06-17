import React from "react";
import style from "./list.module.scss"

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
    <aside className={style.taskList}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={style.item}>
            <h3>{task.matter}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
