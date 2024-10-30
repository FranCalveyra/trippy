import {Meta, StoryObj} from "@storybook/react";
import Button from "./Icon.tsx";
import Icon from "./Icon.tsx";

const meta: Meta<typeof Icon> ={
    title:'Atoms/Icon',
    component:Icon,
    tags: ['autodocs'],
    control:{
        type: 'selection'
    }
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
    name:'Default',
    render: () => <Icon variant={'notifications'}/>
}

