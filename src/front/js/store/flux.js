const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
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
					console.log(data);
					localStorage.setItem("token", data.token);
					setStore({token: data.token});
					return true; 
				}catch (error) {
					console.error('Error en la solicitud:', error);
				}

			}
	
		}
	};
};

export default getState;
