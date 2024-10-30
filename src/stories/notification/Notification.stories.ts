import type { Meta, StoryObj } from '@storybook/react';
import {Notification} from "./Notification.tsx";

const meta = {
    title: 'Components/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    } satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const example: Story = {
    args: {
        title: "Stroke in Av. Cordoba",
        description: "There is a stroke in Av. Cordoba"
    }
}