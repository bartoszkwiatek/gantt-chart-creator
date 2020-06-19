import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';

const SnackbarStatus = (props) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={props.open}
        onClose={() => props.close(true)}
        message={props.message}
        key={props.id}
        autoHideDuration={2000}
      />
    </div>
  );
}

export { SnackbarStatus };
