
import { useState, useEffect } from "react";
import AddTaskForm from './components/AddTaskForm'
import UpdateTask from "./components/Task";
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: false },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);



  // useEffect(() => {

  //   const render = async (){

  //     try {
  //       await setTasks(tasks)
  //     } catch (error) {
  //       console.log(error)
  //     }


  //   }
  // }, [tasks])


  return (
    <>

      <AddTaskForm tasks={tasks} add={newNameTask => setTasks([...tasks, { id: tasks.length + 1, text: newNameTask, completed: false }])} />
      <UpdateTask tasks={tasks} deleteTask={id => setTasks(tasks.filter(task => task.id !== id))}
        completedTask={(i) => tasks[i - 1].completed = true}
        noCompletedTask={(i) => tasks[i - 1].completed = false} />

      {/* No se como hacer con un método para que me actualice(tachar y destachar) setTasks .Solo me imprime en pantalla cuando hago otra operación */}


    </>
  );
};

export default App;
