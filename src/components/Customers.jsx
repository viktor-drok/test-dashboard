import CustomerList from "./CustomerList";
import styled from "styled-components";

const ListStyled = styled.ul`
	margin-left: 38px;
	margin-right: 40px;
`;

const ListItemCuption = styled.li`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.01em;
	color: #b5b7c0;
`;

const Customers = () => {
	return (
		<main>
			<div>
				<div>
					<h4>All Customers</h4>
					<p>Active Members</p>
				</div>
				<input type="text" placeholder="Search" />
			</div>
			<ListStyled>
				<ListItemCuption key="cuption">
					<div>Customer Name</div>
					<div>Company</div>
					<div>Phone Number</div>
					<div>Email</div>
					<div>Country</div>
					<div style={{ display: "flex", justifyContent: "center" }}>Status</div>
				</ListItemCuption>
				<hr style={{ width: "100%", marginLeft: "-38px", marginRight: "-40px" }} />
				<CustomerList />
			</ListStyled>
		</main>
	);
};

export default Customers;
