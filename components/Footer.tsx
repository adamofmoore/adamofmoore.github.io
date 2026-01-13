import styled from "styled-components";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterWrapper>
			<p>Copyright &copy; {currentYear}. All Rights Reserved.</p>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	padding: 8px 12px;
	color: #ccc;
	font-size: 1.4rem;
	background: rgba(6, 6, 6, 0.666);
	text-align: center;
`;
