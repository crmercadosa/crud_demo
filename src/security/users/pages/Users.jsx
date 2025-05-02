import { Box } from "@mui/material";
import { useState } from "react";
import UsersNavTab from "../components/tabs/UsersNavTab";
import UsersTab from "../components/tabs/UsersTab";

const Users = () => {

    //FIC: indicamos que al iniciar no hay ningun Instituto seleccionado.
    // eslint-disable-next-line no-unused-vars
    const [currentRowInUsersTab, setCurrentRowInUsersTab] = useState(0);
    
    //FIC: indicamos que el estado inicial del tab page principal por default sera USUARIOS.
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("USUARIOS");

    // eslint-disable-next-line no-unused-vars
    const [rolesTabInPrincipalTabIsSelected, setRolesTabInPrincipalTabIsSelected] = useState(false);
    
    //const UsuariosAllData = useSelector((state) => state.UsersReducer);
    return (
        <Box>

            {/* FIC: llamada intrinsica (props) */}

            <UsersNavTab
                setCurrentRowInUsersTab={setCurrentRowInUsersTab} 
                setCurrentTabInPrincipalTab={setCurrentTabInPrincipalTab} 
                setRolesTabInPrincipalTabIsSelected={setRolesTabInPrincipalTabIsSelected} 
            />
            
            {/* FIC: si en el tap principal esta seleccionado es el tab de USUARIOS
            manda llamar la pagina que va dentro del tab de USUARIOS. */}
            {currentTabInPrincipalTab == "USUARIOS" && <UsersTab />}

            {/* FIC: si en el tap principal esta seleccionado el tab de ROLES
            manda llamar la pagina que va dentro del tab de Roles. */}
            {currentTabInPrincipalTab == "ROLES" && <RolesTab />}    

        </Box>
    );
};

export default Users;