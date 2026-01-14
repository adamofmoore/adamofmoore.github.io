"use client";

import Image from "next/image";
import styled from "styled-components";
import type { ContactItem } from "./resumeData";
import { media } from "../../mixins/media";

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
				<li>
					<Link href="https://linkedin.com/in/adam-moore-85154632/" target="_blank" rel="noreferrer">
						<Image src="/images/linkedin.png" alt="LinkedIn Logo" width={28} height={24} />
					</Link>
				</li>
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
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 12px;

	${media.tabletMax`
        li:last-of-type {
            margin-left: auto;
        }    
    `}

	${media.tablet`
        display: grid;
        gap: 6px;
		justify-items: end;
		text-align: right;
	`}
`;

const Item = styled.li`
	font-size: 1.4rem;
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
