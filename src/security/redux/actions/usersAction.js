import axios from 'axios';
export async function getUsersAll() {
	let result = await axios.get(`${import.meta.env.VITE_GET_ALL_Users_URL}`);
	console.log('<<AXIOS-USUARIOS>>: ', result.data);
	return result.data;
}