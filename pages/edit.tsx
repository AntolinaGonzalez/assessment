import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";
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
  formStyle: {
    display: "flex",
    justifyContent: "space-between",
    width: "fit-content",
    margin: "auto",
    padding: "50px",
    backgroundColor: "white",
    boxShadow:'1px -2px 50px -20px #000000'
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
    <Box style={{ backgroundColor: "#efdee6", height: "100vh" }}>
      <Container>
        <Head>
          <title>Dina Challenge</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box display="flex" alignItems="center">
          <Image
            src="/dina-logo.jpeg"
            alt="digital-natives"
            width={100}
            height={100}
          />
        </Box>
        <Box>
          <Box className={classes.formStyle}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h3" style={{ marginRight: "20px" }}>
                Edit User
              </Typography>
            </Box>
            <UserForm initialData={user} isNew={false} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default NewUserForm;
