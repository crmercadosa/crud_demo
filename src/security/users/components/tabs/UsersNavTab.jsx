import { Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
const UsersTabs = ["Usuarios", "Roles"];

const UsersNavTab = ({currentRowInUsersTab, setCurrentNameTabInPrincipalTab}) => {
    //FIC: para saber cual es el numero de Tab seleccionado.
    const [currenTabIndex, setCurrentTabIndex] = useState(0);
    const handleChange = (e) => {
        
        console.log("entro al handleChange", e.target.innerText.toUpperCase());
        
        //FIC: actualizar el nombre de la pestaña seleccionada.
        setCurrentNameTabInPrincipalTab(e.target.innerText.toUpperCase());

        //FIC: opciones (subdocumentos de la coleccion principal de USUARIOS).
        switch (e.target.innerText.toUpperCase()) {
            case "USUARIOS":
                setCurrentTabIndex(0);
                break;
            case "ROLES":
                setCurrentTabIndex(1);
                break;
        }
    };

    return (
        <Box sx={{ border: (theme) => `2px solid ${theme.palette.divider}`, mx: 1, padding: 0.5 }}>
            <Tabs
                value={currenTabIndex}
                variant={"fullWidth"}
                onChange={handleChange}
                aria-label="icon tabs example"
                textColor="primary"
            >
                {UsersTabs.map((tab) => {
                    return <Tab key={tab} label={tab} disabled ={currentRowInUsersTab === null}/>;
                })}
            </Tabs>
        </Box>
    );
};
export default UsersNavTab;