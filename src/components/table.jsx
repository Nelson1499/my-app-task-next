import React from "react";

const Table = ({ task }) => {
  console.log(task);
  return (
    <table className="table text-black w-full text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">tarea</th>
          <th scope="col">acción</th>
        </tr>
      </thead>
      <tbody>
        {task.map((t, i) => (
          <tr key={i}>
            <th>{i  + 1}</th>
            <td>{t}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
