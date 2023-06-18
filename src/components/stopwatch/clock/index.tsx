import style from "./clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minutesUni] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUni] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minutesTen}</span>
      <span className={style.clockNumber}>{minutesUni}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondsTen}</span>
      <span className={style.clockNumber}>{secondsUni}</span>
    </>
  );
}
