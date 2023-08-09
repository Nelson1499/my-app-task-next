import { useTask } from "@/hook/useTask";
import { useState } from "react";

const Form = () => {
  const { addToTask, taskUpdate, setTaskUpdate, updateTask, initialValues } = useTask();
  const OnSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const data = {
      id,
      task: event?.target.task.value,
      priority: event?.target.priority.value,
    };
    taskUpdate?.id ? updateTask({...data, id:taskUpdate?.id }) : addToTask(data);
    setTaskUpdate(initialValues);
    event.target.task.value = "";
    event.target.priority.value = "";
  };
  const handleInputChange = (e) => {
    setTaskUpdate({ ...taskUpdate, task: e.target.value });
  };
  return (
    <form onSubmit={OnSubmit} className="text-center justify-center">
      <div className="flex">
        <input
          type="text"
          name="task"
          id="task"
          className="flex-grow text-black text-center w-full bg-none outline-none h-max p-2"
          placeholder="Escribir tarea."
          pri
          value={taskUpdate.task}
          onChange={handleInputChange}
        />
        <select
          name="priority"
          value={taskUpdate.priority}
          onChange={(e) =>
            {setTaskUpdate({ ...taskUpdate, priority: e.target.value })}
          }
          className="bg-fuchsia-500 p-2 outline-none border-r-2 border-white"
        >
          <option className="font-normal" value="Bajo">Bajo</option>
          <option className="font-normal" value="Medio">Medio</option>
          <option className="font-normal" value="Alto">Alto</option>
        </select>

        <button className="bg-fuchsia-500 rounded-br p-2 w-auto" type="submit">
          {taskUpdate.id? "Guardar":"Agregar"}
        </button>
      </div>
    </form>
  );
};

export default Form;
