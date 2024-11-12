import type { Meta, StoryObj } from '@storybook/react';
import {MessageBubble} from "./MessageBubble.tsx";

const meta: Meta<typeof MessageBubble>= {
    title: 'Organisms/MessageBubble',
    component: MessageBubble,
    parameters: {
        layout: 'centered',
    },
    args: {
        message: "Message",
        time: "12:00",
        status: "sent",
        variant: "outgoing",
        layout: "single-line",
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MessageBubble>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        message: "Hello, how are you?",
        time: "12:00",
        status: "sent",
        variant: "outgoing",
        layout: "single-line",
    },
};
export const IncomingMessage: Story = {
    args: {
        message: "I'm good, thanks!",
        time: "12:01",
        variant: "incoming",
        layout: "single-line",
    },
};

export const LongMessage: Story = {
    args: {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: "12:02",
        status: "sent",
        variant: "outgoing",
        layout: "multi-line",
    },
};

export const ShortMessage: Story = {
    args: {
        message: "Hi!",
        time: "12:03",
        status: "read",
        variant: "outgoing",
        layout: "single-line",
    },
};
