import React from 'react';
import { Paper, Dialog } from '@material-ui/core';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable handle={`#draggable-dialog-${props.title}`} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const DraggableDialog = (props) => {
  console.log(props.open)
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      PaperComponent={PaperComponent}
      PaperProps={{ 'title': props.title }}
      aria-labelledby={`draggable-dialog-${props.title}`}
      children={props.children}
    >
    </Dialog>
  )
}
export { DraggableDialog }
