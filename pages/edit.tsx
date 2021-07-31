import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { User } from "../model/user";
import UserForm from "../components/UserForm";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [user, setUser] = useState(initialData);
  if (typeof window !== "undefined") {
    if (localStorage.getItem("userToEdit")) {
      const userToEdit = localStorage.getItem("userToEdit");
      if (!user) {
        setUser(JSON.parse(userToEdit as string));
      }
    } else {
      router.push("/");
    }
  }

  return (
    <>
    <Box position="relative" height="100vh" >
      <Box display="flex" justifyContent="space-around" top="40%" margin={0} position="absolute" width="100vw">
        <Box display="flex" justifyContent="center">
          <Typography variant="h3">Edit User</Typography>
        </Box>
        <UserForm initialData={user} isNew={false} />
      </Box>
      </Box>
    </>
  );
};
export default NewUserForm;
