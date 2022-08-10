import React from "react";
import MaterialTable from "material-table";

import { tableIcons } from "./DataTable/TableIcons";
import { columns } from "./DataTable/columnProduct";
import { DataService } from "./DataService";

const TableProducts = ({ listProduct, setListProduct, setSelectedProduct }) => {
  return (
    <div className="Table">
      <h2>Products</h2>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={listProduct}
        options={{
          rowStyle: { fontFamily: "Roboto" },
          showTitle: false,
          actionsColumnIndex: -1,
          addRowPosition: "first",
          headerStyle: { background: "#7aadf0" },
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
            ///
            //backEnd call for INSERT/ADD a PRODUCT
            ///

            new Promise((resolve, reject) => {
              let id_product = new Date().getTime().toString();

              DataService.createProduct(
                id_product,
                newData.name,
                newData.price
              );

              newData.id_product = id_product;

              setListProduct([...listProduct, newData]);
              resolve();
            }),

          onRowUpdate: (newData) =>
            ///
            //backEnd call for UPDATE a PRODUCT
            ///

            DataService.updateProduct(
              newData.id_product,
              newData.name,
              newData.price
            ).then((resp) => {
              setListProduct(
                listProduct.map((value) => {
                  return value.id_product === newData.id_product
                    ? {
                        id_product: newData.id_product,
                        name: newData.name,
                        price: newData.price,
                      }
                    : value;
                })
              );
            }),

          onRowDelete: (newData) =>
            ///
            //backEnd call for DELETE a PRODUCT
            ///

            DataService.deleteProduct(newData.id_product).then((resp) => {
              setListProduct(
                listProduct.filter((value) => {
                  return value.id_product !== newData.id_product;
                })
              );
            }),
        }}
      />
    </div>
  );
};

export default TableProducts;
