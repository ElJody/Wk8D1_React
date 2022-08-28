import * as React from 'react';
import { useContext, forwardRef, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const {alert, setAlert} = useContext(AppContext);
    // {
    //     msg: "Alert Message",
    //     cat: "success"
    // }

    useEffect(
        () => {
            setOpen(true);
            
        },[alert]
    )
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setAlert({});
  };

  if (!alert?.msg){
        return <></>;
  }

  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.cat} sx={{ width: '100%' }}>
         {alert.message}
        </Alert>
      </Snackbar>
    
  );
}

