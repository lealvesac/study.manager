import style from "./list.module.scss";
import Item from "./item";
import iTask from "../../types/iTasks";

interface Props {
  tasks: iTask[];
  matterSelect: (matterSelected: iTask) => void;
}

function List({ tasks, matterSelect }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item matterSelect={matterSelect} key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
