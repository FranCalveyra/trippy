import {Meta, StoryObj} from "@storybook/react";
import {ContactSource} from "./ContactSource.tsx";

const meta: Meta<typeof ContactSource> ={
    title:'Atoms/ContactSource',
    component:ContactSource,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ContactSource>

export const Default: Story = {
    name:'Default',
    render: (args) =>
        <ContactSource picturePath={args.picturePath} sourceName={args.sourceName}/>
}