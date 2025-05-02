import axios from "axios";

export function getAllUsers() {
  return new Promise((resolve, reject) => {
    axios.get(import.meta.env.VITE_GET_ALL_Users_URL)
      .then((response) => {
        const data = response.data;

        if (!data || !data.value || !Array.isArray(data.value)) {
          console.error("Formato inesperado en la respuesta <<getAllUsers - Services>>", data);
          reject(new Error("Formato inesperado en la respuesta"));
        } else if (data.value.length === 0) {
          console.info("🛈 No se encontraron usuarios en <<ZTUSERS>>");
          resolve([]);
        } else {
          // Extraer los usuarios del primer objeto del arreglo `value`
          const UsersData = data.value[0].users;
          console.log("Colección: <<ZTUSERS>>", UsersData);
          resolve(JSON.parse(JSON.stringify(UsersData))); // copia profunda opcional
        }
      })
      .catch((error) => {
        console.error("Error en <<getAllUsers - Services>>", error);
        reject(error);
      });
  });
}
