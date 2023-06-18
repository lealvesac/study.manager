import style from "./list.module.scss";
import Item from "./item";
import iTask from "../../types/iTasks";

function List({ tasks }: { tasks: iTask[]}) {

  return (
    <aside className={style.taskList}>
      <h2>
        Estudos do Dia
      </h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
