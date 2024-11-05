import {Meta, StoryObj} from "@storybook/react";
import {CategorySelection} from "./CategorySelection.tsx";

const meta: Meta<typeof CategorySelection> ={
    title:'Molecules/CategorySelection',
    component:CategorySelection,
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

type Story = StoryObj<typeof CategorySelection>

export const Default: Story = {
    name:'Default',
    render: () => <CategorySelection/>
}