import React from "react";
import style from "./list.module.scss"
import Item from "./item";


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
        <Item
        key={index}
          {...task}
        />
        ))}
      </ul>
    </aside>
  );
}

export default List;
