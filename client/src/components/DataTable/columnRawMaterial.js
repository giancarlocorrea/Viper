export const columns = [
  { title: "Id Raw material", field: "id_raw_material", hidden: true },
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
