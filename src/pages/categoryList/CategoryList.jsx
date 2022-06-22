import "./categoryList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { categoryRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CategoryList() {
  const [data, setData] = useState(categoryRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="categoryListItem">
            <img className="categoryListImg" src={params.row.icon} alt="" />
            {params.row.name}
          </div>
        );
      },
    },{
      field: "activity",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/category/" + params.row.id}>
              <button className="categoryListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="categoryListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="categoryList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}