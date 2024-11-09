import {Meta, StoryObj} from "@storybook/react";
import {ContactSourceModal} from "./ContactSourceModal.tsx";

const meta: Meta<typeof ContactSourceModal> ={
    title:'Molecules/ContactSourceModal',
    component:ContactSourceModal,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ContactSourceModal>

export const Default: Story = {
    name:'Default',
    render: (args) =>
        <ContactSourceModal sources={args.sources}/>
}

/*
Add stuff like this in the "raw" properties to see them properly
[
{
  "picturePath": "https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg",
  "sourceName": "Discord"}
]
 */