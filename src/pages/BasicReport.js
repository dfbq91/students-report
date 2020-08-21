import React, { useState } from "react";

const studentsData = [
  {
    code: 1,
    name: "Diego",
    lastname: "Betancourt",
    segment: "Técnico",
    entryDate: "2020-07-16",
  },
  {
    code: 2,
    name: "Juan",
    lastname: "Loyola",
    segment: "Bachillerato",
    entryDate: "2020-01-10",
  },
  {
    code: 3,
    name: "Felipe",
    lastname: "Sanclemente",
    segment: "Inglés",
    entryDate: "2019-07-02",
  },
  {
    code: 4,
    name: "Diego",
    lastname: "Betancourt",
    segment: "Inglés",
    entryDate: "2020-07-16",
  },
  {
    code: 5,
    name: "Diego",
    lastname: "Betancourt",
    segment: "Técnico",
    entryDate: "2020-07-16",
  },
  {
    code: 6,
    name: "Patricia",
    lastname: "Castro",
    segment: "Técnico",
    entryDate: "2020-02-13",
  },
  {
    code: 7,
    name: "Diana",
    lastname: "Figueroa",
    segment: "Bachillerato",
    entryDate: "2020-12-11",
  },
  {
    code: 8,
    name: "Lina",
    lastname: "Moreno",
    segment: "Inglés",
    entryDate: "2020-07-16",
  },
];

const orderTypes = {
  desc: {
    fn: (a, b) => a - b,
  },
  asc: {
    fn: (a, b) => b - a,
  },
  default: {
    fn: (a, b) => a,
  },
};

function BasicReport(data) {
  const [order, setOrder] = useState("default");

  const sortTable = () => {
    let nextOrder;
    if (order === "default") {
      nextOrder = "desc";
    }
    if (order === "desc") {
      nextOrder = "asc";
    }
    if (order === "asc") {
      nextOrder = "default";
    }

    setOrder(nextOrder);
  };

  return (
    <div className="container my-4">
      {/* Filters */}
      <form>
        <div className="form-group col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese Código Estudiante"
          />
        </div>
      </form>

      {/* Report */}
      <div className="container my-4">
        <table className="table" id="report">
          <thead className="thead-dark">
            <tr>
              <th scope="col" onClick={sortTable}>
                Código
              </th>
              <th scope="col" onClick={sortTable}>
                Nombre
              </th>
              <th scope="col" onClick={sortTable}>
                Apellido
              </th>
              <th scope="col" onClick={sortTable}>
                Segmento
              </th>
              <th scope="col" onClick={sortTable}>
                Fecha de ingreso
              </th>
            </tr>
          </thead>
          <tbody>
            {[...studentsData].sort(orderTypes[order].fn).map((student) => (
              <tr key={student.code}>
                <td>{student.code}</td>
                <td>{student.name}</td>
                <td>{student.lastname}</td>
                <td>{student.segment}</td>
                <td>{student.entryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BasicReport;
