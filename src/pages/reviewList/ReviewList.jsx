import "./reviewList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ReviewList() {


  const columns = [
    { headerName: "ID", width: 90 },
    { headerName: "Product ID", width: 200 },
    {
      headerName: "Title",
      width: 120,
    },
    {
      headerName: "Rating",
      width: 160,
    },
    {
        headerName: "content",
        width: 200,
      },
      {
        headerName: "Activity",
        width: 160,
      },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
              <button className="reviewListEdit">Hide</button>
              
          </>
        );
      },
    },
  ];

  return (
    <div className="reviewList">
      <DataGrid
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}