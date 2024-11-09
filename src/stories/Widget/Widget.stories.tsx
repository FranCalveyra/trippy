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
    render: (args) => <Widget {...args} />, // Fixed by using the correct JSX syntax
    args: {
        imagePath: "https://via.placeholder.com/211x95", // Default prop value
        widgetTitle: "Current Location",
    },
};
