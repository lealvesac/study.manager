import iTask from "../../../types/iTasks";
import style from "./item.module.scss";

interface Props extends iTask {
  matterSelect: (matterSelected: iTask) => void;
}

export default function Item({
  matter,
  time,
  selected,
  completed,
  id,
  matterSelect,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ""} ${
        completed ? style.itemComplete : ""
      }`}
      onClick={() =>
        !completed &&
        matterSelect({
          matter,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{matter}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.complete} aria-label="Matéria Completada"></span>
      )}
    </li>
  );
}
