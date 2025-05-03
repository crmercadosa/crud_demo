import axios from "axios";

export function AddOneUser(user) {
  console.log("<<EJECUTA>> API <<AddOneUser>> Requiere:", user);

  return new Promise((resolve, reject) => {
    // Asegúrate de tener definida esta variable en tu archivo .env
    axios.post(import.meta.env.VITE_ADD_USER_URL, user ) // importante: envolver en objeto
      .then((response) => {
        console.log("<<RESPONSE>> AddOneUser", response.data);

        const data = response.data;

        if (!data.success) {
          console.error("<<ERROR>> <<NO>> se ejecutó correctamente <<AddOneUser>>", data);
          reject(data);
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        console.error("<<ERROR>> en API <<AddOneUser>>", error);
        reject(error);
      });
  });
}
