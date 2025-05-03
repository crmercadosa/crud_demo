import React from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Typography, TextField, DialogActions, Alert, Box} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
//FIC: Formik - Yup
import { useFormik } from "formik";
import * as Yup from "yup";
//Importamos user values
import { UserValues } from "../../helpers/UsersValues";
//Importamos servicio add one user
import { AddOneUser } from "../../services/remote/post/AddOneUser";

const AddUsersModal = ({AddUsersShowModal, setAddUsersShowModal}) => {

    
    const [mensajeErrorAlert, setMensajeErrorAlert] = useState("");
    const [mensajeExitoAlert, setMensajeExitoAlert] = useState("");

    //FIC: Definition Formik y Yup.
    const formik = useFormik({
        initialValues: {
            UserId:"",
            UserName:"",
            Alias:"",
            Email:"",
            PhoneNumber:"",
            Department:"",
            Function:"",
            CompanyAlias:""
        },
        validationSchema: Yup.object({
            UserId: Yup.string().required("Campo requerido"),
            UserName: Yup.string().required("Campo requerido"),
            Alias: Yup.string(),
            Email: Yup.string().required("Campo requerido"),
            PhoneNumber: Yup.string().required("Campo requerido"),
            Department: Yup.string().required("Campo requerido"),
            Function: Yup.string().required("Campo requerido"),
            CompanyAlias: Yup.string().required("Campo requerido"),
        }),
        onSubmit: async () => {
            setMensajeErrorAlert(null);
            setMensajeExitoAlert(null);
            // const User = UserValues(values);

            // await AddOneUser(User);
            // setMensajeExitoAlert("Instituto fue creado y guardado Correctamente");
            
            try{
                setMensajeExitoAlert("Usuario creado con éxito");
            }catch{
                setMensajeErrorAlert(null);
                setMensajeErrorAlert("No se pudo crear el usuario");
            }
        },
    });


    //FIC: props structure for TextField Control.
    const commonTextFieldProps = {
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        fullWidth: true,
        margin: "dense",
        disabled: !!mensajeExitoAlert,
    };

    return(
        <Dialog 
            open={AddUsersShowModal}
            onClose={() => setAddUsersShowModal(false)}
            fullWidth
        >
            <form onSubmit={formik.handleSubmit}>
                {/* FIC: Aqui va el Titulo de la Modal */}
                <DialogTitle>
                    <Typography component="h6">
                        <strong>Agregar Nuevo Usuario</strong>
                    </Typography>
                </DialogTitle>
                {/* FIC: Aqui va un tipo de control por cada Propiedad de Usuario */}
                <DialogContent 
                    sx={{ display: 'flex', flexDirection: 'column' }}
                    dividers
                >
                    {/* FIC: Campos de captura o selección */}
                    <TextField
                        id="UserId"
                        label="ID de Usuario*"
                        value={formik.values.UserId}
                        {...commonTextFieldProps}
                        error={ formik.touched.UserId && Boolean(formik.errors.UserId) }
                        helperText={ formik.touched.UserId && formik.errors.UserId }
                    />
                    <TextField
                        id="UserName"
                        label="Nombre completo*"
                        value={formik.values.UserName}
                        {...commonTextFieldProps}
                        error={ formik.touched.UserName && Boolean(formik.errors.UserName) }
                        helperText={ formik.touched.UserName && formik.errors.UserName }
                    />
                    <TextField
                        id="Alias"
                        label="Alias"
                        value={formik.values.Alias}
                        {...commonTextFieldProps}
                        error={ formik.touched.Alias && Boolean(formik.errors.Alias) }
                        helperText={ formik.touched.Alias && formik.errors.Alias }
                    />
                    <TextField
                        id="Email"
                        label="Correo"
                        value={formik.values.Email}
                        {...commonTextFieldProps}
                        error={ formik.touched.Email && Boolean(formik.errors.Email) }
                        helperText={ formik.touched.Email && formik.errors.Email }
                    />
                    <TextField
                        id="PhoneNumber"
                        label="Número de teléfono"
                        value={formik.values.PhoneNumber}
                        {...commonTextFieldProps}
                        error={ formik.touched.PhoneNumber && Boolean(formik.errors.PhoneNumber) }
                        helperText={ formik.touched.PhoneNumber && formik.errors.PhoneNumber }
                    />
                    <TextField
                        id="Department"
                        label="Departamento"
                        value={formik.values.Department}
                        {...commonTextFieldProps}
                        error={ formik.touched.Department && Boolean(formik.errors.Department) }
                        helperText={ formik.touched.Department && formik.errors.Department }
                    />
                    <TextField
                        id="Function"
                        label="Función"
                        value={formik.values.Function}
                        {...commonTextFieldProps}
                        error={ formik.touched.Function && Boolean(formik.errors.Function) }
                        helperText={ formik.touched.Function && formik.errors.Function }
                    />
                    <TextField
                        id="CompanyAlias"
                        label="Alias de la compañía"
                        value={formik.values.CompanyAlias}
                        {...commonTextFieldProps}
                        error={ formik.touched.CompanyAlias && Boolean(formik.errors.CompanyAlias) }
                        helperText={ formik.touched.CompanyAlias && formik.errors.CompanyAlias }
                    />
                </DialogContent>
                {/* FIC: Aqui van las acciones del usuario como son las alertas o botones */}
                <DialogActions
                    sx={{ display: 'flex', flexDirection: 'row' }}
                >
                    <Box m="auto">
                        {console.log("mensajeExitoAlert", mensajeExitoAlert)}
                        {console.log("mensajeErrorAlert", mensajeErrorAlert)}
                        {mensajeErrorAlert && (
                        <Alert severity="error">
                            <b>¡ERROR!</b> ─ {mensajeErrorAlert}
                        </Alert>
                        )}
                        {mensajeExitoAlert && (
                        <Alert severity="success">
                            <b>¡ÉXITO!</b> ─ {mensajeExitoAlert}
                        </Alert>
                        )}
                    </Box>
                    {/* FIC: Boton de Cerrar. */}
                    <LoadingButton
                        color="secondary"
                        loadingPosition="start"
                        startIcon={<CloseIcon />}
                        variant="outlined"
                        onClick={() => setAddUsersShowModal(false)}
                    >
                        <span>CERRAR</span>
                    </LoadingButton>
                     {/* FIC: Boton de Guardar. */}
                     <LoadingButton
                        color="primary"
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        type="submit"
                        disabled={!!mensajeExitoAlert}
                        //onClick={() => setAddUserseShowModal(false)}
                    >
                        <span>GUARDAR</span>
                    </LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    );
};
export default AddUsersModal;