import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { useUser } from "../hooks/useUser";
import { User } from "../model/user";
import UserForm from "../components/UserForm";

interface Props {
  initialData: User;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const NewUserForm: React.FC<Props> = ({ initialData }) => {
  const classes = useStyles();
  const { onSubmitNewUser } = useUser(initialData);
  

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3">New User</Typography>
      </Box>
        <UserForm initialData={initialData} isNew={true}/>
    </>
  );
};
export default NewUserForm;
