import { Meta, StoryObj } from '@storybook/react';
// import { Primary } from './../../stories/Button.stories';

import Button, { ButtonProps } from './Button';

// const meta: Meta<typeof Button> {

// Meta são as metainformações do componente
const meta: Meta<ButtonProps> = {
    title: 'Molecules/Button',
    // tags: ['autodocs'], //Dizendo que quero uma documentação autogerada. Colaborando com a tag autodoc no arqv main.ts
    component: Button,
    argTypes: {
        children: {
            type: "string",
        },
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        }
    }
}

export default meta;

// Qualquer outro objeto a ser exporta, o storybook entende que sejam variações do componente. Botão pequeno, com foco, com ícone...
// export const Primary: StoryObj<typeof Button> = {
export const Primary: StoryObj<ButtonProps> = {
    // Agora que eu tipei o Primary, com o tipo do Botão, posso colocar qualquer propriedade deste, como o children
    args: {
        children: 'Botao'
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botao',
        disabled: true
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botao',
        variant: "secondary"
    }
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botao',
        variant: "secondary",
        disabled: true
    }
}

export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet'
    }
}
// ______________________________________________TERCIÁRIO______________________________________________
export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botao',
        variant: "tertiary"
    }
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botao',
        variant: "tertiary",
        disabled: true
    }
}

export const TertiaryThemeViolet: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: "tertiary",
        className: 'theme-violet'
    }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: "secondary",
        className: 'theme-violet'
    }
}
