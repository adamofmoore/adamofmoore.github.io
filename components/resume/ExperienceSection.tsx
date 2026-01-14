"use client";

import styled from "styled-components";
import { media } from "../../mixins/media";
import { Card, Section, SectionTitle } from "./ResumeStyles";
import type { ExperienceItem } from "./resumeData";

type Props = {
	items: ExperienceItem[];
};

export function ExperienceSection({ items }: Props) {
	return (
		<Section>
			<SectionTitle>Professional Experience</SectionTitle>
			<Stack>
				{items.map((exp) => {
					const heading = exp.company ? (
						<>
							{exp.role} <Company>at {exp.company}</Company>
						</>
					) : (
						exp.role
					);

					const key = `${exp.role}-${exp.dateRange}`;

					return (
						<Card key={key}>
							<RoleRow>
								<Role>{heading}</Role>
								<Dates>{exp.dateRange}</Dates>
							</RoleRow>
							<Bullets>
								{exp.bullets.map((b) => (
									<li key={b}>{b}</li>
								))}
							</Bullets>
						</Card>
					);
				})}
			</Stack>
		</Section>
	);
}

const Stack = styled.div`
	display: grid;
	gap: 12px;
`;

const RoleRow = styled.div`
	display: grid;
	gap: 4px;

	${media.tablet`
		grid-template-columns: 1fr auto;
		align-items: baseline;
		gap: 12px;
	`}
`;

const Role = styled.h3`
	margin: 0;
	font-size: 16px;
`;

const Company = styled.span`
	opacity: 0.85;
`;

const Dates = styled.div`
	font-size: 13px;
	opacity: 0.75;

	${media.tablet`
		text-align: right;
		white-space: nowrap;
	`}
`;

const Bullets = styled.ul`
	margin: 10px 0 0;
	padding-left: 18px;
	display: grid;
	gap: 4px;
`;
