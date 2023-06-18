import { useState } from "react";
import Button from "../button";
import style from "./form.module.scss";
import iTask from "../../types/iTasks";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<iTask[]>>;
}

export default function Form({ setTasks }: Props) {
  const [matter, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  function addMatter(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTasks((oldMatters) => [
      ...oldMatters,
      {
        matter,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addMatter}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma nova Matéria</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={matter}
          onChange={(evente) => setTask(evente.target.value)}
          placeholder="O que você deseja estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={(evente) => setTime(evente.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
