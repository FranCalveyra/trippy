import {ChatInput} from "./ChatInput.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/ChatInput',
    component: ChatInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Write a message",
        onSend: (message: string) => {
            console.log(message);
        }
    }
}