import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { DataService } from "../DataService";

export default function Inventory({
  open,
  setOpen,
  selectedProduct,
  selectedRawMaterial,
  setListInventory,
}) {
  const [selectedRawMaterialQtty, setSelectedRawMaterialQtty] = useState(0);

  let id_product = selectedProduct.length !== 0 ? selectedProduct[0].id : null;
  let id_raw_material =
    selectedRawMaterial.length !== 0 ? selectedRawMaterial[0].id : null;

  const handleClose = () => {
    setOpen(false);
  };

  const handleInsert = (id_product, id_raw_material, raw_material_qtty) => {
    DataService.createInventory(id_product, id_raw_material, raw_material_qtty);

    //setListInventory([...listInventory, resolve]);

    //handleSelect();
    handleClose();
  };

  // const handleSelect = () => {};
  // Axios.get("http://localhost:3001/getAllInventory").then((response) => {
  //   setListInventory(response.data);
  // });

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Inventory</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="qtty"
            onChange={(event) => setSelectedRawMaterialQtty(event.target.value)}
            label="Quantity"
            defaultValue=""
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              handleInsert(
                id_product,
                id_raw_material,
                selectedRawMaterialQtty
              );
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
