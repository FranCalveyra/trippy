import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification.tsx';

const meta = {
    title: 'Organisms/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        variant: 'default',
        iconVariant: 'warningNotification',
        title: "Stroke in Av. Cordoba",
        description: "There is a stroke in Av. Cordoba",
    },
};


export const warning: Story = {
    args: {
        variant: 'warning',
        iconVariant: 'warning',
        title: "Warning",
        description: "This is a warning notification",
    },
};
