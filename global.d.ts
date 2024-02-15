/// <reference types="vite/client" />

import type React from 'react';
import type Browser from 'webextension-polyfill';

declare global {
	const browser: Browser.Browser;
	const defineBackground: (arg0: () => void) => void;
}

type ImageMetadata = {
	src: string;
	width: number;
	height: number;
};

declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
