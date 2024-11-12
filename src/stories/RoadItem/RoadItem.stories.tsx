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
    render: () => (
        <div className={"flex flex-row justify-center items-center gap-1 overflow-x-auto overflow-y-hidden shrink-0"}>
            <RoadItem variant={'bus'} text={"200"}/>
        </div>
    )
}

export const Walking: Story = {
    name:'Walking',
    render: () => (
        <div className={"flex flex-row justify-center items-center gap-1 overflow-x-auto overflow-y-hidden shrink-0"}>
            <RoadItem variant={'walk'}/>
        </div>
    )
}

