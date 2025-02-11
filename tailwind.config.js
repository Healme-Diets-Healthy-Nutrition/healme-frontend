const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
  	screens: {
  		sm: '480px',
  		md: '768px',
  		lg: '976px',
  		xl: '1440px'
  	},
  	fontSize: {
  		xs: [
  			'0.75rem',
  			{
  				lineHeight: '1rem'
  			}
  		],
  		sm: [
  			'0.875rem',
  			{
  				lineHeight: '1.25rem'
  			}
  		],
  		base: [
  			'1rem',
  			{
  				lineHeight: '1.5rem'
  			}
  		],
  		lg: [
  			'1.125rem',
  			{
  				lineHeight: '1.75rem'
  			}
  		],
  		xl: [
  			'1.25rem',
  			{
  				lineHeight: '1.75rem'
  			}
  		],
  		'2xl': [
  			'1.5rem',
  			{
  				lineHeight: '2rem'
  			}
  		],
  		'3xl': [
  			'1.875rem',
  			{
  				lineHeight: '2.25rem'
  			}
  		],
  		'4xl': [
  			'2.25rem',
  			{
  				lineHeight: '2.5rem'
  			}
  		],
  		'5xl': [
  			'3rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'6xl': [
  			'3.75rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'7xl': [
  			'4.5rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'8xl': [
  			'6rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'9xl': [
  			'8rem',
  			{
  				lineHeight: '1'
  			}
  		]
  	},
  	borderWidth: {
  		'0': '0',
  		'2': '2px',
  		'3': '3px',
  		'4': '4px',
  		'6': '6px',
  		'8': '8px',
  		DEFAULT: '1px'
  	},
  	borderRadius: {
  		none: '0',
  		sm: '0.125rem',
  		DEFAULT: '4px',
  		md: '0.375rem',
  		lg: '0.5rem',
  		xl: '0.75rem',
  		'2xl': '1rem',
  		'3xl': '1.5rem',
  		full: '9999px'
  	},
  	extend: {
  		spacing: {
  			'1': '0.25rem',
  			'2': '0.5rem',
  			'3': '0.75rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			'11': '2.75rem',
  			'12': '3rem',
  			'13': '3.125rem',
  			'14': '3.5rem',
  			'15': '3.75rem',
  			'16': '4rem',
  			'19': '4.75rem',
  			'20': '5rem',
  			'23': '5.9375rem',
  			'24': '6rem',
  			'25': '6.25rem',
  			'26': '6.5rem',
  			'28': '7rem',
  			'30': '7.5rem',
  			'32': '8rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  			'56': '14rem',
  			'60': '15rem',
  			'64': '16rem',
  			'69': '17.8125rem',
  			'72': '18rem',
  			'76': '19rem',
  			'80': '20rem',
  			'96': '24rem',
  			'100': '25rem',
  			'110': '30rem',
  			'112': '28rem',
  			'120': '33.25rem',
  			'128': '34.375rem',
  			'144': '36rem',
  			'152': '38rem',
  			'192': '48rem',
  			'256': '64rem',
  			px: '1px',
  			'0.5': '0.125rem',
  			'1.5': '0.375rem',
  			'2.5': '0.625rem',
  			'3.5': '0.875rem'
  		},
  		colors: {
  			'rose-taupe': '#7D4F50',
  			'old-rose': '#CC8B86',
  			linen: '#F9EAE1',
  			'dark-gray': '#747474',
  			'white-smoke': '#F8F8F8',
  			'light-grayish-orange': '#F3D0C3',
  			'grayish-red': '#B39391',
  			'hover-outline': '#f2f0ef',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			raleway: [
  				'Raleway',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};

