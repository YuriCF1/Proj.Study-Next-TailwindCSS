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

    // ISSO ABAIXO NÃO FOI NECENSSÁRIO, MAS FOI SOLICITADO
    fontFamily: {
      mulish: "Mulish, sans-serif",
    },
    screens: {
      mobile: "var(--screen-mobile)",
      tablet: "var(--screen-tablet)",
      desktop: "var(--screen-desktop)",
      tv: "var(--screen-tv)",
    },
    spacing: {
      none: "var(--spacing-none) /* 0px */",
      "4xs": "var(--spacing-4xs) /* 8px */",
      "2xs": "var(--spacing-2xs) /* 12px */",
      xs: "var(--spacing-xs) /* 16px */",
      sm: "var(--spacing-sm) /* 20px */",
      md: "var(--spacing-md) /* 24px */",
      lg: "var(--spacing-lg) /* 32px */",
      xl: "var(--spacing-xl) /* 40px */",
      "2xl": "var(--spacing-2xl) /* 48px */",
      "4xl": "var(--spacing-4xl) /* 56px */",
      0: "var(--spacing-none) /* 0px */",
      1: "var(--spacing-4xs) /* 8px */",
      2: "var(--spacing-2xs) /* 12px */",
      3: "var(--spacing-xs) /* 16px */",
      4: "var(--spacing-sm) /* 20px */",
      5: "var(--spacing-md) /* 24px */",
      6: "var(--spacing-lg) /* 32px */",
      7: "var(--spacing-xl) /* 40px */",
      8: "var(--spacing-2xl) /* 48px */",
      9: "var(--spacing-4xl) /* 56px */",
    },

    borderRadius: {
      none: "var(--border-radius-none)",
      sm: "var(--border-radius-sm)",
      md: "var(--border-radius-md)",
      lg: "var(--border-radius-lg)",
    },

    fontSize: {
      xs: "var(--font-xs)",
      sm: "var(--font-sm)",
      md: "var(--font-md)",
      lg: "var(--font-lg)",
      xl: "var(--font-xl)",
    },

    extend: {
      colors: {
        //O que estiver no extend, vai usar as cores padrão e vai extender, adicionando novas
        // example: "#f58912"

        // A função para pegar a opacidade, se torna DESNECESSÁRIA, UTILIZANDO O PLACEHOLDER DO TAILWIND: <alpha-value>
        // primary: "var(--primaryColor)",
        primary: "rgba(var(--primary), <alpha-value>)",
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
        // "bg-light": toRgba("--bg-light"),
        // "bg-dark": toRgba("--bg-dark"),
        // "bg-disabled": toRgba("--bg-disabled"),
        // "text-primary": toRgba("--text-primary"),
        // "text-secondary": toRgba("--text-secondary"),
        // "text-tertiary": toRgba("--text-tertiary"),
        // "text-disabled": toRgba("--text-disabled"),

        // "text-disabled": toRgba("--text-disabled"),

        example: "var(--example)",
        example2: "var(--example2)",
      },

      backgroundColor: {
        light: toRgba("--bg-light"),
        dark: toRgba("--bg-dark"),
        disabled: toRgba("--bg-disabled"),
      },
      textColor: {
        // Criando um bloco novo para não confundir com as cores primary... padrões no bloco "colors"
        gray: {
          primary: toRgba("--text-primary"),
          secondary: toRgba("--text-secondary"),
          tertiary: toRgba("--text-tertiary"),
          disabled: toRgba("--text-disabled"),
        },
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        focus: "var(--shadow-focus)",
        outline: "var(--shadow-outline)",
        "button-focus": "var(--shadow-button-focus)",
      },
      blur: {
        default: "var(--blur)",
      },
    },
  },
  plugins: [],
};
