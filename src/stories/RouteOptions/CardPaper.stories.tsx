import {Meta, StoryObj} from "@storybook/react";
import CardPaper from "./CardPaper.tsx";
import RouteCard from "../RouteCard/RouteCard.tsx";

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
                money={"$500"}
            />
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'bus', text: '200'},
                    {variant: 'walk'},
                ]}
                time={"40 min"}
                money={"$500"}
            />
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'bus', text: '200'},
                    {variant: 'bus', text: '300'},
                    {variant: 'walk'},
                ]}
                time={"40 min"}
                money={"$500"}
            />
        </CardPaper>
    )
}

export const RecentPlaces: Story = {
    name:'RecentPlaces',
    render: () => (
        <CardPaper text={"Route Options"}>
            <div>TODO:</div>
            <div>RecentPlaces</div>
        </CardPaper>
    )
}
