import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import UserInfo from "./UserInfo";

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  {
    id: "created_at",
    label: "Created",
    minWidth: 150,
  },
  {
    id: "updated_at",
    label: "Updated",
    minWidth: 150,
  },
  {
    id: "first_name",
    label: "First name",
    minWidth: 150,
  },
  {
    id: "last_name",
    label: "Last name",
    minWidth: 150,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 120,
  },
];
interface User {
  id: any;
  first_name: string;
  last_name: string;
  status: "active" | "locked";
  created_at: Date;
  updated_at: Date;
}
interface Props {
  userList: Array<User>;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "20px",
  },
  userLocked: {
    textDecoration: "line-through",
  },
});

const UserList: React.FC<Props> = ({ userList }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: {
    target: { value: string | number };
  }) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bolder",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                style={{
                  backgroundColor: "#f2f2f2",
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    className={row.status == "locked" ? classes.userLocked : ""}
                  >
                    <UserInfo userData={row} />
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={userList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default UserList;
