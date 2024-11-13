import {Meta, StoryObj} from "@storybook/react";
import Icon from "./Icon.tsx";
import tailwindConfig from "../../../tailwind.config";

const meta: Meta<typeof Icon> ={
    title:'Atoms/Icon',
    component:Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args:{
        variant: 'notifications',
        color: tailwindConfig.theme.colors.primary["700"]
    },
    control:{
        type: 'selection'
    },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
    name:'Default',
    args:{
        variant: 'notifications',
        color: tailwindConfig.theme.colors.primary["700"]
    }
}

