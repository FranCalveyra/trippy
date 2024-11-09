import type { Meta, StoryObj } from '@storybook/react';
import {MessageBubble} from "./MessageBubble.tsx";

const meta: Meta<typeof MessageBubble>= {
    title: 'Organisms/MessageBubble',
    component: MessageBubble,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MessageBubble>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        message: "Hello, how are you?",
        time: "12:00",
        status: "sent"
    },
};
