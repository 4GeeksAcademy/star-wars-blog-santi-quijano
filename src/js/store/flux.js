const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people").then(response => response.json())
					.then(data => {
						setStore({ people: data.results })
					})
					.then(console.log)
					.catch(error => {
						console.log(error);
					});
			},
			getPeopleDetails: (id, setParam) => {
				const store = getStore();
				fetch(`https://www.swapi.tech/api/people/${id}`).then(response => response.json())
				.then(data => {
					setParam(data)
					})
					.then(console.log)
					.catch(error => {
						console.log(error);
					});
			},
			putFavorite: (item) => {
				const store = getStore();
			const favorite = store.favorite.concat(item);
				setStore({ favorites: favorite});
			},
			removeFavorite: (index) => {
				const store = getStore();
			const favorite =
			}
		}
	};
};

export default getState;
