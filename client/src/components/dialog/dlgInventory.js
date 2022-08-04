import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function Inventory(props) {
  const [editValues, setEditValues] = useState({
    id_products: props.id_products,
    id_raw_materials: props.id_raw_materials,
    qtty: props.qtty,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleInsert = () => {
    Axios.post("http://localhost:3001/addInventory", {
      id_products: "4",
      id_raw_materials: "14",
      qtty: "5",
    });

    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Inventory</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="qtty"
            label="Quantity of Raw material"
            defaultValue={props.qtty}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="qtty"
            label="Quantity"
            defaultValue={props.qtty}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleInsert()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
