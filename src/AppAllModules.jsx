import { RouterProvider } from "react-router-dom";
import  SecurityRouter from "./navigation/NaviRoutesSecurity";
import Footer from "./share/footer/components/Footer";

import { GET_DATA_START } from "./security/redux/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AppAllModules() {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(GET_DATA_START()).then(()=>{
            console.log("<<END-DISPATCH>>: GET_DATA_START se ejecuto de forma correcta");
        });
    });

    return (
        <>
            <div id='div-app'>
                {/*<h1>Main App - All Modules</h1>*/}
                <RouterProvider router={SecurityRouter} />
                <div id='div-footer'>
                    <Footer />
                </div>
            </div>
        </> 
    );
}