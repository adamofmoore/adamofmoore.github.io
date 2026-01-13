export type ContactItem = { type: "email"; label: string; value: string; href: string } | { type: "phone"; label: string; value: string; href: string } | { type: "location"; label: string; value: string } | { type: "link"; label: string; value: string; href: string };

export type ExperienceItem = {
	role: string;
	company: string;
	dateRange: string;
	bullets: string[];
};

export type EducationItem = {
	school: string;
	dateRange: string;
	degree: string;
};

export type ResumeData = {
	name: string;
	title: string;
	contacts: ContactItem[];
	sections: {
		professionalSummary: string;
		skillsAndExpertise: string[];
		technicalSkills: string[];
		designSkills: string[];
		experience: ExperienceItem[];
		education: EducationItem[];
	};
};

export const resumeData: ResumeData = {
	name: "Adam Moore",
	title: "Lead UX Engineer",
	contacts: [
		{
			type: "email",
			label: "Email",
			value: "adamofmoore@gmail.com",
			href: "mailto:adamofmoore@gmail.com",
		},
		{ type: "location", label: "Location", value: "Sacramento, CA" },
	],
	sections: {
		professionalSummary: "Over 20 years of professional experience taking websites and apps for both mobile and desktop platforms from design to reality. I have a strong focus on high-quality design, attention to detail, and clean, reusable, high-performance code.",
		skillsAndExpertise: ["React", "React Native", "Next.js", "TypeScript", "Design System Mgmt.", "Styled Components", "Git", "SCSS", "Webpack", "WordPress", "Storybook", "Lighthouse"],
		technicalSkills: ["React", "React Native", "Next.js", "TypeScript", "Styled Components", "Git", "SCSS", "Webpack", "WordPress", "Storybook", "Lighthouse"],
		designSkills: ["UI/UX", "Design Systems", "Figma", "Sketch", "Adobe CC", "Branding", "Prototyping", "Wireframing", "Accessibility"],
		experience: [
			{
				role: "Lead UX Engineer",
				company: "TrainerRoad",
				dateRange: "Jun 2014 - Present",
				bullets: ["Built and maintained an internal design system used across multiple platforms.", "Cross-functional communication between design, development and management teams.", "Contributed significantly to multiple websites and apps for iOS, Android, macOS and Windows.", "Continuously learned and adopted new programming languages and technologies as the stack evolved."],
			},
			{
				role: "Previous Web Designer & Front End Developer Roles",
				company: "",
				dateRange: "May 2009 - July 2014",
				bullets: ["Designed, built, and maintained websites and graphics for a wide range of clients, platforms and media.", "Lofty Word (July 2013 - July 2014)", "Blast Analytics & Marketing (August 2011 - July 2013)", "RTM Productions (May 2009 - July 2011)"],
			},
		],
		education: [
			{
				school: "Middle Tennessee State University",
				dateRange: "2005 - 2009",
				degree: "Bachelor Degree in Mass Communications with focus on Digital Media.",
			},
		],
	},
};
