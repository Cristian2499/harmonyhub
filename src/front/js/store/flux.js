const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			users: [],
			currentUser: null, // Aquí se almacenará el usuario autenticado
		},
		actions: {
			register: async (email, password, name, lastname, nickname, gender, country) => {
				console.log(email, password, name, lastname, nickname, gender, country);
				try {
					const response = await fetch(
						`${process.env.BACKEND_URL}/api/register`,
						{
							method: "POST",
							headers: { 
								"Content-Type": "application/json",
							},
							body: JSON.stringify({email, password, name, lastname, nickname, gender, country}),
						}   
					);
					if (!response.ok) {
						console.error('Error en la solicitud:', response.statusText);
						return false;
					}
					const data = await response.json();
					console.log(data);
					return true;
				} catch (error) {
					console.error('Error en la solicitud:', error);
				}
			},

			login: async (email, password) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/login`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({email,password})
					}
					)
					if(!response.ok){
						return false;
					}
					 
					
					const data = await response.json();
                    localStorage.setItem("token", data.token);

                    // Guardar token y datos del usuario en el store
                    setStore({
                        token: data.token,
                        currentUser: data.user // Guardar el usuario en el store
                    });

                    

                    return true;
				}catch (error) {
					console.error('Error en la solicitud:', error);
				}

			},

			getUsers: async () => {
				const store = getStore();
				
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/users`)
					if (!response.ok) {
						throw new error ("No se cargo la API");
					}
					const data = await response.json();
					
					
					setStore({users: data});
					
					
				} catch (error) {
					console.log("Entro en el catch del getUsers:")
					console.log(error)
				}
			},

			// de aqui para abajo ayudo alexis para el search
			getAllMusicGenders: async () => {
				
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/music_gender`)
					if (!response.ok) {
						throw new error ("No se cargo la API");
					}
					const data = await response.json();
					return data 		
					
				} catch (error) {
					console.log("Entro en el catch del getAllMusicGenders:")
					console.log(error)
				}
			},

			getAllMusicRoles: async () => {

				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/music_role`)
					if (!response.ok) {
						throw new error ("No se cargo la API");
					}
					const data = await response.json();
					return data 		
					
				} catch (error) {
					console.log("Entro en el catch del getAllMusicRoles:")
					console.log(error)
				}
			}
	
		}
	};
};

export default getState;
