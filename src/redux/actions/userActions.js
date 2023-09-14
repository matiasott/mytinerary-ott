import { createAction } from "@reduxjs/toolkit";

export const cargarUsuario = createAction('cargar_usuario', (user) => {
    return {
        payload: user
    }
});

export const borrarUsuario = createAction('borrar_usuario', () => {
    return {
        payload: null
    }
});