import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { Chip, IconButton, makeStyles } from "@material-ui/core";
import { useUser } from "../hooks/useUser";
import { User } from "../model/user";
import EditIcon from "@material-ui/icons/Edit";
import { useRouter } from "next/router";
import SimpleSnackbar from "./SimpleSnackBar";
import StatusLoader from "./StatusLoader";
import DoneIcon from "@material-ui/icons/Done";

interface Props {
  userData: User;
}
const useStyles = makeStyles({
  userLocked: {
    textDecoration: "line-through",
  },
});

const UserInfo: React.FC<Props> = ({ userData }) => {
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
        {loader ? (
          <StatusLoader />
        ) : userData.status == "locked" ? (
          <Chip
            onDelete={onStatusChange}
            label="Locked"
            color="secondary"
            clickable
            onClick={onStatusChange}
          />
        ) : (
          <Chip
            //onClick={onStatusChange}
            onDelete={onStatusChange}
            deleteIcon={<DoneIcon style={{ color: "white" }} />}
            style={{ backgroundColor: "green", color: "white" }}
            label="Active"
          />
        )}
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
