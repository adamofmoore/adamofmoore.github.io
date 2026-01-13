"use client";

import styled from "styled-components";
import { media } from "../../mixins/media";

export const Page = styled.main`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 980px;
	padding: 24px 20px 64px;

	${media.tablet`
		padding: 40px 28px 72px;
	`}
`;

export const HeaderRow = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	gap: 12px;
	margin-bottom: 28px;

	${media.tablet`
		grid-template-columns: 1.2fr 0.8fr;
		align-items: start;
		gap: 16px;
		margin-bottom: 34px;
	`}
`;

export const Name = styled.h1`
	margin: 0;
	font-size: 3.4rem;
	line-height: 1.1;
	letter-spacing: -0.02em;

	${media.tablet`
		font-size: 4.4rem;
	`}
`;

export const Title = styled.p`
	font-size: 1.6rem;
	line-height: 1.4;
	opacity: 0.85;

	${media.tablet`
		font-size: 1.8rem;
	`}
`;

export const Section = styled.section`
	margin-top: 24px;

	${media.tablet`
		margin-top: 28px;
	`}
`;

export const SectionTitle = styled.h2`
	margin: 0 0 12px;
	font-size: 1.6rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
`;

export const Card = styled.div`
	position: relative;
	border-radius: 16px;
	padding: 16px 16px;
	background: rgba(255, 255, 255, 0.03);
	overflow: hidden;

	${media.tablet`
		padding: 16px 20px;
	`}

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		padding: 2px; /* border thickness */
		border-radius: inherit;

		background: linear-gradient(90deg, #1e3a8a, #10b981, #22c55e, #06b6d4, #1e3a8a);
		background-size: 300% 300%;
		animation: gradientShift 6s ease-in-out infinite;

		/* Make the gradient show ONLY as a border */
		-webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
		-webkit-mask-composite: xor;
		mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
		mask-composite: exclude;

		pointer-events: none;
	}

	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	/* optional: reduce animation for motion-sensitive users */
	@media (prefers-reduced-motion: reduce) {
		&::before {
			animation: none;
		}
	}
`;

export const Body = styled.p`
	margin: 0;
	font-size: 1.6rem;
	line-height: 1.6;

	${media.tablet`
		font-size: 1.7rem;
	`}
`;

export const Muted = styled.span`
	opacity: 0.75;
`;

export const Divider = styled.hr`
	border: 0;
	height: 1px;
	background: rgba(255, 255, 255, 0.12);
	margin: 16px 0;
`;
