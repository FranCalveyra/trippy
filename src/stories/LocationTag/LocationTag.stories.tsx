import {LocationTag} from "./LocationTag.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof LocationTag> ={
    title: "Components/LocationTag",
    component: LocationTag,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof LocationTag>

export const Plain: Story ={
    name:'Plain',
    args: {
        locationName:"Times Square",
        locationAddress:"1560 Broadway, New York, NY 10036, United States",
        variant: 'plain'
    },
    render: ({locationAddress, locationName, variant}) => (
        <div className={"w-[375px]"}>
            <LocationTag locationName={locationName} locationAddress={locationAddress} variant={variant}/>
        </div>
    )
}

export const Floating: Story = {
    name: 'Floating',
    args: {
        locationName: "Times Square",
        locationAddress: "1560 Broadway, New York, NY 10036, United States",
        variant: 'floating'
    },
    render: ({locationAddress, locationName, variant}) => (
        <div className={"w-[375px]"}>
            <LocationTag locationName={locationName} locationAddress={locationAddress} variant={variant}/>
        </div>
    )
}