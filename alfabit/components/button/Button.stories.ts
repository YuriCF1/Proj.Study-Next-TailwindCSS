import { Meta, StoryObj } from '@storybook/react';
// import { Primary } from './../../stories/Button.stories';

// import Button, { ButtonProps } from './Button';
import Button, { ButtonProps } from './Button';

// const meta: Meta<typeof Button> {
const meta: Meta<ButtonProps> = {
    title: 'Button',
    // tags: ['autodocs'], //Dizendo que quero uma documentação autogerada. Colaborando com a tag autodoc no arqv main.ts
    component: Button,
    argTypes: {}
}

export default meta;

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botao'
    }
}

