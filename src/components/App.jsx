import { Link, Route, Routes } from "react-router-dom";
import Customers from "./Customers";
import Dashboard from "./Dashboard";
import Help from "./Help";
import Income from "./Income";
import Product from "./Product";
import Promote from "./Promote";

import "../App.css";
import Layout from "./Layout";

function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="product" element={<Product />} />
					<Route path="customers" element={<Customers />} />
					<Route path="income" element={<Income />} />
					<Route path="promote" element={<Promote />} />
					<Route path="help" element={<Help />} />
					<Route
						path="*"
						element={
							<main>
								😥 Something Went Wrong 😥 go to <Link to="/">👉Home Page</Link>
							</main>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
