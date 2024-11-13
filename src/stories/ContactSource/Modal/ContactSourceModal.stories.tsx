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
    render: ()=>
        <ContactSourceModal sources={
            [
                {
                    "picturePath": "https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg",
                    "sourceName": "Discord"
                },
                {
                    "picturePath": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png",
                    "sourceName": "Contacts"
                },
                {
                    "picturePath": "https://cdn.iconscout.com/icon/free/png-512/free-google-drive-2981839-2476481.png?f=webp&w=256",
                    "sourceName": "Drive"
                },
                {
                    "picturePath": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png",
                    "sourceName": "Google"
                }
            ]
        }/>
}

/*
Add stuff like this in the "raw" properties to see them properly
[
{
  "picturePath": "https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg",
  "sourceName": "Discord"}
]
 */