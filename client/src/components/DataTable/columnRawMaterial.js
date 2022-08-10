export const columns = [
  { title: "id", field: "id", hidden: true },
  {
    title: "Name",
    field: "name",
    cellStyle: { width: "90%" },
    validate: (rowData) =>
      rowData.name === undefined || rowData.name === "" ? "Required" : true,
  },
  {
    title: "Qtty",
    field: "qtty",
    cellStyle: { width: "10%" },
    validate: (rowData) =>
      rowData.qtty === undefined || rowData.qtty === "" ? "Required" : true,
  },
];
