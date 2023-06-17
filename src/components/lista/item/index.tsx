import style from "../list.module.scss";

export default function Item({
  matter,
  time,
}: {
  matter: string;
  time: string;
}) {
  return (
    <li className={style.item}>
      <h3>{matter}</h3>
      <span>{time}</span>
    </li>
  );
}
