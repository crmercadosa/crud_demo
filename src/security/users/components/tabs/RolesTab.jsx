import { Box } from "@mui/material";
import { useState } from "react";
//FIC:
import RolesNavTab from "./RolesNavTab";

export default function RolesTab() {
   
   //FIC: indicamos que al iniciar no hay ningun Usuario seleccionado.
   // eslint-disable-next-line no-unused-vars
   const [currentRowInRolesTab, setCurrentRowInRolesTab] = useState(1);    
   
   //FIC: indicamos que el estado inicial del tab page principal por default sera UsuarioS. 
   const [currentNameTabInRolesTab, setCurrentNameTabInRolesTab] = useState("ROLES");
   
   return ( 
      <Box>   
            <RolesNavTab
                currentRowInRolesTab={currentRowInRolesTab}  
                setCurrentNameTabInRolesTab={setCurrentNameTabInRolesTab}   
            />

            {/* <h2>Tab con la tabla del subdocumento de Negocios de la coleccion de Usuarios</h2>
            <h2>Este debera abrir otro NAVTAB DE NEGOCIOS porque tiene subdocumentos no es un objeto final</h2> */}
            
            {console.log(currentNameTabInRolesTab)}
            {/* {currentNameTabInRolesTab == "NEGOCIOS" && <RolesTab />} */}

      </Box>
    );
  }