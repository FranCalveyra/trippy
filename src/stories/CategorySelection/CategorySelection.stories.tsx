import {Meta, StoryObj} from "@storybook/react";
import {CategorySelection} from "./CategorySelection.tsx";

const meta: Meta<typeof CategorySelection> ={
    title:'Molecules/CategorySelection',
    component:CategorySelection,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CategorySelection>

export const Default: Story = {
    name:'Default',
    render: () => <CategorySelection/>
}