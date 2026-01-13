"use client";

import React from "react";
import styled from "styled-components";
import { Card, Section, SectionTitle } from "./ResumeStyles";
import type { EducationItem } from "./resumeData";

type Props = {
	items: EducationItem[];
};

export function EducationSection({ items }: Props) {
	return (
		<Section>
			<SectionTitle>Education</SectionTitle>
			{items.map((ed) => (
				<Card key={`${ed.school}-${ed.dateRange}`}>
					<Row>
						<School>{ed.school}</School>
						<Dates>{ed.dateRange}</Dates>
					</Row>
					<Degree>{ed.degree}</Degree>
				</Card>
			))}
		</Section>
	);
}

const Row = styled.div`
	display: grid;
	gap: 6px;

	@media (min-width: 768px) {
		grid-template-columns: 1fr auto;
		align-items: baseline;
		gap: 12px;
	}
`;

const School = styled.h3`
	margin: 0;
	font-size: 16px;
`;

const Dates = styled.div`
	font-size: 13px;
	opacity: 0.75;

	@media (min-width: 768px) {
		text-align: right;
		white-space: nowrap;
	}
`;

const Degree = styled.p`
	margin: 10px 0 0;
	line-height: 1.55;
	opacity: 0.9;
`;
