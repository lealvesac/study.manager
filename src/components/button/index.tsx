import React, {ReactNode} from "react";
import style from "./button.module.scss";
interface ButtonProps {
  children: ReactNode;
}


export default class Button extends React.Component<ButtonProps> {
    render(): React.ReactNode {
        return (
            <button className={style.button}>
                {this.props.children}
            </button>
        )
    }
}