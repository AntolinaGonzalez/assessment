import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      },
      justifyContent: "center",
      height: '100vh'
    },
    centerLoader:{
        top:'40%',
        left:'50%',
        position: 'absolute',
    }
  })
);

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" size={90}  className={classes.centerLoader} />
    </div>
  );
}
