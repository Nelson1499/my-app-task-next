"use client";
import Form from "@/components/form";
import Table from "@/components/table";

export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <div className="md:m-auto bg-white bg-opacity-10 w-full md:w-9/12 h-max rounded-b">
        <h1 className="text-center mb-10">Agregar Tareas</h1>
        <div className="m-2">
          <Table />
        </div>
        <Form />
      </div>
    </main>
  );
}
