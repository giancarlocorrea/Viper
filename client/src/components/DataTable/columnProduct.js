export const columns = [
  {
    title: "Name",
    field: "name",

    validate: (rowData) =>
      rowData.name === undefined || rowData.name === "" ? "Required" : true,
  },
  {
    title: "Price",
    field: "price",
    type: "currency",
    currencySetting: {
      currencyCode: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    align: "center",
    validate: (rowData) =>
      rowData.price === undefined || rowData.price === "" ? "Required" : true,
  },
];
