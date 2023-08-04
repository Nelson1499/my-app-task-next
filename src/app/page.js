"use client"
import Form from "@/components/form";
import Table from "@/components/table";
import { useState } from "react";


export default function Home() {
  const addTask = (data) => {
    if (task) {
      setTask([...task, data])
    }else{
      setTask([data]) 
    }
  }
  const [task, setTask] = useState([]);
  return (
    <main className="min-h-screen items-center jus p-24">
      <div className="m-auto bg-white w-max h-max rounded-b">
        <h1 className="text-center text-black">Agregar Tareas</h1>
        <Table task={task} />
        <Form add={addTask} />
      </div>
    </main>
  );
}
