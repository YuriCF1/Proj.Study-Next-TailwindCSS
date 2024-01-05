function toRgba(cssVar) {
  const color = `var(${cssVar})`;
  return ({ opacityValue }) => `rgba(${color}, ${opacityValue})`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: { //Tudo dentro de theme, sobrescreve. Exemplo:^Vai sobrescrever as cores do tailwind
    // },
    screens: {
      mobile: 'var(--screen-mobile)',
      tablet: 'var(--screen-tablet)',
      desktop: 'var(--screen-desktop)',
      tv: 'var(--screen-tv)',
    },
    extend: {
      colors: {
        //O que estiver no extend, vai usar as cores padrão e vai extender, adicionando novas
        // example: "#f58912"
        primary: "var(--primaryColor)",
        primaryOpacity: ({ opacityValue }) =>
          `rgba(var(--primaryColorOpacity), ${opacityValue})`,

        // Pode-se fazer contas matemáticas também
        /*colors: {
            prmiary: ({ opacityValue }) => `rgba(var(--primary), ${opacityValue/2})`
        }*/
        // _____ou______
        /*
          colors: ({ theme }) => {
            primary: theme('var(--primary) / 75%')
          }
        */
        secondary: toRgba("--secondary"),
        tertiary: toRgba("--tertiary"),
        quaternary: toRgba("--quaternary"),
        hover: toRgba("--hover"),
        click: toRgba("--click"),
        icon: toRgba("--icon"),
        outline: toRgba("--outline"),
        divider: toRgba("--divider"),
        "bg-light": toRgba("--bg-light"),
        "bg-dark": toRgba("--bg-dark"),
        "bg-disabled": toRgba("--bg-disabled"),
        "text-primary": toRgba("--text-primary"),
        "text-secondary": toRgba("--text-secondary"),
        "text-tertiary": toRgba("--text-tertiary"),
        "text-disabled": toRgba("--text-disabled"),

        example: "var(--example)",
        example2: "var(--example2)",
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
    },
  },
  plugins: [],
};
