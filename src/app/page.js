"use client";
import Form from "@/components/form";
import Table from "@/components/table";

export default function Home() {
  return (
    <main className="min-h-screen items-center m-2">
      <div className="md:m-auto bg-white bg-opacity-10 w-full h-max rounded-b">
        <h1 className="text-center mb-10">Agregar Tareas</h1>
        <div className="m-2">
          <Table />
        </div>
        <Form />
      </div>
    </main>
  );
}
