import { useTask } from "@/hook/useTask";
import React from "react";

const Table = () => {
  const { task, removeFromTask, setTaskUpdate } = useTask();
  return (
    <table className="min-w-full px-2 text-center">
      <thead className="mx-2">
        <tr>
          <th scope="col">Tarea</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody className="py-2">
        {task?.map((t, i) => (
          <tr key={i} className="border-b-2 border-fuchsia-500">
            <td className="max-w-custom text-ellipsis overflow-hidden text-left">
              {t.task}
            </td>
            <td>{t.priority}</td>
            <td
              className="cursor-pointer"
            >
              <span onClick={() => removeFromTask(t)} className="hover:text-red-500 active:text-red-500">Eliminar</span> | 
              <span onClick={()=> setTaskUpdate(t)} className="hover:text-green-500 active:text-green-500">Editar</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
