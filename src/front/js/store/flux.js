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
				console.log(email,password,name,lastname,nickname,gender,country);
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/register",
						{
							method: "POST",
							headers: { 
								"Content-type": "application/json",
							},
							body: JSON.stringify({email:email,password:password,name:name,lastname:lastname,nickname:nickname,gender:gender,country:country}),
						}	
					);
					if (!response.ok) {
						return false;
					}
					const data = await response.json();
					console.log(data);
					return data;
				} catch (error) {
					console.log(error);
				}
			},		
	
		}
	};
};

export default getState;
