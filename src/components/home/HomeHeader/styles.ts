import styled, { css } from 'styled-components';

export const HomeHeaderContainer = styled.header(
	({ theme: { space, radii, colors, media } }) => css`
		display: grid;
		row-gap: calc(2 * ${space.lg});
		justify-content: center;
		align-items: center;
		text-align: center;

		.avatar {
			position: relative;

			& > .bg {
				position: absolute;
				height: 10rem;
				min-width: 70%;
				bottom: 0;
				left: calc(15%);
				background: ${colors.menu};
				transform: skew(-8deg, -8deg);
				border-radius: ${radii['rround-sm']};
			}

			#avatar {
				position: relative;
				z-index: 1;
				height: 15rem;
			}
		}

		${media.bp1} {
			grid-template-areas:
				'avatar greetings empty'
				'avatar self-intro empty';
			grid-template-columns: 0.7fr 0.6fr;
			justify-items: center;
			gap: calc(4 * ${space.lg});
			text-align: right;

			& > * {
				width: 100%;
			}

			.greetings {
				grid-area: greetings;
				align-self: end;
			}

			.avatar {
				grid-area: avatar;

				& > .bg {
					height: 15rem;
					width: 100%;
				}

				#avatar {
					height: 20rem;
				}
			}

			.self-intro {
				grid-area: self-intro;
				align-self: start;
			}
		}
	`
);
