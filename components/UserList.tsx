import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

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

const UserList: React.FC<Props> = ({userData}) => {
  return (
    <div style={{ height: 600, width: "80%" }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
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