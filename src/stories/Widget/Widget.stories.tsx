import {Meta, StoryObj} from "@storybook/react";
import {Widget} from "./Widget.tsx";

const meta: Meta<typeof Widget> ={
    title:'Organisms/Widget',
    component: Widget,
    tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    name:'Default',
    render: (args) => <Widget imagePath={args.imagePath} widgetTitle={args.widgetTitle}/>}