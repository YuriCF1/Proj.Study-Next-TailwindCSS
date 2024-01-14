import Link, { LinkProps } from './Link';
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<LinkProps> = {
    title: "Molecules/Link",
    tags: ['autodocs'],
    component: Link,
    argTypes: {}
}

export default meta;

export const Primary: StoryObj<LinkProps> = {
    args: {
        children: "Link",
        href: '/'
    }
}