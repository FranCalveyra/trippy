import {Meta, StoryObj} from "@storybook/react";
import IconButton from "./IconButton.tsx";

const meta: Meta<typeof IconButton> ={
    title:'Molecules/IconButton',
    component:IconButton,
    tags: ['autodocs'],
    // argTypes:{
    //     variant:{
    //         options:['fulfilled','outlined','ghost','white'],
    //         control:{type:'select'},
    //         defaultValue:'fulfilled'
    //     },
    //     size:{
    //         options:['small','medium','large'],
    //         control:{type:'select'},
    //         defaultValue:'medium'
    //     }
    // }
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
    name:'Default',
    render: (args) => <IconButton value={'Button'} iconVariant={'groups'} {...args}>Button</IconButton>
}

export const Seagreen: Story = {
    name:'Seagreen',
    render: (args) => <IconButton value={'Button'} variant={'secondary'} iconVariant={'groups'} {...args}>Button</IconButton>
}

