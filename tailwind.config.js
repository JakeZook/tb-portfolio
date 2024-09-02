// tailwind.config.js
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				wave: "wave 3s infinite ease-in-out",
			},
			keyframes: {
				wave: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			fontFamily: {
				pacifico: ["Pacifico", "cursive"],
				greatvibes: ["Great Vibes", "cursive"],
				playfair: ["Playfair Display", "serif"],
			},
		},
	},
	daisyui: {
		themes: ["light", "dark", "retro"],
	},
	plugins: [require("daisyui")],
};
