/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "rusalangit-black1": "#2A2A2A",
                "rusalangit-black2": "#3F3F3F",
                "rusalangit-black3": "515151",
                "rusalangit-lightbrown": "#E0915C",
                "rusalangit-brown": "#8D5024",
                "rusalangit-green": "#D8EBC6",
                "rusalangit-darkgreen": "#248D6C",
                "rusalangit-lightblue": "#4CAAC9",
                "rusalangit-lightgold": "#FCF3EA",
                "rusalangit-gold": "#C4AE63",
                "rusalangit-lightred": "#E97676",
                "rusalangit-red": "#E05C5C",
            },
        },
    },
    plugins: [],
}
