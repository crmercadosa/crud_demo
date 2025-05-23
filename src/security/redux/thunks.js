//NOTA: Este archivo contiene funciones ASYNCRONAS 
//que nos ayuda a obtener la respuesta del servidor 
//y poder mandarla al SLICE y a su estado
import { getUsersAll } from './actions/usersAction';
import { SET_DATA_USERS } from './slices/UserSlice';

export const GET_DATA_START = () => {
    return async (dispatch) => {
        dispatch(
            SET_DATA_USERS(
                //FIC: lo que esta comentado es para cuando se utiliza
                //un reducer que contedra un arreglo de colecciones
                //tal sera el caso como el de catalogos.
                //{
                    //institutesDataArr: await getInstitutesAll(),
                    await getUsersAll(),
                //}
            )
        )
    };
};