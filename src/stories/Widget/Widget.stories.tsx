import { Meta, StoryObj } from "@storybook/react";
import { Widget } from "./Widget";

const meta: Meta<typeof Widget> = {
    title: 'Organisms/Widget',
    component: Widget,
    tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    render: (args) => (
        <div className="flex justify-center items-center">
            <Widget {...args} />
        </div>
    ),
    args: {
        widgetTitle: "Current Location",
    },
};