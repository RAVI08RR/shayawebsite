const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", ".flowbite-react/class-list.json"],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			text: {
  				green: 'var(--text-green)',
  				dark1: 'var(--text-dark-1)',
  				dark2: 'var(--text-dark-2)',
  				dark3: 'var(--text-dark-3)',
  				dark4: 'var(--text-dark-4)',
  				dark5: 'var(--text-dark-5)',
  				dark6: 'var(--text-dark-6)',
  				dark7: 'var(--text-dark-7)',
  				dark8: 'var(--text-dark-8)',
  				dark9: 'var(--text-dark-9)',
  				dark10: 'var(--text-dark-10)',
  				dark11: 'var(--text-dark-11)',
  				dark12: 'var(--text-dark-12)',
  				gray1: 'var(--text-gray-1)',
  				gray2: 'var(--text-gray-2)',
  				gray3: 'var(--text-gray-3)',
  				gray4: 'var(--text-gray-4)',
  				gray5: 'var(--text-gray-5)',
  				gray6: 'var(--text-gray-6)',
  				white: 'var(--text-white)'
  			},
  			button: {
  				background: 'var(--button-bg)'
  			},
  			slider: {
  				background: 'var(--slider-bg)',
  				text: 'var(--slider-text)'
  			},
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
  			lexend: [
  				'Lexend',
  				'sans-serif'
  			],
  			marcellus: [
  				'Marcellus',
  				'serif'
  			],
  			inter: [
  				'Inter',
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
  plugins: [flowbiteReact, require("tailwindcss-animate")]
};