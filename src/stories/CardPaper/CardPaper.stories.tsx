import {Meta, StoryObj} from "@storybook/react";
import CardPaper from "./CardPaper.tsx";
import RouteCard from "../RouteCard/RouteCard.tsx";
import {LocationTag} from "../LocationTag/LocationTag.tsx";

const meta: Meta<typeof CardPaper> ={
    title:'Organisms/CardPaper',
    component: CardPaper,
    tags: ['autodocs'],
} satisfies Meta<typeof CardPaper>;

export default meta
type Story = StoryObj<typeof meta>

export const RouteOptions: Story = {
    name:'RouteOptions',
    render: () => (
        <CardPaper text={"Route Options"}>
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'bus', text: '200'},
                ]}
                time={"40 min"}
                money={"$400"}
            />
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'bus', text: '300'},
                    {variant: 'walk'},
                ]}
                time={"45 min"}
                money={"$350"}
            />
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'walk'},
                    {variant: 'bus', text: '400'},
                    {variant: 'bus', text: '500'},
                    {variant: 'bus', text: '600'},
                    {variant: 'walk'},
                ]}
                time={"50 min"}
                money={"$600"}
            />
        </CardPaper>
    )
}

export const RecentPlaces: Story = {
    name:'RecentPlaces',
    render: () => (
        <CardPaper text={"Recent Places"}>
            <LocationTag
                locationName={"Times Square"}
                locationAddress={"1560 Broadway, New York, NY 10036, United States"}></LocationTag>
            <LocationTag
                locationName={"Statue of Liberty"}
                locationAddress={"Liberty Island, New York, NY"}></LocationTag>
            <LocationTag
                locationName={"Eiffel Tower"}
                locationAddress={"Champ de Mars, 5 Avenue Anatole France, Paris, Île-de-France"}></LocationTag>
        </CardPaper>
    )
}
