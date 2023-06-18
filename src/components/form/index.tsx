import React from "react";
import Button from "../button";
import style from "./form.module.scss";
import iTask from "../../types/iTasks";
import { v4 as uuidv4} from "uuid";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<iTask[]>>;
}> {
  state = {
    matter: "",
    time: "00:00:00",
  };

  addMatter(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTasks(oldMatters => [
      ...oldMatters,
      {
        ...this.state,
        select: false,
        complete: false,
        id: uuidv4()
      },
    ]);
    this.setState({
      matter: "",
      time: "00:00:00",
    });
  }

  render(): React.ReactNode {
    return (
      <form className={style.newTask} onSubmit={this.addMatter.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.matter}
            onChange={(evente) =>
              this.setState({ ...this.state, matter: evente.target.value })
            }
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
            value={this.state.time}
            onChange={(evente) =>
              this.setState({ ...this.state, time: evente.target.value })
            }
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
}

export default Form;
