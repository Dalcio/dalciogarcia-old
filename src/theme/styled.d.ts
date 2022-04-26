/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import { Duration } from './system/animations.types';
import { Colors } from './system/colors.types';
import { SpaceProps } from './system/space.types';

export type Theme = {
	colors: Colors;
	space: SpaceProps;
	durations: Duration;
};

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
