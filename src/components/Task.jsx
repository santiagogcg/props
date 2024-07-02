import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";



function UpdateTask(props) {

    const tasks = props.tasks




    return (
        <>

            {tasks.map((task) => (
                <li key={task.id} >


                    {task.completed ? <span style={{ textDecoration: 'line-through' }}>{task.text}</span> : <span>{task.text}</span>}
                    <button onClick={() => props.deleteTask(task.id)} >Eliminar</button>
                    <button onClick={() => props.completedTask(task.id)} >Completado</button>
                    <button onClick={() => props.noCompletedTask(task.id)} >Volver a NO completado</button>



                </li>




            ))}



        </>

    )
}

export default UpdateTask;

