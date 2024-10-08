import React from "react";
import style from './button.module.scss';

interface Props{
    children?: React.ReactNode; // Define children como uma propriedade do tipo ReactNode
    type?: "button" | "submit" | "reset"; // Adiciona 'type' como opcional no ButtonProps
    onClick?: () => void
}

function Button({onClick, type, children}: Props){
    return(
        <button type={type} 
        onClick={onClick} 
        className={style.Button}
        >
            {children}
        </button>
    )
}


export default Button;


