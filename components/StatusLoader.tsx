import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      }
    },
  })
);

export default function StatusLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" size={20} />
    </div>
  );
}
