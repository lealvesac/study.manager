import { useEffect, useState } from "react";
import timeForSeconds from "../../common/utils/time";
import iTask from "../../types/iTasks";
import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss";

interface Props {
  selected: iTask | undefined;
  overTask: () => void;
}

export default function Stopwatch({ selected, overTask }: Props) {
  const [time, setTimes] = useState<number>();
  useEffect(() => {
    if (selected?.time) {
      setTimes(timeForSeconds(selected.time));
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTimes(count - 1);
        return regressive(count - 1);
      }
      overTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha uma Matéria e inicie o cronômetro.</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onCLick={() => regressive(time)}>Começar!</Button>
    </div>
  );
}
