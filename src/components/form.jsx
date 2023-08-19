import { useTask } from "@/hook/useTask";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  task: Yup.string().required("El nombre de la tarea es necesario"),
  priority: Yup.string().required("Elige la prioridad de tu tarea"),
});

const Form = () => {
  const { addToTask, taskUpdate, updateTask, initialValues, setTaskUpdate } =
    useTask();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      taskUpdate?.id
        ? updateTask(values)
        : addToTask({ ...values, id: new Date().getTime() });
      setTaskUpdate();
      resetForm();
    },
  });
  useEffect(() => {
    if (taskUpdate?.id) {
      formik.setValues({
        id: taskUpdate.id,
        task: taskUpdate.task,
        priority: taskUpdate.priority,
      });
    }
  }, [taskUpdate]);
  return (
    <form onSubmit={formik.handleSubmit} className="text-center justify-center">
      <div className="flex">
        <div>
          <input
            type="text"
            name="task"
            id="task"
            className="flex-grow text-black text-center w-full bg-none outline-none h-max p-2"
            placeholder="Escribir tarea."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.task}
          />
          {formik.touched.task && formik.errors.task && (
            <div className="text-red-600">{formik.errors.task}</div>
          )}
        </div>
        <select
          name="priority"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.priority}
          className="bg-fuchsia-500 p-2 outline-none border-r-2 border-white"
        >
          <option className="font-normal" value="Bajo">
            Bajo
          </option>
          <option className="font-normal" value="Medio">
            Medio
          </option>
          <option className="font-normal" value="Alto">
            Alto
          </option>
        </select>
        {formik.touched.priority && formik.errors.priority && (
          <div>{formik.errors.priority}</div>
        )}
        <button className="bg-fuchsia-500 rounded-br p-2 w-auto" type="submit">
          {taskUpdate?.id ? "Guardar" : "Agregar"}
        </button>
      </div>
    </form>
  );
};

export default Form;
