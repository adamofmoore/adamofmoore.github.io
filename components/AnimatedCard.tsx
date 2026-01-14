"use client";

import React from "react";
import styled from "styled-components";

const AnimatedGradientCard = styled.div`
	position: relative;
	border-radius: 18px;
	padding: 20px;
	background: rgba(255, 255, 255, 0.03);
	overflow: hidden;

	/* the animated gradient "border" layer */
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

const Content = styled.div`
	position: relative; /* keeps content above the pseudo border */
	display: grid;
	gap: 10px;
`;

const Title = styled.h3`
	margin: 0;
	font-size: 1.8rem;
`;

const Body = styled.p`
	margin: 0;
	line-height: 1.6;
	opacity: 0.85;
`;

export function ExampleAnimatedBorderCard() {
	return (
		<AnimatedGradientCard>
			<Content>
				<Title>Animated Gradient Border</Title>
				<Body>This card uses a pseudo-element + masking to render a moving gradient border without stretching the inner content.</Body>
			</Content>
		</AnimatedGradientCard>
	);
}
