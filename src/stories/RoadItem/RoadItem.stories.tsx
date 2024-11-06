import {Meta, StoryObj} from "@storybook/react";
import RoadItem from "./RoadItem.tsx";

const meta: Meta<typeof RoadItem> ={
    title:'Molecules/RoadItem',
    component: RoadItem,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RoadItem>

export const Default: Story = {
    name:'Default',
    render: () => <RoadItem iconVariant={'bus'} text={"200"}/>
}

export const Walking: Story = {
    name:'Walking',
    render: () => <RoadItem iconVariant={'walk'}/>
}

