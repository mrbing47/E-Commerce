import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

import configStore from "./store/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

const store = configStore();

function App() {
	console.log(store);

	return (
		<Router>
			<Provider store={store}>
				<div className="App">
					<Navbar />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/shop" component={Shop} />
						<Route path="/profile" component={Profile} />
						<Route path="/cart" component={Cart} />
						<Route path="/" component={NoMatch} />
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
