import React, { useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const columns = [
  {
    title: "Name",
    field: "name",

    validate: (rowData) =>
      rowData.name === undefined || rowData.name === "" ? "Required" : true,
  },
  {
    title: "Price",
    field: "price",
    validate: (rowData) =>
      rowData.price === undefined || rowData.price === "" ? "Required" : true,
  },
];

const TableProducts = ({ listProduct, setListProduct, setSelectedProduct }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className="Table">
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={listProduct}
        onRowClick={(evt, selectedRow) => {
          setSelectedRow(selectedRow.tableData.id);
        }}
        options={{
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
          }),
          showTitle: false,
          actionsColumnIndex: -1,
          addRowPosition: "first",
          headerStyle: { background: "beige" },
          padding: "dense",
          tableLayout: "auto",
          showFirstLastPageButtons: "false",
          pageSizeOptions: [],
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
        }}
        onSelectionChange={(rows) => {
          setSelectedProduct(rows);
        }}
        editable={{
          onRowAdd: (newData) =>
            //backEnd call
            new Promise((resolve, reject) => {
              let id = new Date().getTime().toString();
              setTimeout(() => {
                axios.post("http://localhost:3001/addProduct", {
                  id,
                  name: newData.name,
                  price: newData.price,
                });
              }, 1000);
              newData.id = id;
              setListProduct([...listProduct, newData]);
              resolve();
            }),

          onRowUpdate: (newData) =>
            //backEnd call

            new Promise((resolve, reject) => {
              axios
                .put("http://localhost:3001/updateProduct", {
                  id: newData.id,
                  name: newData.name,
                  price: newData.price,
                })
                .then((resp) => {
                  setListProduct(
                    listProduct.map((value) => {
                      return value.id === newData.id
                        ? {
                            id: newData.id,
                            name: newData.name,
                            price: newData.price,
                          }
                        : value;
                    })
                  );

                  resolve();
                });
            }),

          onRowDelete: (newData) =>
            //backEnd call
            new Promise((resolve, reject) => {
              axios
                .delete(`http://localhost:3001/deleteProduct/${newData.id}`, {
                  id: newData.id,
                  name: newData.name,
                  price: newData.price,
                })
                .then((resp) => {
                  setListProduct(
                    listProduct.filter((value) => {
                      return value.id !== newData.id;
                    })
                  );
                  resolve();
                });
            }),
        }}
      />
    </div>
  );
};

export default TableProducts;
