// App.js
import React from "react";
import "./App.css";
class App extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
        return res.json()
      })
			.then((json) => {
        console.log(json);
				this.setState({
					items: json,
					DataisLoaded: true,
				});
			})
      .catch((error) => {
         console.log("Something went wrong !!!"+error)
      })
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Pleses wait some time.... </h1>
				</div>
			);

		return (
			<div className="App">
				<h1 className="geeks">GeeksforGeeks</h1>
				<h3>Fetch data from an api in react</h3>
				<div className="container">
					{items.map((item) => (
						<div className="item">
							<ol key={item.id}>
								<div>
									<strong>
										{"User_Name: "}
									</strong>
									{item.username},
								</div>
								<div>
									Full_Name: {item.name},
								</div>
								<div>
									User_Email: {item.email}
								</div>
							</ol>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
