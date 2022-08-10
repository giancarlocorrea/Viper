import React from "react";
import axios from "axios";
import MaterialTable from "material-table";

import { DataService } from "./DataService";

import { columns } from "./DataTable/columnRawMaterial";
import { tableIcons } from "./DataTable/TableIcons";

const TableRawMaterial = ({
  listRawMaterial,
  setListRawMaterial,
  setSelectedRawMaterial,
}) => {
  return (
    <div className="Table">
      <h2>Raw Materials</h2>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={listRawMaterial}
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
          setSelectedRawMaterial(rows);
        }}
        editable={{
          onRowAdd: (newData) =>
            ///
            //backEnd call for INSERT/ADD a RAW MATERIAL
            ///

            new Promise((resolve, reject) => {
              let id = new Date().getTime().toString();

              DataService.createRawMaterial(id, newData.name, newData.qtty);

              newData.id = id;
              setListRawMaterial([...listRawMaterial, newData]);
              resolve();
            }),

          onRowUpdate: (newData) =>
            ///
            //backEnd call for UPDATE a RAW MATERIAL
            ///

            DataService.updateRawMaterial(
              newData.id,
              newData.name,
              newData.qtty
            ).then((resp) => {
              setListRawMaterial(
                listRawMaterial.map((value) => {
                  return value.id === newData.id
                    ? {
                        id: newData.id,
                        name: newData.name,
                        qtty: newData.qtty,
                      }
                    : value;
                })
              );
            }),

          onRowDelete: (newData) =>
            ///
            //backEnd call for DELETE a RAW MATERIAL
            ///
            DataService.deleteRawMaterial(newData.id).then((resp) => {
              setListRawMaterial(
                listRawMaterial.filter((value) => {
                  return value.id !== newData.id;
                })
              );
            }),
        }}
      />
    </div>
  );
};

export default TableRawMaterial;
