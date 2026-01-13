import styled from "styled-components";

export const PageWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: #121212;
	position: relative;

	&:before {
		content: "";
		position: absolute;
		inset: 0;
		background: rgba(6, 6, 6, 0.85);
	}

	> * {
		position: relative;
	}
`;
