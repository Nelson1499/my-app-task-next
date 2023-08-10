"use client";
import { useReducer, createContext, useState, useEffect } from "react";
import { taskInitialState, taskReducer } from "@/reducer/Task";

export const TaskContext = createContext();

const useTaskReducer = () => {
  const [state, dispatch] = useReducer(taskReducer, taskInitialState);

  const addToTask = (task) => {
    dispatch({
      type: "ADD_TO_TASK",
      payload: task,
    });
  };
  const removeFromTask = (task) =>
    dispatch({
      type: "REMOVE_FROM_TASK",
      payload: task,
    });
  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });

  return { state, addToTask, removeFromTask, updateTask };
};

export const TaskProvider = ({ children }) => {
  const [taskUpdate, setTaskUpdate] = useState();
  const initialValues = {
    id:  "",
    task: "",
    priority:  "Medio",
  };
  const [task, setTask] = useState([]);
  const { state, addToTask, removeFromTask, updateTask } = useTaskReducer();
  useEffect(() => {
    setTask(state);
  }, [state, taskUpdate ]);
  return (
    <TaskContext.Provider
      value={{
        task,
        addToTask,
        removeFromTask,
        updateTask,
        setTaskUpdate,
        taskUpdate,
        initialValues,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
