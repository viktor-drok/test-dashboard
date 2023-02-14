import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Greatings from "./Greatings";

const Layout = () => {
	return (
		<>
			<Aside />
			<div>
				<div>
					<Greatings />
				</div>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
