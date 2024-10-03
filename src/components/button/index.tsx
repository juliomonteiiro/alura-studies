import React from "react";
import style from './button.module.scss'

interface ButtonProps {
    children: React.ReactNode; // Define children como uma propriedade do tipo ReactNode
}

class Button extends React.Component <ButtonProps>  {
    render(){
        return(
            <button className={style.Button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;