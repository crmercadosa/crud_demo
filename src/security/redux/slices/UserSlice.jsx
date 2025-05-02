import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    //DATA
	usersDataArr: [],
   
   //SELECCIONES
   //instituteDataObj: {},
    //BOOLEANS/VARIABLES
}
const usersSlice = createSlice({
	name: 'USERS',
	initialState,
	reducers: {
		SET_DATA_USERS: (state, action) => { 			
                        console.log('<<REDUX-REDUCER>>:<<SET_DATA_USERS>>', action.payload);
			//state.usersDataArr = action.payload.usersDataArr;
			state.usersDataArr = action.payload
		}
    }
}
);
export const {
	SET_DATA_USERS,
    //ADD_PRODUCT_SELECTED,
    //SWITCH_STATE,
} = usersSlice.actions;
export default usersSlice.reducer;