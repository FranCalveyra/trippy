import {LocationTag} from "./LocationTag.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof LocationTag> ={
    title: "Components/LocationTag",
    component: LocationTag,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof LocationTag>

export const Default: Story ={
    name:'Default',
    render: (args) => <LocationTag locationName={args.locationName} locationAddress={args.locationAddress} />
}