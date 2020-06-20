import React from 'react';
import { Paper, Dialog, useMediaQuery, useTheme } from '@material-ui/core';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable handle={`#draggable-dialog-${props.name}`} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const DraggableDialog = (props) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
      PaperComponent={PaperComponent}
      PaperProps={{ 'name': props.name }}
      aria-labelledby={`draggable-dialog-${props.name}`}
      children={props.children}
    >
    </Dialog>
  )
}
export { DraggableDialog }
