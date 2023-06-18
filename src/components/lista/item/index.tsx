import iTask from "../../../types/iTasks";
import style from "../list.module.scss";

export default function Item({ matter, time, select, complete, id }: iTask) {
  return (
    <li className={style.item}>
      <h3>{matter}</h3>
      <span>{time}</span>
    </li>
  );
}
