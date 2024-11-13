import {Meta, StoryObj} from "@storybook/react";
import RecentPlaces from "./RecentPlaces.tsx";
import {LocationTag} from "../LocationTag/LocationTag.tsx";

const meta: Meta<typeof RecentPlaces> ={
    title:'Frames/RecentPlaces',
    component: RecentPlaces,
    tags: ['autodocs'],
} satisfies Meta<typeof RecentPlaces>;

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name:'Default',
    render: () => (
        <div className={"w-[400px]"}>

            <RecentPlaces>
                <LocationTag
                    locationName={"Times Square"}
                    locationAddress={"1560 Broadway, New York, NY 10036, United States"}></LocationTag>
                <LocationTag
                    locationName={"Statue of Liberty"}
                    locationAddress={"Liberty Island, New York, NY"}></LocationTag>
                <LocationTag
                    locationName={"Eiffel Tower"}
                    locationAddress={"Champ de Mars, 5 Avenue Anatole France, Paris, Île-de-France"}></LocationTag>
            </RecentPlaces>
        </div>
    )
}
