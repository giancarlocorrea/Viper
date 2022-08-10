import React from "react";

import MaterialTable from "material-table";

import { columns } from "./DataTable/columnInventory";
import { tableIcons } from "./DataTable/TableIcons";

const TableInventory = ({ listInventory }) => {
  return (
    <div className="TableInventory">
      <h2>Inventory</h2>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={listInventory}
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
          selection: false,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
        }}
        //onQueryChange={tableRef.current.setState(listInventory)}
      />
    </div>
  );
};

export default TableInventory;
