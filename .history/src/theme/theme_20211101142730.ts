import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
	colors: {
		brand: {
			50: '#e60000',
			100: '#cc0000',
			200: '#b30000',
			300: '#990000',
			400: '#890000',
		}
	},
	fonts: {
		heading: `Montserrat, ${base.fonts?.heading}`,
		body: `Inter, ${base.fonts?.body}`
	}
});

export default theme;