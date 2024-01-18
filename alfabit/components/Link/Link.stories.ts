import Link, { LinkProps } from './Link';
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<LinkProps> = {
    title: "Molecules/Link", //Sendo sendo associado a subcategoria  de Moléculas
    // tags: ['autodocs'],
    component: Link,
    argTypes: {
        children: {
            type: 'string'
        },
        href: {
            type: 'string'
        },
        disabled: {
            type: 'boolean'
        },
        className: {
            type: 'string'
        }
    }
}

export default meta;

export const Primary: StoryObj<LinkProps> = {
    args: {
        children: "Link",
        href: '/'
    }
}

export const Disabled: StoryObj<LinkProps> = {
    args: {
        children: "Link",
        href: "/",
        disabled: true
    }
}
export const Violet: StoryObj<LinkProps> = {
    args: {
        children: "Link",
        href: "/",
        className: "theme-violet"
    }
}