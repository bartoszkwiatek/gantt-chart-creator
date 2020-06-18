import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { saveConsent, checkConsent } from '../common/localStorage';
import { useEffect } from 'react';

export default function AlertDialog() {
  const storageConsent = checkConsent()
  const [open, setOpen] = React.useState(true);
  console.log(storageConsent)

  useEffect(() => {
    if (storageConsent) {
      setOpen(false)
    }
  }, [storageConsent])

  const handleClose = (decision) => {
    if (decision) {
      saveConsent(decision)
    }
    setOpen(false)
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="localStorage use consent"
        aria-describedby="alert asking if you want to enable localStorage"
      >
        <DialogTitle>{"Do you want to enable localStorage?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            localStorage is a type of web storage that allows JavaScript sites and apps to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window has been closed.
            If you do not want this page to save data on your computer, press decline.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => handleClose(false)}
            color="secondary">
            Decline
          </Button>
          <Button
            variant="contained"
            onClick={() => handleClose(true)}
            color="primary"
            autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}