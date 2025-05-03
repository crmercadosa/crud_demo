//FIC: React
import React, { useEffect, useState } from "react";
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, IconButton, Dialog } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

//Modal
import AddUsersModal from "../modals/AddUsersModal";

//CARGA DE DATOS
import UsersStaticData from '../../../../db/security/json/users/UsersData';

//import { getAllUsers } from "../../services/remote/get/GetAllUsers";

//FIC: Columns Table Definition.
const UsersColumns = [
    {
        accessorKey: "USERID",
        header: "USER ID",
        size: 40,
      },
      {
        accessorKey: "USERNAME",
        header: "NOMBRE COMPLETO",
        size: 150,
      },
      {
        accessorKey: "ALIAS",
        header: "ALIAS",
        size: 50,
      },
      {
        accessorKey: "EMAIL",
        header: "CORREO",
        size: 150,
      },
      {
        accessorKey: "PHONENUMBER",
        header: "TELÉFONO",
        size: 80,
      },
      {
        accessorKey: "DEPARTMENT",
        header: "DEPARTAMENTO",
        size: 120,
      },
      {
        accessorKey: "FUNCTION",
        header: "FUNCIÓN",
        size: 100,
      },
      {
        accessorKey: "COMPANYALIAS",
        header: "EMPRESA",
        size: 60,
      },
  ];

  //FIC: Table - FrontEnd.
  const UsersTable = () => {

    //FIC: controlar el estado del indicador (loading).
    const [loadingTable, setLoadingTable] = useState(true);
    
    //FIC: controlar el estado de la data de Institutos.
    const [UsersData, setUsersData] = useState([]);

    //Controlar el estado para la ventana modal
    const [AddUserShowModal, setAddUserShowModal] = useState(false);

    useEffect(() => {
      async function fetchData() {
        try {  
          //const AllUsers = await getAllUsers(); 
          setUsersData(UsersStaticData); //Colocar aquí "UsersStaticData" en lugar de "AllUsers" para usar la data estática
          setLoadingTable(false);
        } catch (error) {
          console.error("Error al obtener productos:", error);
        }
      }
      fetchData();
    }, []);

    return (
        <Box>
          <Box>
            <MaterialReactTable
              columns={UsersColumns}
              data={UsersData}
              state={{isLoading: loadingTable}}
              initialState={{ density: "compact", showGlobalFilter: true }}
              // eslint-disable-next-line no-empty-pattern
              renderTopToolbarCustomActions={({ }) => (
                  <>
                    {/* ------- ACTIONS TOOLBAR INIT ------ */}
                    <Stack direction="row" sx={{ m: 1 }}>
                      <Box>
                        <Tooltip title="Agregar">
                          <IconButton 
                            onClick={()=>setAddUserShowModal(true)}
                          >
                            <AddCircleIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Editar">
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Detalles ">
                          <IconButton>
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Stack>
                    {/* ------- ACTIONS TOOLBAR END ------ */}
                  </>
                )}
            />
          </Box>
          {/*MODALES*/}
          <Dialog open={AddUserShowModal}>
            <AddUsersModal
              AddUsersShowModal={AddUserShowModal}
              setAddUsersShowModal={setAddUserShowModal}
            />
          </Dialog>
        </Box>
      );
  };

  export default UsersTable;
   