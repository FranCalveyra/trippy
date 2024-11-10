import {Meta, StoryObj} from "@storybook/react";
import Button from "./Button.tsx";

const meta: Meta<typeof Button> ={
    title:'Atoms/Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['fulfilled','outlined'],
            control:{type:'select'},
            defaultValue:'fulfilled'
        },
        size:{
            options:['small','medium','large'],
            control:{type:'select'},
            defaultValue:'medium'
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    name:'Fulfilled',
    render: (args) => <Button {...args}>Button</Button>
}

export const Fulfilled: Story = {
    name:'Outlined',
    render: (args) => <Button variant={'outlined'} {...args}>Button</Button>
}

