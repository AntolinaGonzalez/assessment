import React from "react";
import TableCell from "@material-ui/core/TableCell";
import {
  Box,
  Chip,
  IconButton,
  makeStyles,
  Switch,
  Tooltip,
} from "@material-ui/core";
import { useUser } from "../hooks/useUser";
import { User } from "../model/user";
import EditIcon from "@material-ui/icons/Edit";
import { useRouter } from "next/router";
import SimpleSnackbar from "./SimpleSnackBar";
import StatusLoader from "./StatusLoader";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

interface Props {
  userData: User;
}
const useStyles = makeStyles({
  userLocked: {
    textDecoration: "line-through",
  },
  locked: {
    color: "#f25454",
  },
  active: {
    color: "#5fe875",
  },
});

const UserInfo: React.FC<Props> = ({ userData }) => {
  const classes = useStyles();
  const router = useRouter();
  const [openStatusTooltip, setOpenStatusTooltip] = React.useState(false);
  const [openEditTooltip, setOpenEditTooltip] = React.useState(false);
  const { onStatusChange, snackbar, loader } = useUser(userData);
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.setItem("userToEdit", JSON.stringify(userData));
    router.push("./edit");
  };
  const handleCloseStatusTooltip = () => {
    setOpenStatusTooltip(false);
  };

  const handleOpenStatusTooltip = () => {
    setOpenStatusTooltip(true);
  };

  const handleCloseEditTooltip = () => {
    setOpenEditTooltip(false);
  };

  const handleOpenEditTooltip = () => {
    setOpenEditTooltip(true);
  };
  return (
    <>
      <TableCell
        className={userData.status == "locked" ? classes.userLocked : ""}
      >
        <Box display="flex">
          <FiberManualRecordRoundedIcon
            className={
              userData.status == "active" ? classes.active : classes.locked
            }
          />
          {userData.id}
        </Box>
      </TableCell>
      <TableCell
        className={userData.status == "locked" ? classes.userLocked : ""}
      >
        {userData.created_at?.toString().replace(/T.*/, "")}
      </TableCell>
      <TableCell
        className={userData.status == "locked" ? classes.userLocked : ""}
      >
        {userData.updated_at?.toString().replace(/T.*/, "")}
      </TableCell>
      <TableCell
        className={userData.status == "locked" ? classes.userLocked : ""}
      >
        {userData.first_name}
      </TableCell>
      <TableCell
        className={userData.status == "locked" ? classes.userLocked : ""}
      >
        {userData.last_name}
      </TableCell>
      <TableCell>
        <>
          <Tooltip
            open={openStatusTooltip}
            onClose={handleCloseStatusTooltip}
            onOpen={handleOpenStatusTooltip}
            title="Change user status by switching"
          >
            {loader ? (
              <StatusLoader />
            ) : userData.status == "locked" ? (
              <Switch color="secondary" onClick={onStatusChange} />
            ) : (
              <Switch color="secondary" onClick={onStatusChange} checked />
            )}
          </Tooltip>
        </>
      </TableCell>
      <TableCell>
        <Tooltip
          open={openEditTooltip}
          onClose={handleCloseEditTooltip}
          onOpen={handleOpenEditTooltip}
          title="Change user information by clicking"
        >
          <IconButton onClick={handleClick}>
            <EditIcon color="secondary" />
          </IconButton>
        </Tooltip>
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
