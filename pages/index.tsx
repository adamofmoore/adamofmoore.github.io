import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Resume } from "../components/resume/Resume";

export default function Home() {
	return (
		<>
			<Wrapper>
				<Resume />
			</Wrapper>
			<Footer />
		</>
	);
}

const Wrapper = styled.div`
	background: #121212;
	/* background-size: cover; */
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Main = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 32px;
	padding-bottom: 80px;
`;
