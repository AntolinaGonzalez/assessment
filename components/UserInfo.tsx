import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { IconButton, makeStyles } from "@material-ui/core";
import { useUser } from "../hooks/useUser";
import { User } from "../model/user";
import EditIcon from "@material-ui/icons/Edit";
import { useRouter } from "next/router";
import SimpleSnackbar from "./SimpleSnackBar";
import StatusLoader from "./StatusLoader";

interface Props {
  userData: User;
}
const useStyles = makeStyles({
  userLocked: {
    textDecoration: "line-through",
  },
});

const UserInfo: React.FC<Props> = ({ userData }) => {
  const classes = useStyles();
  const router = useRouter();
  const { onStatusChange, snackbar, loader } = useUser(userData);
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.setItem("userToEdit", JSON.stringify(userData));
    router.push("./edit");
  };
  return (
    <>
      <TableCell>{userData.id}</TableCell>
      <TableCell>
        {userData.created_at?.toString().replace(/T.*/, "")}
      </TableCell>
      <TableCell>
        {userData.updated_at?.toString().replace(/T.*/, "")}
      </TableCell>
      <TableCell>{userData.first_name}</TableCell>
      <TableCell>{userData.last_name}</TableCell>
      <TableCell>
        <IconButton onClick={onStatusChange}>
          {loader ? (
            <StatusLoader />
          ) : userData.status == "locked" ? (
            <CancelIcon style={{color:'red'}} />
          ) : (
            <CheckCircleIcon
              onClick={() => {
                onStatusChange();
              }}
              style={{color:'green'}}
            />
          )}
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={handleClick}>
          <EditIcon color="secondary" />
        </IconButton>
      </TableCell>
      {snackbar ? (
        <SimpleSnackbar
          openSnackbar={snackbar}
          title="Status changed successfully"
        />
      ) : (
        ""
      )}
    </>
  );
};
export default UserInfo;
