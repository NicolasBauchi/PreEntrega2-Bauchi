import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ItemList } from "../ItemListContainer/ItemList/ItemList";


export const ItemListContainer = () => {
    const estiloListContainer = {
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    const [productos, setProductos] = useState([]);
    const [cargas, setCargas] = useState(true);

    const { id } = useParams();
    let cat_nombre_esp = "";
    if (id === "electronicos") {
        cat_nombre_esp = "electronics";
    } else if (id === "joyeria") {
        cat_nombre_esp = "jewelery";
    } else if (id === "ropa-hombre") {
        cat_nombre_esp = "men's clothing";
    } else if (id === "ropa-mujer") {
        cat_nombre_esp = "women's clothing";
    }

    const URL_BASE = "https://fakestoreapi.com/products";
    const URL_FULL = `${URL_BASE}/category/${cat_nombre_esp}`;



    useEffect(() => {
        const getProductos = async () => {

            try {
                const datos = await fetch(id ? URL_FULL : URL_BASE);
                const res = await datos.json();
                setProductos(res);
                console.log(res);

            } catch (error) {
                console.log(error);
            } finally {
                setCargas(false);
            }
        }
        getProductos();

    }, [id]);

    try {



    } catch (error) {

    }

    return (
        <div style={estiloListContainer}>
            {<>{cargas ? <h1>Cargando!!</h1> : <ItemList productos={productos} />}</>}
        </div>
    )


}

