import style from "./button.module.scss";
import { ButtonProps } from "../../types/iButtons";

export default function Button({ onCLick, type, children }: ButtonProps) {
  return (
    <button onClick={onCLick} type={type} className={style.button}>
      {children}
    </button>
  );
}
