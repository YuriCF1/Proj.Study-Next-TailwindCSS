import { Meta, StoryObj } from '@storybook/react';


import Input, { InputProps } from './Input';

const meta: Meta<InputProps> = {
    title: 'Molecules/Input',
    component: Input,
    argTypes: {
        label: {
            type: "string",
        },
        disabled: {
            type: "boolean"
        },
        multiline: {
            type: "boolean"
        },
        placeholder: {
            type: 'string'
        },
        type: {
            type: 'string'
        }
    }
}

export default meta;

export const Primary: StoryObj<InputProps> = {
    args: {
        value: 'Input'
    }
}

export const PrimaryDisabled: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        disabled: true
    }
}

export const Multiline: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        multiline: true
    }
}

export const MultilineDisabled: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        multiline: true,
        disabled: true
    }
}

export const PrimaryLabel: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        label: 'Nome'
    }
}
export const PrimaryLabelDisabled: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        label: 'Nome',
        disabled: true
    }
}

export const MultilineLabel: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        label: 'Nome',
        multiline: true
    }
}
export const MultilineLabelDisabled: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        label: 'Nome',
        disabled: true,
        multiline: true
    }
}