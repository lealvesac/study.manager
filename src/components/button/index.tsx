import React from "react";
import "./style.scss";

export default class Button extends React.Component {
    render(): React.ReactNode {
        return (
            <button className="button">
                Botão
            </button>
        )
    }
}