import { addTask } from "@/app/page";
import { useState } from "react";

const Form = ({ add }) => {
  const [text, settext] = useState("");
  const handleInputChange = (data) => {
    settext(data?.target.value);
  };
  const Onsubmit = (event) => {
    event.preventDefault();
    const data = event?.target.task.value;
    add(data);
    event.target.task.value = "";
  };
  
  return (
    <form onSubmit={Onsubmit} className="text-center justify-center">
      <div className="w-max m-auto">
        <input
          type="text"
          name="task"
          id="task"
          className="text-black text-center bg-none outline-none"
          placeholder="Escribir tarea."
          onChange={handleInputChange}
        />
        <button className="bg-fuchsia-500 h-max p-4 rounded-br" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Form;
