import React, { ReactNode } from "react";
import style from "./button.module.scss";
import { ButtonProps } from "../../types/iButton";

export default class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
