import { configureStore } from "@reduxjs/toolkit";
import auth from "modules/Auth/slices/auth";


const store = configureStore({
    reducer:{
        auth,
    },
});

export default store;