import { Box, Tab, Tabs, Stack } from "@mui/material";
import React, { useState } from "react";

const RolesTabs = ["Roles"];

const RolesNavTab = ({ currentRowInRolesTab, setCurrentNameTabInRolesTab }) => {
	
	const [currenTabIndex, setCurrentTabIndex] = useState(0);

	//FIC: Evento Change
	const handleChange = (e) => {
		setCurrentNameTabInRolesTab(e.target.innerText.toUpperCase());
		switch (e.target.innerText.toUpperCase()) {
			case "Roles":
				setCurrentTabIndex(0);
				break;   
		}
	};
	return (
		<Box sx={{ border: (theme) => `1px solid ${theme.palette.divider}`, mx: 1, padding: 0.5 }}>
			<Tabs
				value={currenTabIndex}
				variant={"fullWidth"}
				onChange={handleChange}
				aria-label="icon tabs example"
				textColor="primary"
			>
				
				{RolesTabs.map((tab) => {		
					return <Tab key={tab} label={tab} disabled ={currentRowInRolesTab === null}/>;
				})}
			</Tabs>
		</Box>
	);
};

export default RolesNavTab;