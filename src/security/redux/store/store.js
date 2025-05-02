import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../slices/UserSlice";
const store = configureStore({
    reducer: {
      usersReducer: usersSlice,
      //productosSliceReducer: productosSlice,
    },
  });
  
  export default store;