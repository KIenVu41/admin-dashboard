import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { orderRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function OrderList() {
  const [data, setData] = useState(orderRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "activity", headerName: "Activity", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "mode",
      headerName: "Mode",
      width: 160,
    },
    {
        field: "discount",
        headerName: "Discount",
        width: 160,
      },
      {
        field: "shipping",
        headerName: "Shipping",
        width: 160,
      },
      {
        field: "total",
        headerName: "Total",
        width: 160,
      },
      {
        field: "promo",
        headerName: "Promo",
        width: 160,
      },
      {
        field: "first_name",
        headerName: "First_name",
        width: 160,
      },
      {
        field: "last_name",
        headerName: "Last_name",
        width: 160,
      },
      {
        field: "phone",
        headerName: "Phone",
        width: 160,
      },
      {
        field: "emai",
        headerName: "Emai",
        width: 160,
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row.id}>
              <button className="orderListEdit">Detail</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="orderList">
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