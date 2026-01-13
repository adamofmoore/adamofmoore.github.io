"use client";

import { ContactBlock } from "./ContactBlock";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { resumeData } from "./resumeData";
import { Body, Card, Container, HeaderRow, Name, Page, Section, SectionTitle, Title } from "./ResumeStyles";
import { SkillsSection } from "./SkillsSection";

export function Resume() {
	const { name, title, contacts, sections } = resumeData;

	return (
		<Page>
			<Container>
				<HeaderRow>
					<div>
						<Name>{name}</Name>
						<Title>{title}</Title>
					</div>
					<ContactBlock contacts={contacts} />
				</HeaderRow>
				<Section>
					<SectionTitle>Professional Summary</SectionTitle>
					<Card>
						<Body>{sections.professionalSummary}</Body>
					</Card>
				</Section>
				<SkillsSection skillsAndExpertise={sections.skillsAndExpertise} technicalSkills={sections.technicalSkills} designSkills={sections.designSkills} />
				<ExperienceSection items={sections.experience} />
				<EducationSection items={sections.education} />
			</Container>
		</Page>
	);
}
