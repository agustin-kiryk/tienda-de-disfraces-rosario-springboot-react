import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

export const userColumns = [
 
  {
    field: "name",
    headerName: "Nombre",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="">
          <img className="" alt="" src={params.row.image} />
          {params.row.name}
        </div>
      );
    },
  },
    {
      
      field: "detail",
      headerName: "Detalle",
      width: 230,
    },
    {
      field: "clientRented",
      headerName: "Cliente",
      width: 230,
    },
    {
      field: "reservationDate",
      headerName: "Fecha de Reserva",
      width: 230,
    },
    
  
    {
      field: "deadlineDate",
      headerName: "Fecha de Entrega",
      width: 200,
    },
    {
      field: "costumeStatus",
      headerName: "Estatus",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.costumeStatus}`}>
            {params.row.costumeStatus}
          </div>
        );
      },
    },
    
  ];
  
  
  //temporary data
  export function UserTable() {
    const [userRows, setUserRows] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const rows = await userRows();
        
        setUserRows(rows);
      }
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Tabla de usuarios</h1>
        <DataGrid rows={userRows} columns={userColumns} />
      </div>
    );
  }
  
  export async function userRows() {
    try {
      const response = await axios.get('https://disfraces-production.up.railway.app/costumes');
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
  export default UserTable;
  