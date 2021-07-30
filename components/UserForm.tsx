import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { useUser } from "../hooks/useUser";
import { User } from "../model/user";

interface Props {
  initialData: User
  isNew: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const UserForm: React.FC<Props> = ({ initialData, isNew }) => {
  const classes = useStyles();
  const [newUser, setNewUser] = useState(initialData);
  const { handleSubmit, control } = useForm();
  const { onSubmitNewUser } = useUser(newUser);
  const onHandleSubmit = (data: any) => {
    setNewUser({
      ...initialData,
      status: "active",
      first_name: data.firstName,
      last_name: data.lastName,
    });
  };
  useEffect(() => {
    onSubmitNewUser();
  }, [newUser]);

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label={initialData ? initialData.first_name : 'First Name' }
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                defaultValue="hola"
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "First name required" }}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label={initialData ? initialData.last_name :"Last Name"}
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Last name required" }}
          />
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};
export default UserForm;
