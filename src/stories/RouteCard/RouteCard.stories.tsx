import {Meta, StoryObj} from "@storybook/react";
import RouteCard from "./RouteCard.tsx";

const meta: Meta<typeof RouteCard> ={
    title:'Organisms/RouteCard',
    component: RouteCard,
    tags: ['autodocs'],
} satisfies Meta<typeof RouteCard>;

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
    name:'Single',
    args: {
        roadItemPropsArray: [
            {variant: 'bus', text: '200'}
        ],
        time: "40 min",
        money: "$500"
    }
}

export const Double: Story = {
    name:'Double',
    render: () => {
        return (
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'bus', text: '200'},
                    {variant: 'walk'},
                ]}
                time={"40 min"}
                money={"$500"}
            />
        );
    }
}

export const Triple: Story = {
    name:'Triple',
    render: () => {
        return (
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'bus', text: '200'},
                    {variant: 'bus', text: '300'},
                    {variant: 'walk'},
                ]}
                time={"40 min"}
                money={"$500"}
            />
        );
    }
}

export const Quadruple: Story = {
    name:'Quadruple',
    render: () => {
        return (
            <RouteCard
                roadItemPropsArray={[
                    {variant: 'bus', text: '200'},
                    {variant: 'bus', text: '300'},
                    {variant: 'bus', text: '400'},
                    {variant: 'walk'},
                ]}
                time={"40 min"}
                money={"$500"}
            />
        );
    }
}
