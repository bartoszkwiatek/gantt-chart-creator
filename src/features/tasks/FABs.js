import React, { useState } from 'react'
import { Box, Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import { DraggableDialog } from './DraggableDialog';
import { OptionsDialog } from './OptionsDialog';

const useStyles = makeStyles((theme) => ({
  margin2: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
  margin1: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(20),
  },

}));

const FABs = () => {
  const classes = useStyles();
  const [openOptions, setOpenOptions] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const options = 'options'
  const add = 'add'

  const handleClickOpen = (type) => {
    switch (type) {
      case 'options':
        setOpenOptions(true)
        break;
      case 'add':
        setOpenAdd(true)
        break;
      default:
        console.warn('Broken dialog opening')
        break;
    }
  };

  const handleClose = (type) => {
    switch (type) {
      case 'options':
        setOpenOptions(false)
        break;
      case 'add':
        setOpenAdd(false)
        break;

      default:
        console.warn('Broken dialog closing')
        break;
    }
  };

  return (
    <Box>
      <Fab
        className={classes.margin1}
        size="small"
        color="secondary"
        aria-label="options"
        onClick={() => handleClickOpen(options)}
      >
        <SettingsIcon />
      </Fab>
      <Fab
        className={classes.margin2}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <DraggableDialog
        open={openOptions}
        title={options}
        handleClose={() => handleClose(options)}
      >
        <OptionsDialog
          title={options}
          handleClose={() => handleClose(options)}
        />
      </DraggableDialog>
    </Box>
  )
}
export { FABs }

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Paper from '@material-ui/core/Paper';
// import Draggable from 'react-draggable';

// function PaperComponent(props) {
//   return (
//     <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
//       <Paper {...props} />
//     </Draggable>
//   );
// }

// export default function DraggableDialog(props) {

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={props.handleClose}
//         PaperComponent={PaperComponent}
//         aria-labelledby="draggable-dialog-title"
//       >
//         <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
//           Subscribe
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We will send updates
//             occasionally.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Subscribe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }