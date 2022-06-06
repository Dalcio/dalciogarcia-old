import styled, { css } from 'styled-components';

import { Title, Text, Subtitle } from '@components/common';

type ArticleProps = {
	name: string;
	date: string;
	desc: string;
	link: string;
	home?: boolean;
	className?: string;
};

const ArticleContainer = styled.a(
	({ theme: t }) => css`
		text-decoration: none;
		display: inline-block;
		color: ${t.colors.text};

		.date {
			margin-bottom: ${t.space.md};
			color: ${t.colors.primary};
		}

		:hover {
			opacity: 0.8;
			cursor: pointer;
			&:not(:last-of-type) {
				border-bottom-color: rgba(0, 0, 0, 0.8);
			}
		}

		&:not(:last-of-type) {
			margin-bottom: calc(3 * ${t.space.lg});
			padding-bottom: ${t.space.lg};
			border-bottom: 1px solid ${t.colors.border};
		}

		${t.media.bp1} {
			display: inline-grid;
			grid-template-columns: 0.4fr 0.6fr;
			column-gap: ${t.space.md};
		}
	`
);

export const Article = ({
	home,
	date,
	name,
	desc,
	link,
	className
}: ArticleProps) => (
	<ArticleContainer className={className} href={link} target="blank">
		<div>
			{(!home && (
				<>
					<Subtitle className="date">
						<small>Article written on</small> {date}
					</Subtitle>
					<Title type="small" className="name">
						{name}
					</Title>
				</>
			)) || (
				<>
					<Subtitle type="subtitle-3" className="date">
						<small>Article written on</small> {date}
					</Subtitle>
					<Subtitle type="subtitle-2" className="name">
						{name}
					</Subtitle>
				</>
			)}
		</div>
		<Text className="desc">{desc}</Text>
	</ArticleContainer>
);

export default function ArticlesBody() {
	return (
		<div>
			<Article
				date="May 11 2022"
				name="Name of the Article"
				link="https://es.lipsum.com/"
				desc="El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aqu"
			/>
			<Article
				date="May 11 2022"
				name="Name of the Article"
				link="https://es.lipsum.com/"
				desc="El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aqu"
			/>
		</div>
	);
}
