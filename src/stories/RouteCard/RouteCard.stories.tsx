import {Meta, StoryObj} from "@storybook/react";
import RouteCard from "./RouteCard.tsx";

const meta: Meta<typeof RouteCard> ={
    title:'Components/RouteCard',
    component: RouteCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RouteCard>

export const Single: Story = {
    name:'Single',
    render: () => {
        return (
            <RouteCard
                roadItemPropsArray={[
                    {iconVariant: 'bus', text: '200'},
                ]}
                time={"40 min"}
                money={"$500"}
            />
        );
    }
}

export const Double: Story = {
    name:'Double',
    render: () => {
        return (
            <RouteCard
                roadItemPropsArray={[
                    {iconVariant: 'bus', text: '200'},
                    {iconVariant: 'walk'},
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
                    {iconVariant: 'bus', text: '200'},
                    {iconVariant: 'bus', text: '300'},
                    {iconVariant: 'walk'},
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
                    {iconVariant: 'bus', text: '200'},
                    {iconVariant: 'bus', text: '300'},
                    {iconVariant: 'bus', text: '400'},
                    {iconVariant: 'walk'},
                ]}
                time={"40 min"}
                money={"$500"}
            />
        );
    }
}
