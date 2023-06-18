import React, { useState } from "react";
import Form from "../components/form";
import List from "../components/lista";
import style from "./app.module.scss";
import Stopwatch from "../components/stopwatch";
import iTask from "../types/iTasks";

function App() {
  const [tasks, setTasks] = useState<iTask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
