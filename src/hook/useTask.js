import { useContext } from "react";
import { TaskContext } from "@/context/task.context";

export const useTask = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
