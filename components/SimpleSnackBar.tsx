import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props: JSX.IntrinsicAttributes & AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  title: string;
  openSnackbar: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SimpleSnackbar: React.FC<Props> = ({ title, openSnackbar }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(openSnackbar);

  const handleClose = (_event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success">{title}</Alert>
      </Snackbar>
    </div>
  );
};
export default SimpleSnackbar;
