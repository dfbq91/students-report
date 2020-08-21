import React from "react";
import { MDBDataTable } from "mdbreact";

function Report() {
  return (
    <div className="container my-5 p-3">
      <MDBDataTable striped bordered small data={studentData} />
    </div>
  );
}

const studentData = {
  columns: [
    {
      label: "Código",
      field: "codigo",
      sort: "asc",
      width: 150,
    },
    {
      label: "Nombre",
      field: "nombre",
      sort: "asc",
      width: 270,
    },
    {
      label: "Apellido",
      field: "apellido",
      sort: "asc",
      width: 200,
    },
    {
      label: "Segmento",
      field: "segmento",
      sort: "asc",
      width: 100,
    },
    {
      label: "Fecha de ingreso",
      field: "entryDate",
      sort: "asc",
      width: 150,
    },
  ],
  rows: [
    {
      codigo: 1,
      nombre: "Diego",
      apellido: "Betancourt",
      segmento: "Técnico",
      entryDate: "2020-07-16",
    },
    {
      codigo: 2,
      nombre: "Juan",
      apellido: "Loyola",
      segmento: "Bachillerato",
      entryDate: "2020-01-10",
    },
    {
      codigo: 3,
      nombre: "Felipe",
      apellido: "Sanclemente",
      segmento: "Inglés",
      entryDate: "2019-07-02",
    },
    {
      codigo: 4,
      nombre: "Diego",
      apellido: "Betancourt",
      segmento: "Inglés",
      entryDate: "2020-07-16",
    },
    {
      codigo: 5,
      nombre: "Diego",
      apellido: "Betancourt",
      segmento: "Técnico",
      entryDate: "2020-07-16",
    },
    {
      codigo: 6,
      nombre: "Patricia",
      apellido: "Castro",
      segmento: "Técnico",
      entryDate: "2020-02-13",
    },
    {
      codigo: 7,
      nombre: "Diana",
      apellido: "Figueroa",
      segmento: "Bachillerato",
      entryDate: "2020-12-11",
    },
    {
      codigo: 8,
      nombre: "Lina",
      apellido: "Moreno",
      segmento: "Inglés",
      entryDate: "2020-07-16",
    },
    {
      codigo: 9,
      nombre: "Ricaldo",
      apellido: "Gaucho",
      segmento: "Inglés",
      entryDate: "2020-08-16",
    },
    {
      codigo: 10,
      nombre: "Ernesto",
      apellido: "Benjumea",
      segmento: "Técnico",
      entryDate: "2020-01-16",
    },
    {
        codigo: 10,
        nombre: "Cecilia",
        apellido: "Barroco",
        segmento: "Bachillerato",
        entryDate: "2020-11-16",
      },
  ],
};

export default Report;
