import {Meta, StoryObj} from "@storybook/react";
import RouteOptions from "./RouteOptions.tsx";
import RouteCard from "../RouteCard/RouteCard.tsx";

const meta: Meta<typeof RouteOptions> ={
    title:'Frames/RouteOptions',
    component: RouteOptions,
    tags: ['autodocs'],
} satisfies Meta<typeof RouteOptions>;

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name:'Default',
    render: () => (
        <div className={"w-[400px]"}>
            <RouteOptions>
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
            </RouteOptions>
        </div>
    )
}
