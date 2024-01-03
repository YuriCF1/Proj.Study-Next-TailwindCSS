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

        example: "var(--example)",
        example2: "var(--example2)",
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
