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
	padding: 24px 18px 64px;

	${media.tablet`
		padding: 40px 28px 72px;
	`}
`;

export const HeaderRow = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	gap: 14px;
	margin-bottom: 28px;

	${media.tablet`
		grid-template-columns: 1.2fr 0.8fr;
		align-items: start;
		gap: 18px;
		margin-bottom: 34px;
	`}
`;

export const Name = styled.h1`
	margin: 0;
	font-size: 34px;
	line-height: 1.1;
	letter-spacing: -0.02em;

	${media.tablet`
		font-size: 44px;
	`}
`;

export const Title = styled.p`
	margin: 10px 0 0;
	font-size: 16px;
	line-height: 1.4;
	opacity: 0.85;

	${media.tablet`
		font-size: 18px;
	`}
`;

export const Section = styled.section`
	margin-top: 22px;

	${media.tablet`
		margin-top: 28px;
	`}
`;

export const SectionTitle = styled.h2`
	margin: 0 0 10px;
	font-size: 14px;
	letter-spacing: 0.12em;
	text-transform: uppercase;
`;

export const Card = styled.div`
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 14px;
	padding: 14px 14px;
	background: rgba(255, 255, 255, 0.03);

	${media.tablet`
		padding: 16px 18px;
	`}
`;

export const Body = styled.p`
	margin: 0;
	font-size: 15px;
	line-height: 1.6;

	${media.tablet`
		font-size: 16px;
	`}
`;

export const Muted = styled.span`
	opacity: 0.75;
`;

export const Divider = styled.hr`
	border: 0;
	height: 1px;
	background: rgba(255, 255, 255, 0.12);
	margin: 14px 0;

	${media.tablet`
		margin: 16px 0;
	`}
`;
