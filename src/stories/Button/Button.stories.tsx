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
export const Outlined: Story = {
    name:'adsda',
    render: (args) =>
        <div className={'flex flex-col w-[250px] gap-2'}>
            <Button variant={'outlined'} size={'large'} {...args}>Button</Button>
            <Button variant={'outlined'} size={'medium'}{...args}>Button</Button>
            <Button variant={'outlined'} size={'small'}{...args}>Button</Button>
        </div>
}

