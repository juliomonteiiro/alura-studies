import React from "react";
import style from './list.module.scss'
import Item from "./item";

function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '01:30:00'
    },{
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
     return(
        <aside className={style.ListaTarefas}>
            <h1>Estudos do dia</h1>
            <ul>
                {tarefas.map((item, index) =>(
                    <Item
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;