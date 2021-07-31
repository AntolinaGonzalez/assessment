import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useUser } from "../hooks/useUser";
import { User } from "../model/user";

interface Props {
  initialData: User;
  isNew: boolean;
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
  const [user, setUser] = useState(initialData);
  const { onSubmitNewUser, editUser } = useUser(user);
  console.log("el user ", user);
  const onHandleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isNew) {
      onSubmitNewUser();
    } else {
      editUser();
    }
  };

  const fieldChange = (e: { target: { id: any; value: any } }) => {
    const id = e.target.id;
    const value = e.target.value;
    setUser({ ...user, [id]: value });
  };

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onHandleSubmit}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            required
            id="first_name"
            label="First Name"
            variant="outlined"
            value={user ? user.first_name : ""}
            onChange={fieldChange}
            error={user ? !user.first_name : false}
            helperText={
              user ? (!user.first_name ? "First Name is required" : null) : ""
            }
            style={{ width: "400px" }}
          />

          <TextField
            id="last_name"
            name="first_name"
            label="Last Name"
            variant="outlined"
            value={user ? user.last_name : ""}
            onChange={fieldChange}
            fullWidth
            style={{ width: "400px" }}
            error={user ? !user.last_name : false}
            helperText={
              user ? (!user.last_name ? "Last Name is required" : null) : ""
            }
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
