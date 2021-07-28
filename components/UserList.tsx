import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  status: "active" | "locked";
  created_at: Date;
  updated_at: Date;
}
interface Props {
  userData: Array<User>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 650,
      width: "80%",
      backgroundColor: "white",
      borderRadius: "10px",
      "& .MuiDataGrid-root  .MuiDataGrid-iconSeparator": {
        color: "black",
      },
    },
    centerLoader: {
      top: "40%",
      left: "50%",
      position: "absolute",
    },
  })
);

const UserList: React.FC<Props> = ({ userData }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};
export default UserList;

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "created_at",
    headerName: "Created",
    type: "date",
    width: 150,
    editable: true,
  },
  {
    field: "updated_at",
    headerName: "Updated",
    type: "date",
    width: 150,
    editable: true,
  },
  {
    field: "first_name",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "last_name",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    editable: true,
  },
];
