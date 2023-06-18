import React, { useState } from "react";
import Form from "../components/form";
import List from "../components/lista";
import style from "./app.module.scss";
import Stopwatch from "../components/stopwatch";
import iTask from "../types/iTasks";

function App() {
  const [tasks, setTasks] = useState<iTask[]>([]);
  const [selected, setSelected] = useState<iTask>();

  function matterSelect(matterSelected: iTask) {
    setSelected(matterSelected);
    setTasks((tasksBefore) =>
      tasksBefore.map((matter) => ({
        ...matter,
        selected: matter.id === matterSelected.id ? true : false,
      }))
    );
  }

  function overTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((tasksBefore) =>
        tasksBefore.map((matter) => {
          if (matter.id === selected.id) {
            return {
              ...matter,
              selected: false,
              completed: true,
            };
          }
          return matter;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} matterSelect={matterSelect} />
      <Stopwatch selected={selected} overTask={overTask} />
    </div>
  );
}

export default App;
