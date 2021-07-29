import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { IconButton } from "@material-ui/core";
import { useUser } from "../hooks/useUser";
import { User } from "../model/user";

interface Props {
  userData: User;
}

const UserInfo: React.FC<Props> = ({ userData }) => {
  const { onStatusChange } = useUser(userData);

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={userData.id}>
      <TableCell>{userData.id}</TableCell>
      <TableCell>{userData.created_at}</TableCell>
      <TableCell>{userData.updated_at}</TableCell>
      <TableCell>{userData.first_name}</TableCell>
      <TableCell>{userData.last_name}</TableCell>
      <TableCell>
        <IconButton onClick={onStatusChange}>
          {userData.status == "locked" ? (
            <CancelIcon />
          ) : (
            <CheckCircleIcon onClick={onStatusChange} />
          )}
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default UserInfo;
