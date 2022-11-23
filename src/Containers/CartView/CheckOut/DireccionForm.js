import React, { useContext, useState } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ElContexto } from '../../../components/Context/ContextApp';



export const Direccionform = () => {
    const [confirmacion, setConfirmacion] = useState(false);

    const { setDireccionCliente, setBuyer, correoConfirm, setCorreoConfirm, correo, setCorreo } = useContext(ElContexto);


    var nombre = "";
    var apellido = "";
    var direccion = "";
    var ciudad = "";
    var provincia = "";
    var cp = "";
    var pais = "";


    function handlerNombre(event) {
        nombre = event.target.value;
    }
    function handlerApellido(event) {
        apellido = event.target.value;
    }

    function handlerCorreo(event) {
        setCorreo(event.target.value);
        correo == correoConfirm ? setConfirmacion(true) : setConfirmacion(false);
    }
    function handlerCorreoConfirm(event) {
        setCorreoConfirm(event.target.value);

        correo == correoConfirm ? setConfirmacion(true) : setConfirmacion(false);

    }

    function handlerDireccion(event) {
        direccion = event.target.value;
    }
    function handlerCiudad(event) {
        ciudad = event.target.value;
    }
    function handlerProvincia(event) {
        provincia = event.target.value;
    }
    function handlerCp(event) {
        cp = event.target.value;
    }
    function handlerPais(event) {
        pais = event.target.value;
    }



    function pasarAComprar() {


        if (confirmacion == true) {
            setBuyer({ nombre, apellido, correo, direccion, ciudad, provincia, cp, pais });

            setDireccionCliente(true);
        } else {
            alert("Revisa los datos ingresados.");
        }


    };

    const estilos = {
        posicion: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        container: {
            width: 600,
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        simple: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 40,

        },
        simpleUnidad: {
            width: 520,
        },
        doble: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
            marginBottom: 40,
        },
        dobleUnidad: {
            width: 250,
        },
        boton: {
            paddingTop: 15,
            paddingBottom: 15,
            marginTop: 40,
        },
    };

    return (
        <div style={estilos.posicion}>
            <Paper elevation={3} style={estilos.container}>

                <h1>Dirección de envío</h1>
                <div style={estilos.doble}>
                    <TextField id="txt_nombre" onChange={(event) => { handlerNombre(event) }}
                        required label="Nombre" variant="standard" style={estilos.dobleUnidad} />

                    <TextField id="txt_apellido" onChange={(event) => { handlerApellido(event) }}
                        required label="Apellido" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="txt_correo" onChange={(event) => { handlerCorreo(event) }}
                        required label="Correo" variant="standard" style={estilos.dobleUnidad} />

                    <TextField id="txt_correoConfirmar" color={correoConfirm === '' ? "primary" : confirmacion === false ? "warning" : "success"}
                        onChange={(event) => { handlerCorreoConfirm(event) }} onBlur={(event) => { handlerCorreoConfirm(event) }}
                        required label="Confirmar correo" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.simple}>
                    <TextField id="txt_direccion" onChange={(event) => { handlerDireccion(event) }}
                        required label="Direccion" variant="standard" style={estilos.simpleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="txt_ciudad" onChange={(event) => { handlerCiudad(event) }}
                        required label="Ciudad" variant="standard" style={estilos.dobleUnidad} />

                    <TextField id="txt_provincia" onChange={(event) => { handlerProvincia(event) }}
                        label="Provincia" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="txt_cp" onChange={(event) => { handlerCp(event) }}
                        label="Codigo postal" variant="standard" style={estilos.dobleUnidad} />

                    <TextField id="txt_pais" onChange={(event) => { handlerPais(event) }}
                        required label="Pais" variant="standard" style={estilos.dobleUnidad} />
                </div>
            </Paper>
            <Button style={estilos.boton} variant="contained" onClick={() => { pasarAComprar() }}>Siguiente</Button>
        </div>

    );


};