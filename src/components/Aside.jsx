import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Customer, Dashboard, Help, Income, Logo, Product, Promote, Arrow } from "../img/index";

const AsideStyled = styled.aside`
	padding-left: 28px;
	padding-top: 36px;
	padding-right: 28px;
`;

const LogoTitleStyled = styled.h1`
	font-weight: 600;
	font-size: 26px;
	line-height: 39px;
	letter-spacing: 0.01em;
	color: #000000;
	margin-left: 8px;
`;

const LogoVersionStyled = styled.span`
	display: inline;
	font-weight: 500;
	font-size: 10px;
	line-height: 15px;
	letter-spacing: -0.01em;
	color: #838383;
	vertical-align: baseline;
	margin-left: 4px;
`;

const UlStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 29px;
	margin-top: 64px;
`;

const ListItemStyled = styled.li`
	box-sizing: border-box;
	padding-left: 11px;
`;

const NavLinkStyled = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	gap: 14px;
	padding: 11px 8px 11px 11px;
	border-radius: 8px;

	&.active {
		background: #5932ea;
		border-radius: 8px;
		padding: 11px 8px 11px 11px;
	}

	&.active span {
		color: #ffffff;
	}

	&:hover:not(.active) {
		background: #5932ea;
		border-radius: 8px;
		padding: 11px 8px 11px 11px;
	}

	span {
		font-weight: 500;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.01em;
		color: #9197b3;
	}

	&.active > svg path {
		stroke: #ffffff;
	}
`;

const Aside = () => {
	return (
		<AsideStyled>
			<div style={{ display: "flex" }}>
				<Logo />
				<LogoTitleStyled>
					Dashboard<LogoVersionStyled>v.01</LogoVersionStyled>
				</LogoTitleStyled>
			</div>
			<UlStyled>
				<ListItemStyled>
					<NavLinkStyled to="/dashboard">
						<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
							<Dashboard />
							<span>Dashboard</span>
						</div>
					</NavLinkStyled>
				</ListItemStyled>
				<ListItemStyled>
					<NavLinkStyled to="/product">
						<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
							<Product />
							<span>Product</span>
						</div>
						<Arrow />
					</NavLinkStyled>
				</ListItemStyled>
				<ListItemStyled>
					<NavLinkStyled to="/customers">
						<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
							<Customer />
							<span>Customers</span>
						</div>
						<Arrow />
					</NavLinkStyled>
				</ListItemStyled>
				<ListItemStyled>
					<NavLinkStyled to="/income">
						<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
							<Income />
							<span>Income</span>
						</div>
						<Arrow />
					</NavLinkStyled>
				</ListItemStyled>
				<ListItemStyled>
					<NavLinkStyled to="/promote">
						<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
							<Promote />
							<span>Promote</span>
						</div>
						<Arrow />
					</NavLinkStyled>
				</ListItemStyled>
				<ListItemStyled>
					<NavLinkStyled to="/help">
						<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
							<Help />
							<span>Help</span>
						</div>
						<Arrow />
					</NavLinkStyled>
				</ListItemStyled>
			</UlStyled>
		</AsideStyled>
	);
};

export default Aside;
