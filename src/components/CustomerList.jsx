import { customers } from "../allCustomers";
import styled from "styled-components";

const ListItemStyled = styled.li`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	align-items: center;
	height: 69px;
	border-bottom: 1px solid #eeeeee;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.01em;
	color: #292d32;
`;

const StatusActive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(22, 192, 152, 0.38);
	border: 1px solid #00b087;
	border-radius: 4px;
	width: 80px;
	height: 29px;
	color: #008767;
`;
const StatusInactive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffc5c5;
	border: 1px solid #df0404;
	border-radius: 4px;
	width: 80px;
	height: 29px;
	color: #df0404;
`;

const CustomerList = () => {
	return (
		<>
			{customers.map(customer => (
				<ListItemStyled key={customer.id}>
					<div>{customer.name}</div>
					<div>{customer.company}</div>
					<div>{customer.phone}</div>
					<div>{customer.email}</div>
					<div>{customer.country}</div>
					<div style={{ display: "flex", justifyContent: "flex-end" }}>
						{customer.status ? <StatusActive>Active</StatusActive> : <StatusInactive>Inactive</StatusInactive>}
					</div>
				</ListItemStyled>
			))}
		</>
	);
};

export default CustomerList;
