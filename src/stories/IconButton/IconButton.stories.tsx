import {Meta, StoryObj} from "@storybook/react";
import IconButton from "./IconButton.tsx";

const meta: Meta<typeof IconButton> ={
    title:'Molecules/IconButton',
    component:IconButton,
    tags: ['autodocs'],
    args:{
        iconVariant:'list'
    }
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
    name:'Default',
    render: (args) => <IconButton value={'Button'} iconVariant={'lists'} {...args}>Button</IconButton>
}
