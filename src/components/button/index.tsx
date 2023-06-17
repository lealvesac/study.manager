import React from "react";
import style from "./button.module.scss";

export default class Button extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={style.button}>
                Botão
            </button>
        )
    }
}