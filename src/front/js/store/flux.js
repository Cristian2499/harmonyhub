const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			register: async (email,password,name,lastname,nickname,gender,country) => {
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/registrer",
						{
							method: "POST",
							headers: { 
								"Content-Type": "application/json",
							},
							body: JSON.stringify({email,password,name,lastname,nickname,gender,country}),
						}	
					);
					if (!response.ok) {
						return false;
					}
					const data = response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},		
	
		}
	};
};

export default getState;
