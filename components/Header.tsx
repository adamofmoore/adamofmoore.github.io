import styled from "styled-components";
import { Container } from "./layout/Container";

export const Header = () => {
	return (
		<Container>
			<Wrapper></Wrapper>
		</Container>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 0;
`;
