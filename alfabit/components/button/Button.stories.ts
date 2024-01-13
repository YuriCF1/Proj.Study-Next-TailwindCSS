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
    // Agora que eu tipei o Primary, com o tipo do Butão, posso colocar qualquer propriedade deste, como o children
    args: {
        children: 'Botao'
    }

}

export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet'
    }
}
