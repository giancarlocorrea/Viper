import React from "react";
import MaterialTable from "material-table";

import { DataService } from "./DataService";

import { columns } from "./DataTable/columnRawMaterial";
import { tableIcons } from "./DataTable/TableIcons";

const TableRawMaterial = ({
  listRawMaterial,
  setListRawMaterial,
  setSelectedRawMaterial,
}) => {
  const tableRef = React.useRef();
  return (
    <div className="Table">
      <h2>Raw Materials</h2>
      <MaterialTable
        tableRef={tableRef}
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
              let id_raw_material = new Date().getTime().toString();

              DataService.createRawMaterial(
                id_raw_material,
                newData.name,
                newData.qtty
              );

              newData.id_raw_material = id_raw_material;

              setListRawMaterial([...listRawMaterial, newData]);
              resolve();
            }),

          onRowUpdate: (newData) =>
            ///
            //backEnd call for UPDATE a RAW MATERIAL
            ///

            DataService.updateRawMaterial(
              newData.id_raw_material,
              newData.name,
              newData.qtty
            ).then((resp) => {
              setListRawMaterial(
                listRawMaterial.map((value) => {
                  return value.id_raw_material === newData.id_raw_material
                    ? {
                        id_raw_material: newData.id_raw_material,
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
            DataService.deleteRawMaterial(newData.id_raw_material).then(
              (resp) => {
                setListRawMaterial(
                  listRawMaterial.filter((value) => {
                    return value.id_raw_material !== newData.id_raw_material;
                  })
                );
              }
            ),
        }}
      />
    </div>
  );
};

export default TableRawMaterial;
