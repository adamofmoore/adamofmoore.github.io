"use client";

import React from "react";
import styled from "styled-components";
import type { ContactItem } from "./resumeData";

export function ContactBlock({ contacts }: Props) {
	return (
		<Wrap aria-label="Contact information">
			<List>
				{contacts.map((c) => {
					const key = `${c.type}-${c.value}`;

					if ("href" in c) {
						return (
							<Item key={key}>
								<Link href={c.href} target={c.type === "link" ? "_blank" : undefined} rel={c.type === "link" ? "noreferrer" : undefined}>
									{c.value}
								</Link>
							</Item>
						);
					}
					return <Item key={key}>{c.value}</Item>;
				})}
			</List>
		</Wrap>
	);
}

const Wrap = styled.div`
	display: grid;
	gap: 10px;
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	gap: 8px;

	@media (min-width: 768px) {
		justify-items: end;
		text-align: right;
	}
`;

const Item = styled.li`
	font-size: 14px;
	line-height: 1.45;
	opacity: 0.9;
`;

const Link = styled.a`
	color: inherit;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	&:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.5);
		outline-offset: 2px;
		border-radius: 6px;
	}
`;

type Props = {
	contacts: ContactItem[];
};
