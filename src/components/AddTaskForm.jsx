
import { useState, useEffect } from "react";
import UpdateTask from './Task'



function AddTaskForm(props) {
    const tasks = props.tasks
    const [newNameTask, setNewNameTask] = useState('')

    // useEffect(() => {
    //     setTasks(...tasks)
    // }, [newNameTask])

    //     // async function add() {

    //     //     try {
    //     //         const lengthTasks = tasks.length;
    //     //         tasks.push({ id: lengthTasks + 1, text: newNameTask, completed: false })
    //     //         setNewNameTask('')



    //     //     } catch (error) {
    //     //         return (<>Error</>)

    //     //     }




    // }
    return (
        <>

            <input type="text" value={newNameTask} onChange={(e) => setNewNameTask(e.target.value)} />
            <button onClick={() => props.add(newNameTask)}>Add New Task</button>





        </>

    )
}

export default AddTaskForm;

