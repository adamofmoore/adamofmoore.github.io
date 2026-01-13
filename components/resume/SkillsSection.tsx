"use client";

import styled from "styled-components";
import { media } from "../../mixins/media";
import { Card, Section, SectionTitle } from "./ResumeStyles";

type Props = {
	skillsAndExpertise: string[];
	technicalSkills: string[];
	designSkills: string[];
};

export function SkillsSection({ skillsAndExpertise, technicalSkills, designSkills }: Props) {
	return (
		<Section>
			<SectionTitle>Skills &amp; Expertise</SectionTitle>
			<Card>
				<TwoCol>
					<div>
						<ColTitle>Technical Skills</ColTitle>
						<List>
							{technicalSkills.map((s) => (
								<li key={s}>{s}</li>
							))}
						</List>
					</div>
					<div>
						<ColTitle>Design Skills</ColTitle>
						<List>
							{designSkills.map((s) => (
								<li key={s}>{s}</li>
							))}
						</List>
					</div>
				</TwoCol>
			</Card>
		</Section>
	);
}

const TwoCol = styled.div`
	display: grid;
	gap: 12px;

	${media.tablet`
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	`}
`;

const ColTitle = styled.h3`
	margin: 0 0 12px;
	font-size: 1.4rem;
`;

const List = styled.ul`
	margin: 0;
	padding-left: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;

	li {
		display: inline-flex;
		align-items: center;
		padding: 8px 12px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(255, 255, 255, 0.04);
		font-size: 1.4rem;
		line-height: 1;
		white-space: nowrap;
	}
`;
